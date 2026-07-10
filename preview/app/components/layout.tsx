import Link from "next/link";
import type { ReactNode } from "react";
import { inputComponents } from "../lib/components";
import { SiteHeader } from "../ui/site-header";

export default function ComponentsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="docs-shell">
            <SiteHeader />
            <div className="docs-frame">
                <aside className="docs-sidebar">
                    <div className="sidebar-inner">
                        <div className="sidebar-section">
                            <span className="sidebar-label">
                                Getting started
                            </span>
                            <Link href="/">Introduction</Link>
                        </div>
                        <div className="sidebar-section">
                            <span className="sidebar-label">Components</span>
                            <div className="sidebar-group-title">
                                <span>Inputs</span>
                                <span>{inputComponents.length}</span>
                            </div>
                            <nav
                                className="component-nav"
                                aria-label="Input components"
                            >
                                {inputComponents.map((component) => (
                                    <Link
                                        key={component.slug}
                                        href={`/components/${component.slug}`}
                                    >
                                        <span>{component.name}</span>
                                        {component.status === "new" && (
                                            <i>New</i>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>
                {children}
            </div>
        </div>
    );
}
