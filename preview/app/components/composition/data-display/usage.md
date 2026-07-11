```tsx
"use client";
import { Icon } from "@iconify/react";
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDataDisplay() {
    return (
        <DataDisplay>
            <DataDisplay.Item label="Status" value="Active" />
            <DataDisplay.Item
                label="Owner"
                value="KiyotakkkkA"
                description="Responsible for this workspace."
                icon={<Icon icon="mdi:tune-variant" width={18} height={18} />}
                rightSlot={
                    <span className="rounded-full bg-main-800 px-2 py-0.5 text-xs text-main-200">
                        online
                    </span>
                }
            />
        </DataDisplay>
    );
}
```
