"use client";
import { Icon } from "@iconify/react";
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDataDisplay() {
    return (
        <DataDisplay>
            <DataDisplay.Item>
                <DataDisplay.ItemTopTitle>Status</DataDisplay.ItemTopTitle>
                <DataDisplay.ItemTopBadge>
                    <span className="text-xs text-main-500">live</span>
                </DataDisplay.ItemTopBadge>
                <DataDisplay.ItemTopSubTitle>
                    Active
                </DataDisplay.ItemTopSubTitle>
            </DataDisplay.Item>

            <DataDisplay.Item>
                <DataDisplay.ItemTopTitle>Owner</DataDisplay.ItemTopTitle>
                <DataDisplay.ItemTopSubTitle>
                    KiyotakkkkA
                </DataDisplay.ItemTopSubTitle>
                <DataDisplay.ItemContentIcon>
                    <Icon icon="mdi:tune-variant" width={18} height={18} />
                </DataDisplay.ItemContentIcon>
                <DataDisplay.ItemContentDescription>
                    Responsible for this workspace.
                </DataDisplay.ItemContentDescription>
                <DataDisplay.ItemContentBadge>
                    <span className="rounded-full bg-main-800 px-2 py-0.5 text-xs text-main-200">
                        online
                    </span>
                </DataDisplay.ItemContentBadge>
            </DataDisplay.Item>
        </DataDisplay>
    );
}
