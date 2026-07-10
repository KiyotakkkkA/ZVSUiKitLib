import { CopyIcon } from "../ui/icons";
import { SectionHeader } from "./section-header";
import type { SectionProps } from "./types";
import { cx, normalizeCode } from "./utils";

type SectionCodeProps = SectionProps & {
  label?: string;
};

export function SectionCode({
  className,
  children,
  label = "example.tsx",
  nav,
}: SectionCodeProps) {
  if (typeof children !== "string") {
    throw new TypeError("SectionCode children must be raw text imported from a file.");
  }

  return (
    <section id={nav.id} className={cx("docs-section", className)}>
      <SectionHeader nav={nav} />
      <div className="code-block code-large">
        <div className="code-toolbar">
          <span>{label}</span>
          <CopyIcon />
        </div>
        <pre><code>{normalizeCode(children)}</code></pre>
      </div>
    </section>
  );
}
