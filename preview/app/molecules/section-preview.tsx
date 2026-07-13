import { Children, isValidElement } from "react";
import { CodeBlock } from "./code-block";
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
            className={cx("rounded-t-none border-t-0", className)}
            code={normalizeCode(children)}
            fileName={label}
            language="tsx"
        />
    );
}

function SectionPreviewRoot({ className, children, nav }: SectionProps) {
    const slots = Children.toArray(children);
    const hasComponent = slots.some(
        (child) => isValidElement(child) && child.type === Component,
    );
    const hasCode = slots.some(
        (child) => isValidElement(child) && child.type === Code,
    );

    if (hasCode && !hasComponent) {
        throw new TypeError(
            "SectionPreview.Code must be used with SectionPreview.Component.",
        );
    }

    return (
        <section id={nav.id} className={cx("docs-section", className)}>
            <SectionHeader nav={nav} />
            <div
                className={cx(
                    "section-preview-content",
                    hasCode && "section-preview-content--with-code",
                )}
            >
                {children}
            </div>
        </section>
    );
}

export const SectionPreview = Object.assign(SectionPreviewRoot, {
    Component,
    Code,
});
