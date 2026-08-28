"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hookDocs } from "../lib/components";
import { cx } from "./utils";

export function HooksNav() {
    const pathname = usePathname();

    return (
        <nav className="component-nav" aria-label="Hooks">
            {hookDocs.map((hook) => {
                const href = `/hooks/${hook.slug}`;
                const active = pathname === href;

                return (
                    <Link
                        key={hook.slug}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={cx(active && "active")}
                    >
                        <span>{hook.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
