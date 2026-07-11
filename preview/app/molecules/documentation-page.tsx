import { Children, Fragment, isValidElement, type ReactNode } from "react";
import type { SectionNavigation } from "./types";
import { cx } from "./utils";

type DocumentationPageProps = {
    children: ReactNode;
    className?: string;
};

type NavCarrier = {
    nav?: SectionNavigation;
    children?: ReactNode;
};

function collectNavigation(
    children: ReactNode,
    items: SectionNavigation[] = [],
) {
    Children.forEach(children, (child) => {
        if (!isValidElement(child)) return;

        const props = child.props as NavCarrier;

        if (props.nav) items.push(props.nav);

        if (child.type === Fragment || props.children) {
            collectNavigation(props.children, items);
        }
    });

    return items;
}

function validateNavigation(items: SectionNavigation[]) {
    const ids = new Set<string>();

    for (const item of items) {
        if (!item.id.trim() || !item.title.trim()) {
            throw new Error(
                "Section nav.id and nav.title must be non-empty strings.",
            );
        }

        if (/\s/.test(item.id)) {
            throw new Error(
                `Documentation section id cannot contain whitespace: ${item.id}`,
            );
        }

        if (ids.has(item.id)) {
            throw new Error(`Duplicate documentation section id: ${item.id}`);
        }

        ids.add(item.id);
    }
}

export function DocumentationPage({
    children,
    className,
}: DocumentationPageProps) {
    const navigation = collectNavigation(children);
    validateNavigation(navigation);

    return (
        <>
            <main className={cx("docs-content", className)}>{children}</main>
            <aside className="toc-sidebar">
                <div>
                    <span className="sidebar-label">On this page</span>
                    <nav aria-label="On this page">
                        {navigation.map((item) => (
                            <a key={item.id} href={`#${item.id}`}>
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
}
