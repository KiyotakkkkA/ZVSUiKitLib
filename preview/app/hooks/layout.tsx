import Link from "next/link";
import type { ReactNode } from "react";
import { SidebarScrollArea } from "../molecules/sidebar-scroll-area";
import { SiteHeader } from "../ui/site-header";

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
                            <Link href="/">Introduction</Link>
                        </div>
                        <div className="sidebar-section">
                            <span className="sidebar-label">Hooks</span>
                            <nav className="component-nav" aria-label="Hooks">
                                <Link href="/hooks/use-style">useStyle</Link>
                                <Link href="/hooks/use-toasts">useToasts</Link>
                            </nav>
                        </div>
                    </div>
                </SidebarScrollArea>
                {children}
            </div>
        </div>
    );
}
