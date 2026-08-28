"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icons";
import { componentDocSections, hookDocs } from "../lib/components";

type FlatEntry = {
    href: string;
    title: string;
    group: string;
};

const componentEntries: FlatEntry[] = componentDocSections.flatMap(
    (section) =>
        section.components.map((component) => ({
            href: `/components/${section.prefix}/${component.slug}`,
            title: component.name,
            group: section.title,
        })),
);

const hookEntries: FlatEntry[] = hookDocs.map((hook) => ({
    href: `/hooks/${hook.slug}`,
    title: hook.name,
    group: "Hooks",
}));

export function PageNavigation() {
    const pathname = usePathname();

    const list = pathname?.startsWith("/hooks")
        ? hookEntries
        : componentEntries;
    const index = list.findIndex((entry) => entry.href === pathname);

    if (index === -1) return null;

    const previous = index > 0 ? list[index - 1] : undefined;
    const next = index < list.length - 1 ? list[index + 1] : undefined;

    if (!previous && !next) return null;

    return (
        <nav className="page-nav" aria-label="Page navigation">
            {previous ? (
                <Link href={previous.href} className="page-nav-link prev">
                    <Icon icon="arrow-left" />
                    <span>
                        <em>Previous</em>
                        {previous.title}
                    </span>
                </Link>
            ) : (
                <span />
            )}
            {next ? (
                <Link href={next.href} className="page-nav-link next">
                    <span>
                        <em>Next</em>
                        {next.title}
                    </span>
                    <Icon icon="arrow-right" />
                </Link>
            ) : (
                <span />
            )}
        </nav>
    );
}
