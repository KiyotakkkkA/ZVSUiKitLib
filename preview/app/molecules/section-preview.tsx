import { SectionHeader } from "./section-header";
import type { SectionProps } from "./types";
import { cx } from "./utils";

export function SectionPreview({ className, children, nav }: SectionProps) {
    return (
        <section id={nav.id} className={cx("docs-section", className)}>
            <SectionHeader nav={nav} />
            <div className="demo-stage">
                <div className="">{children}</div>
            </div>
        </section>
    );
}
