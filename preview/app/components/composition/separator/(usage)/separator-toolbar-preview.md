```tsx
"use client";
import { Button, Icon, Separator, Tooltip } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSeparatorToolbar() {
    return (
        <div className="w-full max-w-xl space-y-6">
            <div className="flex h-10 w-fit items-center gap-1 rounded-lg border border-main-700/70 bg-main-900/50 px-1">
                <Tooltip label="Edit">
                    <Button variant="ghost" size="sm" label="Edit">
                        <Icon icon="pencil-outline" />
                    </Button>
                </Tooltip>
                <Tooltip label="Duplicate">
                    <Button variant="ghost" size="sm" label="Duplicate">
                        <Icon icon="content-copy" />
                    </Button>
                </Tooltip>
                <Separator orientation="vertical" className="mx-1 h-5" />
                <Tooltip label="Download">
                    <Button variant="ghost" size="sm" label="Download">
                        <Icon icon="download" />
                    </Button>
                </Tooltip>
                <Tooltip label="Share link">
                    <Button variant="ghost" size="sm" label="Share link">
                        <Icon icon="link-variant" />
                    </Button>
                </Tooltip>
                <Separator orientation="vertical" className="mx-1 h-5" />
                <Tooltip label="Delete">
                    <Button variant="ghost" size="sm" label="Delete">
                        <Icon icon="trash-can-outline" />
                    </Button>
                </Tooltip>
            </div>

            <div className="flex h-12 items-center gap-6 text-sm">
                <div>
                    <p className="font-semibold tabular-nums text-main-50">
                        1,284
                    </p>
                    <p className="text-xs text-main-400">Followers</p>
                </div>
                <Separator orientation="vertical" />
                <div>
                    <p className="font-semibold tabular-nums text-main-50">
                        312
                    </p>
                    <p className="text-xs text-main-400">Following</p>
                </div>
                <Separator orientation="vertical" />
                <div>
                    <p className="font-semibold tabular-nums text-main-50">
                        48
                    </p>
                    <p className="text-xs text-main-400">Projects</p>
                </div>
            </div>
        </div>
    );
}
```
