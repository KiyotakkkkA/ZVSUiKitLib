"use client";
import { Badge, Button, DataDisplay, Icon } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDataDisplayOrder() {
    return (
        <div className="w-full max-w-md space-y-3">
            <DataDisplay rounded="rounded-xl">
                <DataDisplay.Item>
                    <DataDisplay.ItemTopTitle>Order</DataDisplay.ItemTopTitle>
                    <DataDisplay.ItemTopBadge>
                        <Badge size="sm" variant="success">
                            Paid
                        </Badge>
                    </DataDisplay.ItemTopBadge>
                    <DataDisplay.ItemTopSubTitle>
                        #NW-20481 · 27 Oct 2026
                    </DataDisplay.ItemTopSubTitle>
                </DataDisplay.Item>
                <DataDisplay.Item>
                    <DataDisplay.ItemTopTitle>
                        Shipping to
                    </DataDisplay.ItemTopTitle>
                    <DataDisplay.ItemContentIcon>
                        <Icon icon="package-variant-closed" />
                    </DataDisplay.ItemContentIcon>
                    <DataDisplay.ItemContentTitle>
                        Alisa Kim
                    </DataDisplay.ItemContentTitle>
                    <DataDisplay.ItemContentDescription>
                        18 Harbor Street, Apt 4B, Seattle, WA 98101
                    </DataDisplay.ItemContentDescription>
                    <DataDisplay.ItemContentBadge>
                        <span className="text-xs text-main-400">Express</span>
                    </DataDisplay.ItemContentBadge>
                </DataDisplay.Item>
                <DataDisplay.Item>
                    <DataDisplay.ItemTopTitle>Total</DataDisplay.ItemTopTitle>
                    <DataDisplay.ItemTopBadge>
                        <span className="text-xs text-main-500">
                            incl. tax
                        </span>
                    </DataDisplay.ItemTopBadge>
                    <DataDisplay.ItemTopSubTitle className="text-lg tabular-nums">
                        $312.40
                    </DataDisplay.ItemTopSubTitle>
                </DataDisplay.Item>
            </DataDisplay>
            <div className="flex gap-2">
                <Button variant="secondary" className="flex-1">
                    <Icon icon="download" />
                    Invoice
                </Button>
                <Button className="flex-1">Track package</Button>
            </div>
        </div>
    );
}
