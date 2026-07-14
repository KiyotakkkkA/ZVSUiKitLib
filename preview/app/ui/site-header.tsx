import Link from "next/link";
import { Icon } from "@iconify/react";
import { DocsSearch } from "./docs-search";

export function SiteHeader() {
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
                    <Icon icon="mdi:github" />
                </a>
                <a
                    className="icon-link"
                    href="https://www.npmjs.com/package/@kiyotakkkka/zvs-uikit-lib"
                    aria-label="Open NPM repository"
                >
                    <Icon icon="simple-icons:npm" />
                </a>
            </div>
        </header>
    );
}
