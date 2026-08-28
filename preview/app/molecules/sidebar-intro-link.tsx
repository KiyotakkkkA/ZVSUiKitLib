"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "./utils";

export function SidebarIntroLink() {
    const pathname = usePathname();
    const active = pathname === "/";

    return (
        <Link href="/" aria-current={active ? "page" : undefined} className={cx(active && "active")}>
            Introduction
        </Link>
    );
}
