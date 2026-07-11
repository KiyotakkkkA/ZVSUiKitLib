"use client";
import { DataDisplay, Badge } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function DataDisplayPreview() {
    return (
        <DataDisplay>
            <DataDisplay.Item
                label="Owner"
                value="Alex Morgan"
                description="Workspace administrator"
            />
            <DataDisplay.Item
                label="Status"
                value="Production"
                rightSlot={<Badge variant="success">Active</Badge>}
            />
        </DataDisplay>
    );
}
