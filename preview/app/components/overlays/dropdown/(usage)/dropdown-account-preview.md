```tsx
"use client";
import { Badge, Dropdown, Icon } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDropdownAccount() {
    return (
        <Dropdown menuWidth={240} menuPlacement="bottom-right" className="w-fit">
            <Dropdown.Trigger className="h-11 w-auto gap-3 border-transparent bg-transparent pl-1.5 pr-3 hover:bg-main-800">
                <span className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-violet-500 text-xs font-semibold text-white">
                        AK
                    </span>
                    <span className="text-left leading-tight">
                        <span className="block text-sm text-main-100">
                            Alisa Kim
                        </span>
                        <span className="block text-[11px] text-main-400">
                            Team plan
                        </span>
                    </span>
                </span>
            </Dropdown.Trigger>
            <Dropdown.Menu>
                <div className="mb-1 border-b border-main-700 px-2.5 pb-2.5 pt-1">
                    <p className="text-sm font-medium text-main-50">
                        Alisa Kim
                    </p>
                    <p className="text-xs text-main-400">alisa@acme.dev</p>
                </div>
                <Dropdown.Item icon={<Icon icon="account" />}>
                    Profile
                </Dropdown.Item>
                <Dropdown.Item icon={<Icon icon="tune-variant" />}>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item icon={<Icon icon="sparkles-outline" />}>
                    <span className="flex flex-1 items-center justify-between">
                        Upgrade
                        <Badge size="sm" variant="tertiary">
                            Pro
                        </Badge>
                    </span>
                </Dropdown.Item>
                <div className="my-1 h-px bg-main-700" />
                <Dropdown.Item icon={<Icon icon="close" />}>
                    Sign out
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
```
