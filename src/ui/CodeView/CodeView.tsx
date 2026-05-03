import {
    createContext,
    memo,
    useCallback,
    useContext,
    useEffect,
    useId,
    useMemo,
    useSyncExternalStore,
} from "react";
import { Icon } from "@iconify/react";
import {
    createHighlighter,
    type BundledLanguage,
    type BundledTheme,
} from "shiki";
import { cn } from "../../lib/utils";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import type {
    CodeViewContentProps,
    CodeViewContextValue,
    CodeViewHeaderProps,
    CodeViewProps,
} from "./types";

const DEFAULT_THEME: BundledTheme = "dark-plus";

const MAX_CACHE_SIZE = 100;

const SUPPORTED_LANGUAGES: BundledLanguage[] = [
    "bash",
    "shell",
    "javascript",
    "typescript",
    "jsx",
    "tsx",
    "json",
    "python",
    "markdown",
    "yaml",
    "html",
    "css",
    "csharp",
    "sql",
    "xml",
    "lua",
    "go",
    "cpp",
    "rust",
    "php",
    "ruby",
    "kotlin",
    "powershell",
    "mermaid",
];

const LANGUAGE_ALIASES: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    py: "python",
    sh: "bash",
    md: "markdown",
    yml: "yaml",
};

const HTML_ENTITIES: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

const htmlCache = new Map<string, string>();
const htmlCacheListeners = new Map<string, Set<() => void>>();
const pendingRequests = new Set<string>();

const setHtmlCache = (key: string, value: string) => {
    if (htmlCache.size >= MAX_CACHE_SIZE) {
        const oldest = htmlCache.keys().next().value;
        if (oldest) htmlCache.delete(oldest);
    }
    htmlCache.set(key, value);
};

const subscribeToCache = (key: string, listener: () => void) => {
    if (!htmlCacheListeners.has(key)) {
        htmlCacheListeners.set(key, new Set());
    }
    htmlCacheListeners.get(key)!.add(listener);

    return () => {
        const listeners = htmlCacheListeners.get(key);
        listeners?.delete(listener);
        if (listeners?.size === 0) htmlCacheListeners.delete(key);
    };
};

const notifyCache = (key: string) => {
    htmlCacheListeners.get(key)?.forEach((fn) => fn());
};

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;
const themeLoadPromises = new Map<string, Promise<void>>();

const getHighlighter = () => {
    highlighterPromise ??= createHighlighter({
        themes: [DEFAULT_THEME],
        langs: SUPPORTED_LANGUAGES,
    });
    return highlighterPromise;
};

const ensureThemeLoaded = async (
    highlighter: Awaited<ReturnType<typeof createHighlighter>>,
    theme: BundledTheme,
) => {
    if (highlighter.getLoadedThemes().includes(theme)) return;

    const key = String(theme);
    let promise = themeLoadPromises.get(key);

    if (!promise) {
        promise = highlighter.loadTheme(theme).finally(() => {
            themeLoadPromises.delete(key);
        });
        themeLoadPromises.set(key, promise);
    }

    await promise;
};

const hashString = (str: string): string => {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return (hash >>> 0).toString(36);
};

const makeCacheKey = (theme: string, lang: string, code: string) =>
    hashString(`${theme}:${lang}:${code}`);

const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);

const toFallbackHtml = (code: string) =>
    `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;

const langNormCache = new Map<string, string>();

const normalizeLanguage = (language?: BundledLanguage): string => {
    const raw = String(language ?? "")
        .trim()
        .toLowerCase();

    if (langNormCache.has(raw)) return langNormCache.get(raw)!;

    const result = (LANGUAGE_ALIASES[raw] ?? raw) || "plaintext";
    langNormCache.set(raw, result);
    return result;
};

const highlightCode = async ({
    cacheKey,
    code,
    normalizedLanguage,
    theme,
}: {
    cacheKey: string;
    code: string;
    normalizedLanguage: string;
    theme: BundledTheme;
}) => {
    if (htmlCache.has(cacheKey) || pendingRequests.has(cacheKey)) return;

    pendingRequests.add(cacheKey);

    try {
        const highlighter = await getHighlighter();
        await ensureThemeLoaded(highlighter, theme);

        const loaded = highlighter.getLoadedLanguages().map(String);
        const lang = loaded.includes(normalizedLanguage)
            ? normalizedLanguage
            : "plaintext";

        const html = await highlighter.codeToHtml(code, {
            lang,
            theme,
            transformers: [
                {
                    pre(node) {
                        delete node.properties.style;
                        node.properties.class = cn(
                            String(node.properties.class ?? ""),
                            "code-view-pre",
                        );
                    },
                    code(node) {
                        node.properties.class = cn(
                            String(node.properties.class ?? ""),
                            "code-view-code",
                        );
                    },
                },
            ],
        });

        setHtmlCache(cacheKey, html);
    } catch {
        setHtmlCache(cacheKey, toFallbackHtml(code));
    } finally {
        pendingRequests.delete(cacheKey);
        notifyCache(cacheKey);
    }
};

const CodeViewContext = createContext<CodeViewContextValue | null>(null);

const useCodeView = (): CodeViewContextValue => {
    const ctx = useContext(CodeViewContext);
    if (!ctx)
        throw new Error(
            "CodeView sub-components must be used inside <CodeView />",
        );
    return ctx;
};

const CodeViewDefaultActions = memo(() => {
    const { copyable, downloadable, copyCode, downloadCode } = useCodeView();

    if (!copyable && !downloadable) return null;

    const btnClass = cn(
        "inline-flex h-7 items-center justify-center gap-1 rounded-lg px-2 text-xs",
        "text-main-400 transition-colors hover:bg-main-800 hover:text-main-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
    );

    return (
        <div className="flex shrink-0 items-center gap-1">
            {downloadable && (
                <button
                    type="button"
                    aria-label="Download code"
                    className={btnClass}
                    onClick={downloadCode}
                >
                    <Icon icon="mdi:download" width={14} height={14} />
                    <span className="hidden sm:inline">Download</span>
                </button>
            )}

            {copyable && (
                <button
                    type="button"
                    aria-label="Copy code"
                    className={btnClass}
                    onClick={() => void copyCode()}
                >
                    <Icon icon="mdi:content-copy" width={14} height={14} />
                    <span className="hidden sm:inline">Copy</span>
                </button>
            )}
        </div>
    );
});

const CodeViewRoot = ({
    code,
    language,
    theme = DEFAULT_THEME,
    fileName,
    children,
    copyable = true,
    downloadable = true,
    defaultActions = true,
    maxContentHeight,
    onCopy,
    onDownload,
    className,
    ...props
}: CodeViewProps) => {
    const generatedId = useId();
    const normalizedLanguage = normalizeLanguage(language as BundledLanguage);

    const cacheKey = useMemo(
        () => makeCacheKey(theme, normalizedLanguage, code),
        [theme, normalizedLanguage, code],
    );

    const subscribe = useCallback(
        (listener: () => void) => subscribeToCache(cacheKey, listener),
        [cacheKey],
    );
    const getSnapshot = useCallback(
        () => htmlCache.get(cacheKey) ?? "",
        [cacheKey],
    );

    const html = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    const isLoading = html.length === 0;

    useEffect(() => {
        if (html) return;
        void highlightCode({ cacheKey, code, normalizedLanguage, theme });
    }, [cacheKey, code, html, normalizedLanguage, theme]);

    const copyCode = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
        } catch {
            const ta = Object.assign(document.createElement("textarea"), {
                value: code,
                style: "position:fixed;opacity:0",
            });
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        await onCopy?.(code);
    }, [code, onCopy]);

    const downloadCode = useCallback(() => {
        if (onDownload) {
            onDownload(code);
            return;
        }

        const url = URL.createObjectURL(
            new Blob([code], { type: "text/plain;charset=utf-8" }),
        );

        Object.assign(document.createElement("a"), {
            href: url,
            download: fileName ?? "code.txt",
        }).click();

        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, [code, fileName, onDownload]);

    const contextValue = useMemo<CodeViewContextValue>(
        () => ({
            code,
            language: normalizedLanguage,
            fileName,
            html,
            isLoading,
            copyable,
            downloadable,
            defaultActions,
            maxContentHeight,
            copyCode,
            downloadCode,
        }),
        [
            code,
            normalizedLanguage,
            fileName,
            html,
            isLoading,
            copyable,
            downloadable,
            defaultActions,
            maxContentHeight,
            copyCode,
            downloadCode,
        ],
    );

    return (
        <CodeViewContext.Provider value={contextValue}>
            <div
                {...props}
                id={props.id ?? generatedId}
                className={cn(
                    "overflow-hidden rounded-xl border border-main-700 bg-main-950",
                    className,
                )}
            >
                {children ?? (
                    <>
                        <CodeViewHeader />
                        <CodeViewContent />
                    </>
                )}
            </div>
        </CodeViewContext.Provider>
    );
};

const CodeViewHeader = ({
    children,
    showLanguage = true,
    showFileName = true,
    actions,
    className,
    ...props
}: CodeViewHeaderProps) => {
    const { language, fileName, defaultActions } = useCodeView();

    return (
        <div
            {...props}
            className={cn(
                "flex min-h-10 items-center justify-between gap-3 border-b border-main-700 bg-main-900 px-3 py-2",
                className,
            )}
        >
            <div className="flex min-w-0 items-center gap-2">
                {showLanguage && (
                    <span
                        className={cn(
                            "shrink-0 rounded-md bg-main-800 px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-main-400",
                        )}
                    >
                        {language.toUpperCase()}
                    </span>
                )}

                {showFileName && fileName && (
                    <span
                        className={cn("min-w-0 truncate text-xs text-main-400")}
                    >
                        {fileName}
                    </span>
                )}

                {children}
            </div>

            {actions ?? (defaultActions ? <CodeViewDefaultActions /> : null)}
        </div>
    );
};

const CodeViewContent = ({
    loadingFallback,
    className,
    maxHeight,
    ...props
}: CodeViewContentProps) => {
    const { html, isLoading, maxContentHeight } = useCodeView();

    if (isLoading) {
        return (
            <div {...props} className={cn("p-3", className)}>
                {loadingFallback ?? (
                    <div
                        className={cn(
                            "h-20 w-full animate-pulse rounded-lg bg-main-800",
                        )}
                    />
                )}
            </div>
        );
    }

    return (
        <div
            {...props}
            className={cn(
                "text-main-50",
                "[&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0",
                "[&_pre]:text-xs [&_pre]:leading-relaxed",
                "[&_code]:font-mono",
            )}
        >
            <ScrollArea
                orientation="both"
                className={cn("p-3", className)}
                style={{ maxHeight: maxHeight ?? maxContentHeight ?? 1000 }}
            >
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </ScrollArea>
        </div>
    );
};

export const CodeView = Object.assign(memo(CodeViewRoot), {
    Header: CodeViewHeader,
    Content: CodeViewContent,
});
