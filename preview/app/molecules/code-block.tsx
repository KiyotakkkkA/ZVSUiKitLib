"use client";

import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { cx } from "./utils";

type CodeBlockProps = {
    className?: string;
    code: string;
    fileName?: string;
    language?: string;
    maxContentHeight?: number | string;
};

export function CodeBlock({
    className,
    code,
    fileName,
    language = "typescript",
    maxContentHeight = 520,
}: CodeBlockProps) {
    return (
        <CodeView
            className={cx(
                "overflow-hidden rounded-[9px] border border-(--line) bg-[#0d100e]",
                "[&_.code-view-pre]:m-0! [&_.code-view-pre]:bg-transparent!",
                "[&_.code-view-pre]:text-[13px]! [&_.code-view-pre]:leading-[1.8]!",
                "[&_.code-view-code]:font-(--font-geist-mono)",
                className,
            )}
            code={code}
            language={language}
            fileName={fileName}
            downloadable={false}
            maxContentHeight={maxContentHeight}
        >
            <CodeView.Header
                className={cx(
                    "min-h-9.5 border-(--line) bg-[#0d100e] px-3.25 py-2",
                    "font-(--font-geist-mono) text-[12px] text-(--dim)",
                    "[&_button]:text-[12px] [&_button]:text-(--dim)",
                    "[&_button:hover]:text-(--ink)",
                )}
            />
            <CodeView.Content
                className={cx(
                    "p-4.5 text-[#aeb7b0]",
                    "[scrollbar-color:rgba(183,243,74,0.22)_transparent]",
                )}
            />
        </CodeView>
    );
}
