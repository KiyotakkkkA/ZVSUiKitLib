import { CodeBlock } from "./code-block";
import { cx, normalizeCode } from "./utils";
import { SectionHeader } from "./section-header";
import type { SectionProps } from "./types";

type SectionCommandProps = Omit<SectionProps, "children"> & {
    children: string;
};

export function SectionCommand({
    className,
    children,
    nav,
}: SectionCommandProps) {
    return (
        <section id={nav.id} className={cx("docs-section", className)}>
            <SectionHeader nav={nav} />
            <CodeBlock
                code={`$ ${normalizeCode(children)}`}
                fileName="Terminal"
                language="bash"
            />
        </section>
    );
}
