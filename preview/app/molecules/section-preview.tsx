import { SectionHeader } from "./section-header";
import type { SectionProps } from "./types";
import { cx } from "./utils";

export function SectionPreview({ className, children, nav }: SectionProps) {
  return (
    <section id={nav.id} className={cx("docs-section", className)}>
      <SectionHeader nav={nav} />
      <div className="demo-stage">
        <div className="demo-glow" aria-hidden="true" />
        <div className="demo-card">
          <div className="demo-card-head">
            <span className="demo-kicker">Interactive preview</span>
            <span className="live-indicator"><i /> Live</span>
          </div>
          <div className="component-demo-control">{children}</div>
        </div>
      </div>
    </section>
  );
}
