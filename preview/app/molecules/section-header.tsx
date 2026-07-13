import type { SectionNavigation } from "./types";

export function SectionHeader({ nav }: { nav: SectionNavigation }) {
    return (
        <div className="docs-section-heading">
            <div>
                <span aria-hidden="true">{"//"}</span>
                <h2>{nav.headerTitle}</h2>
            </div>
        </div>
    );
}
