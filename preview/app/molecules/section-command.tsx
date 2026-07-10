import { CopyIcon } from "../ui/icons";
import { SectionHeader } from "./section-header";
import type { SectionProps } from "./types";
import { cx } from "./utils";

export function SectionCommand({ className, children, nav }: SectionProps) {
  return (
    <section id={nav.id} className={cx("docs-section", className)}>
      <SectionHeader nav={nav} />
      <div className="code-block">
        <div className="code-toolbar">
          <span>Terminal</span>
          <CopyIcon />
        </div>
        <pre><code><span aria-hidden="true">$</span> {children}</code></pre>
      </div>
    </section>
  );
}
