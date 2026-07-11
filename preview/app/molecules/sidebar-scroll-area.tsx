"use client";

import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";
import type { ReactNode } from "react";

export function SidebarScrollArea({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <ScrollArea className={className}>{children}</ScrollArea>;
}
