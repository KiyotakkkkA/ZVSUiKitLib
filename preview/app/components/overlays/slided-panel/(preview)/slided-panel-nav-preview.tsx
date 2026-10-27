"use client";
import {
    Button,
    Icon,
    SlidedPanel,
    type IconName,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const links: { label: string; icon: IconName }[] = [
    { label: "Dashboard", icon: "star-four-points" },
    { label: "Projects", icon: "folder-outline" },
    { label: "Team", icon: "account" },
    { label: "Billing", icon: "package-variant-closed" },
    { label: "Settings", icon: "tune-variant" },
];

export function DemoSlidedPanelNav() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Projects");

    return (
        <div className="flex w-full max-w-sm items-center justify-between rounded-xl border border-main-700/70 bg-main-900/50 px-3 py-2">
            <Button
                variant="ghost"
                label="Open menu"
                className="size-9 px-0 text-base"
                onClick={() => setOpen(true)}
            >
                <Icon icon="tune-variant" />
            </Button>
            <span className="text-sm font-semibold text-main-50">{active}</span>
            <span className="grid size-9 place-items-center rounded-full bg-violet-500 text-xs font-semibold text-white">
                AK
            </span>
            <SlidedPanel
                open={open}
                onClose={() => setOpen(false)}
                panelPlacement="left"
                label="Main menu"
            >
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Northwind</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>Team workspace</SlidedPanel.Subtitle>
                </SlidedPanel.Header>
                <SlidedPanel.Content>
                    <nav className="flex flex-col gap-1">
                        {links.map((link) => (
                            <button
                                key={link.label}
                                type="button"
                                aria-current={
                                    active === link.label ? "page" : undefined
                                }
                                onClick={() => {
                                    setActive(link.label);
                                    setOpen(false);
                                }}
                                className={
                                    active === link.label
                                        ? "flex cursor-pointer items-center gap-3 rounded-lg bg-main-800 px-3 py-2.5 text-left text-sm text-main-50"
                                        : "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-main-300 hover:bg-main-800/60 hover:text-main-100"
                                }
                            >
                                <Icon icon={link.icon} />
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </SlidedPanel.Content>
                <SlidedPanel.Footer>
                    <Button variant="secondary" className="w-full">
                        <Icon icon="close" />
                        Sign out
                    </Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </div>
    );
}
