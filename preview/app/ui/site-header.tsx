import Link from "next/link";
import Image from "next/image";
import { GithubIcon, SearchIcon } from "./icons";

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
                <Link href="/components/overlays/context-menu">Components</Link>
                <a href="https://www.npmjs.com/package/@kiyotakkkka/zvs-uikit-lib">
                    Releases
                </a>
            </nav>

            <div className="header-actions">
                <Link
                    className="search-trigger"
                    href="/components/overlays/context-menu"
                >
                    <SearchIcon />
                    <span>Search docs</span>
                    <kbd>⌘ K</kbd>
                </Link>
                <a
                    className="icon-link"
                    href="https://github.com/KiyotakkkkA/ZVSUiKitLib"
                    aria-label="Open GitHub repository"
                >
                    <GithubIcon />
                </a>
            </div>
        </header>
    );
}
