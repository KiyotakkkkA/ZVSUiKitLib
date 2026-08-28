"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { DocsSearch } from "./docs-search";

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [openedPathname, setOpenedPathname] = useState(pathname);

    if (pathname !== openedPathname) {
        setOpenedPathname(pathname);
        setOpen(false);
    }

    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="site-header">
            <Link href="/" className="brand" aria-label="ZVS UI home">
                <span
                    className="block h-10 w-10 bg-accent-medium transition-opacity group-hover:opacity-65"
                    style={{
                        mask: "url(/logo.svg) no-repeat center / contain",
                        WebkitMask: "url(/logo.svg) no-repeat center / contain",
                    }}
                />
                <span>ZVS UI Kit</span>
                <span className="version">v4.1.0</span>
            </Link>

            <nav className="top-nav" aria-label="Primary navigation">
                <Link href="/">Overview</Link>
                <Link href="/components/inputs/auto-fill-selector">
                    Components
                </Link>
                <Link href="/hooks/use-style">Hooks</Link>
            </nav>

            <div className="header-actions">
                <DocsSearch />
                <a
                    className="icon-link"
                    href="https://github.com/KiyotakkkkA/ZVSUiKitLib"
                    aria-label="Open GitHub repository"
                >
                    <Icon icon="simple-icons:github" />
                </a>
                <a
                    className="icon-link"
                    href="https://www.npmjs.com/package/@kiyotakkkka/zvs-uikit-lib"
                    aria-label="Open NPM repository"
                >
                    <Icon icon="simple-icons:npm" />
                </a>
                <button
                    type="button"
                    className="icon-link menu-trigger"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen((value) => !value)}
                >
                    <Icon
                        icon={
                            open
                                ? "material-symbols:close-rounded"
                                : "material-symbols:menu-rounded"
                        }
                    />
                </button>
            </div>

            <div
                id="mobile-nav"
                className={open ? "mobile-nav mobile-nav-open" : "mobile-nav"}
            >
                <nav aria-label="Mobile navigation">
                    <Link href="/">Overview</Link>
                    <Link href="/components/inputs/auto-fill-selector">
                        Components
                    </Link>
                    <Link href="/hooks/use-style">Hooks</Link>
                </nav>
                <div className="mobile-nav-actions">
                    <a href="https://github.com/KiyotakkkkA/ZVSUiKitLib">
                        <Icon icon="simple-icons:github" /> GitHub
                    </a>
                    <a href="https://www.npmjs.com/package/@kiyotakkkka/zvs-uikit-lib">
                        <Icon icon="simple-icons:npm" /> NPM
                    </a>
                </div>
            </div>
            {open && (
                <button
                    type="button"
                    className="mobile-nav-backdrop"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}
