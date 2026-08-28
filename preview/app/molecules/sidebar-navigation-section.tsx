"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentDocSection } from "../lib/components";
import { cx } from "./utils";

export function SidebarNavigationSection({
    docSection,
}: {
    docSection: ComponentDocSection;
}) {
    const pathname = usePathname();

    return (
        <div className="sidebar-section ml-2 mt-2">
            <span className="sidebar-label text-accent-medium! font-medium">
                {docSection.title}
            </span>
            {docSection.components.map((component) => {
                const href = `/components/${docSection.prefix}/${component.slug}`;
                const active = pathname === href;

                return (
                    <Link
                        key={component.slug}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={cx(active && "active")}
                    >
                        <span>{component.name}</span>
                        {component.status === "new" && <i>New</i>}
                    </Link>
                );
            })}
        </div>
    );
}
