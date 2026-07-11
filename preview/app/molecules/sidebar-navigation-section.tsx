import Link from "next/link";
import { ComponentDocSection } from "../lib/components";

export function SidebarNavigationSection({
    docSection,
}: {
    docSection: ComponentDocSection;
}) {
    return (
        <div className="sidebar-section ml-2 mt-2">
            <span className="sidebar-label text-accent-medium! font-medium">
                {docSection.title}
            </span>
            {docSection.components.map((component) => (
                <Link
                    key={component.slug}
                    href={`/components/${docSection.prefix}/${component.slug}`}
                >
                    <span>{component.name}</span>
                    {component.status === "new" && <i>New</i>}
                </Link>
            ))}
        </div>
    );
}
