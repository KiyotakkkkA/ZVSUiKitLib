import Link from "next/link";
import { GithubIcon, SearchIcon } from "./icons";

export function SiteHeader() {
    return (
        <header className="site-header">
            <Link href="/" className="brand" aria-label="ZVS UI home">
                <span className="brand-mark" aria-hidden="true">
                    Z
                </span>
                <span>ZVS UI</span>
                <span className="version">v5.0.0</span>
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
