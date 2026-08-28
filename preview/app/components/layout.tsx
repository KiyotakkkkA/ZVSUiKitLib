import type { ReactNode } from "react";
import {
    compositionComponents,
    feedbackComponents,
    inputComponents,
    overlayComponents,
    typographyComponents,
} from "../lib/components";
import { SiteHeader } from "../ui/site-header";
import { SidebarScrollArea } from "../molecules/sidebar-scroll-area";
import { SidebarNavigationSection } from "../molecules";
import { SidebarIntroLink } from "../molecules/sidebar-intro-link";

export default function ComponentsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="docs-shell">
            <SiteHeader />
            <div className="docs-frame">
                <SidebarScrollArea className="docs-sidebar">
                    <div className="sidebar-inner">
                        <div className="sidebar-section">
                            <span className="sidebar-label">
                                Getting started
                            </span>
                            <SidebarIntroLink />
                        </div>
                        <div className="sidebar-section">
                            <span className="sidebar-label">Components</span>
                            <nav
                                className="component-nav"
                                aria-label="Input components"
                            >
                                <SidebarNavigationSection
                                    docSection={inputComponents}
                                />
                                <SidebarNavigationSection
                                    docSection={overlayComponents}
                                />
                                <SidebarNavigationSection
                                    docSection={compositionComponents}
                                />
                                <SidebarNavigationSection
                                    docSection={feedbackComponents}
                                />
                                <SidebarNavigationSection
                                    docSection={typographyComponents}
                                />
                            </nav>
                        </div>
                    </div>
                </SidebarScrollArea>
                {children}
            </div>
        </div>
    );
}
