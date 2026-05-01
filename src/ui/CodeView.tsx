import {
    createContext,
    memo,
    useCallback,
    useContext,
    useEffect,
    useId,
    useMemo,
    useState,
    type ComponentPropsWithoutRef,
    type CSSProperties,
    type ReactNode,
} from "react";
import { Icon } from "@iconify/react";
import {
    createHighlighter,
    type BundledLanguage,
    type BundledTheme,
} from "shiki";
import { cn } from "../lib/utils";
import { ScrollArea } from "./ScrollArea";

type CodeViewLanguage = BundledLanguage | string;
type CodeViewTheme = BundledTheme | string;

type CodeViewProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    code: string;
    language?: CodeViewLanguage;
    theme?: CodeViewTheme;
    fileName?: string;
    children?: ReactNode;
    copyable?: boolean;
    downloadable?: boolean;
    defaultActions?: boolean;
    maxContentHeight?: CSSProperties["maxHeight"];
    onCopy?: (code: string) => void | Promise<void>;
    onDownload?: (code: string) => void;
    classNames?: {
        header?: string;
        content?: string;
        loading?: string;
        action?: string;
        language?: string;
        fileName?: string;
    };
};

type CodeViewHeaderProps = ComponentPropsWithoutRef<"div"> & {
    children?: ReactNode;
    showLanguage?: boolean;
    showFileName?: boolean;
    actions?: ReactNode;
};

type CodeViewContentProps = ComponentPropsWithoutRef<"div"> & {
    loadingFallback?: ReactNode;
    maxHeight?: string;
};

type CodeViewContextValue = {
    code: string;
    language: string;
    fileName?: string;
    html: string;
    isLoading: boolean;
    copyable: boolean;
    downloadable: boolean;
    defaultActions: boolean;
    maxContentHeight?: CSSProperties["maxHeight"];
    classNames?: CodeViewProps["classNames"];
    copyCode: () => Promise<void>;
    downloadCode: () => void;
};

const DEFAULT_THEME: BundledTheme = "dark-plus";

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

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;
const htmlCache = new Map<string, string>();

const CodeViewContext = createContext<CodeViewContextValue | null>(null);

const useCodeView = () => {
    const context = useContext(CodeViewContext);

    if (!context) {
        throw new Error("CodeView components must be used inside <CodeView />");
    }

    return context;
};

const getHighlighter = () => {
    highlighterPromise ??= createHighlighter({
        themes: [DEFAULT_THEME],
        langs: SUPPORTED_LANGUAGES,
    });

    return highlighterPromise;
};

const normalizeLanguage = (language?: CodeViewLanguage) => {
    const value = String(language || "plaintext")
        .trim()
        .toLowerCase();

    if (value === "js") return "javascript";
    if (value === "ts") return "typescript";
    if (value === "py") return "python";
    if (value === "sh") return "bash";
    if (value === "md") return "markdown";
    if (value === "yml") return "yaml";

    return value || "plaintext";
};

const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[char];
    });

const toFallbackHtml = (code: string) =>
    `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;

const CodeViewDefaultActions = memo(() => {
    const { copyable, downloadable, copyCode, downloadCode, classNames } =
        useCodeView();

    if (!copyable && !downloadable) {
        return null;
    }

    return (
        <div className="flex shrink-0 items-center gap-1">
            {downloadable && (
                <button
                    type="button"
                    aria-label="Download code"
                    className={cn(
                        "inline-flex h-7 items-center justify-center gap-1 rounded-lg px-2 text-xs",
                        "text-main-400 transition-colors hover:bg-main-800 hover:text-main-50",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                        classNames?.action,
                    )}
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
                    className={cn(
                        "inline-flex h-7 items-center justify-center gap-1 rounded-lg px-2 text-xs",
                        "text-main-400 transition-colors hover:bg-main-800 hover:text-main-50",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                        classNames?.action,
                    )}
                    onClick={() => void copyCode()}
                >
                    <Icon icon="mdi:content-copy" width={14} height={14} />
                    <span className="hidden sm:inline">Copy</span>
                </button>
            )}
        </div>
    );
});

CodeViewDefaultActions.displayName = "CodeViewDefaultActions";

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
    classNames,
    ...props
}: CodeViewProps) => {
    const generatedId = useId();
    const normalizedLanguage = normalizeLanguage(language);
    const cacheKey = `${theme}:${normalizedLanguage}:${code}`;

    const [asyncState, setAsyncState] = useState(() => ({
        key: cacheKey,
        html: "",
    }));
    const cachedHtml = htmlCache.get(cacheKey);
    const asyncHtml = asyncState.key === cacheKey ? asyncState.html : "";
    const html = cachedHtml ?? asyncHtml;
    const isLoading = html.length === 0;

    useEffect(() => {
        let cancelled = false;
        if (cachedHtml) {
            return;
        }

        void getHighlighter()
            .then((highlighter) => {
                const loadedLanguages = highlighter
                    .getLoadedLanguages()
                    .map(String);
                const lang = loadedLanguages.includes(normalizedLanguage)
                    ? normalizedLanguage
                    : "plaintext";

                return highlighter.codeToHtml(code, {
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
            })
            .catch(() => toFallbackHtml(code))
            .then((nextHtml) => {
                if (cancelled) {
                    return;
                }

                htmlCache.set(cacheKey, nextHtml);
                setAsyncState({ key: cacheKey, html: nextHtml });
            });

        return () => {
            cancelled = true;
        };
    }, [cacheKey, code, normalizedLanguage, theme, cachedHtml]);

    const copyCode = useCallback(async () => {
        await navigator.clipboard.writeText(code);
        await onCopy?.(code);
    }, [code, onCopy]);

    const downloadCode = useCallback(() => {
        if (onDownload) {
            onDownload(code);
            return;
        }

        const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.download = fileName || "code.txt";
        anchor.click();

        URL.revokeObjectURL(url);
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
            classNames,
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
            classNames,
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
    const { language, fileName, defaultActions, classNames } = useCodeView();

    return (
        <div
            {...props}
            className={cn(
                "flex min-h-10 items-center justify-between gap-3 border-b border-main-700 bg-main-900 px-3 py-2",
                classNames?.header,
                className,
            )}
        >
            <div className="flex min-w-0 items-center gap-2">
                {showLanguage && (
                    <span
                        className={cn(
                            "shrink-0 rounded-md bg-main-800 px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-main-400",
                            classNames?.language,
                        )}
                    >
                        {language.toUpperCase()}
                    </span>
                )}

                {showFileName && fileName && (
                    <span
                        className={cn(
                            "min-w-0 truncate text-xs text-main-400",
                            classNames?.fileName,
                        )}
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
    const { html, isLoading, classNames, maxContentHeight } = useCodeView();

    if (isLoading) {
        return (
            <div
                {...props}
                className={cn("p-3", classNames?.content, className)}
            >
                {loadingFallback ?? (
                    <div
                        className={cn(
                            "h-20 w-full animate-pulse rounded-lg bg-main-800",
                            classNames?.loading,
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
                className={cn(
                    "code-view-scroll p-3",
                    classNames?.content,
                    className,
                )}
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

export type {
    CodeViewProps,
    CodeViewHeaderProps,
    CodeViewContentProps,
    CodeViewLanguage,
    CodeViewTheme,
};
