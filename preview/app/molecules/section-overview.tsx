import type { SectionProps, SlotProps } from "./types";
import { cx } from "./utils";

function SectionOverviewRoot({ className, children, nav }: SectionProps) {
  return (
    <section id={nav.id} className={cx("docs-intro", className)}>
      {children}
    </section>
  );
}

function MetaTitle({ className, children }: SlotProps) {
  return <div className={cx("component-type", className)}>{children}</div>;
}

function Title({ className, children }: SlotProps) {
  return <h1 className={className}>{children}</h1>;
}

function Description({ className, children }: SlotProps) {
  return <p className={className}>{children}</p>;
}

function Tags({ className, children }: SlotProps) {
  return <div className={cx("docs-meta", className)}>{children}</div>;
}

export const SectionOverview = Object.assign(SectionOverviewRoot, {
  MetaTitle,
  Title,
  Description,
  Tags,
});
