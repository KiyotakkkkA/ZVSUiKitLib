import type { ReactNode } from "react";
import { SidebarScrollArea } from "../molecules/sidebar-scroll-area";
import { SiteHeader } from "../ui/site-header";
import { SidebarIntroLink } from "../molecules/sidebar-intro-link";
import { HooksNav } from "../molecules/hooks-nav";

export default function HooksLayout({ children }: { children: ReactNode }) {
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
                            <span className="sidebar-label">Hooks</span>
                            <HooksNav />
                        </div>
                    </div>
                </SidebarScrollArea>
                {children}
            </div>
        </div>
    );
}
