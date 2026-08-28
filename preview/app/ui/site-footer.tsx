import Link from "next/link";
import { Icon } from "../icons";

const columns = [
    {
        title: "Product",
        links: [
            { label: "Components", href: "/components/inputs/auto-fill-selector" },
            { label: "Hooks", href: "/hooks/use-style" },
            { label: "Introduction", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            {
                label: "GitHub repository",
                href: "https://github.com/KiyotakkkkA/ZVSUiKitLib",
            },
            {
                label: "NPM package",
                href: "https://www.npmjs.com/package/@kiyotakkkka/zvs-uikit-lib",
            },
            {
                label: "Changelog",
                href: "https://github.com/KiyotakkkkA/ZVSUiKitLib/blob/main/CHANGELOG.md",
            },
        ],
    },
];

export function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="site-footer-top">
                <div className="site-footer-brand">
                    <span
                        className="block h-9 w-9 bg-accent-medium"
                        style={{
                            mask: "url(/logo.svg) no-repeat center / contain",
                            WebkitMask:
                                "url(/logo.svg) no-repeat center / contain",
                        }}
                    />
                    <p>
                        A precise React component library for teams who care
                        about craft, speed, and a design system that stays
                        out of the way.
                    </p>
                </div>
                <div className="site-footer-columns">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <span className="sidebar-label">
                                {column.title}
                            </span>
                            {column.links.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="site-footer-bottom">
                <span>
                    &copy; {new Date().getFullYear()} ZVS UI Kit. MIT
                    licensed.
                </span>
                <div className="site-footer-social">
                    <a
                        href="https://github.com/KiyotakkkkA/ZVSUiKitLib"
                        aria-label="GitHub"
                    >
                        <Icon icon="github" />
                    </a>
                    <a
                        href="https://www.npmjs.com/package/@kiyotakkkka/zvs-uikit-lib"
                        aria-label="NPM"
                    >
                        <Icon icon="npm" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
