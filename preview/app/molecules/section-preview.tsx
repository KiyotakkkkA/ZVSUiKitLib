import { Children, isValidElement } from "react";
import { CodeBlock } from "./code-block";
import { PreviewTabs } from "./preview-tabs";
import { SectionHeader } from "./section-header";
import type { SectionProps, SlotProps } from "./types";
import { cx, normalizeCode } from "./utils";

type CodeProps = SlotProps & { label?: string };

function Component({ className, children }: SlotProps) {
    return (
        <div className={cx("demo-stage", className)}>
            <div>{children}</div>
        </div>
    );
}

function Code({ className, children, label = "example.tsx" }: CodeProps) {
    if (typeof children !== "string") {
        throw new TypeError(
            "SectionPreview.Code children must be raw text imported from a file.",
        );
    }

    return (
        <CodeBlock
            className={cx("rounded-none border-0", className)}
            code={normalizeCode(children)}
            fileName={label}
            language="tsx"
        />
    );
}

function SectionPreviewRoot({ className, children, nav }: SectionProps) {
    const slots = Children.toArray(children);
    const componentSlot = slots.find(
        (child) => isValidElement(child) && child.type === Component,
    );
    const codeSlot = slots.find(
        (child) => isValidElement(child) && child.type === Code,
    );

    if (codeSlot && !componentSlot) {
        throw new TypeError(
            "SectionPreview.Code must be used with SectionPreview.Component.",
        );
    }

    return (
        <section id={nav.id} className={cx("docs-section", className)}>
            <SectionHeader nav={nav} />
            <PreviewTabs preview={componentSlot} code={codeSlot} />
        </section>
    );
}

export const SectionPreview = Object.assign(SectionPreviewRoot, {
    Component,
    Code,
});
