```tsx
"use client";
import {
    Badge,
    DataDisplay,
    Icon,
    ProgressBar,
    type IconName,
} from "@kiyotakkkka/zvs-uikit-lib";

const details: {
    icon: IconName;
    title: string;
    value: string;
    badge?: string;
}[] = [
    { icon: "link-variant", title: "Public address", value: "api.northwind.dev · 203.0.113.42" },
    { icon: "shield-account", title: "Access", value: "SSH keys only · 3 authorized users", badge: "Secured" },
    { icon: "package-variant-closed", title: "Image", value: "Ubuntu 24.04 LTS · Node.js 22" },
];

export function DemoDataDisplayServer() {
    return (
        <div className="w-full max-w-lg rounded-xl border border-main-700/70 bg-main-900/50">
            <div className="flex items-center justify-between border-b border-main-700/70 px-4 py-3">
                <div>
                    <p className="text-sm font-semibold text-main-50">
                        prod-api-eu-1
                    </p>
                    <p className="text-xs text-main-400">
                        Frankfurt · 4 vCPU · 8 GB RAM
                    </p>
                </div>
                <Badge variant="success" size="sm">
                    Running
                </Badge>
            </div>
            <DataDisplay bordered={false} className="p-2">
                {details.map((item) => (
                    <DataDisplay.Item key={item.title}>
                        <DataDisplay.ItemContentIcon>
                            <Icon icon={item.icon} />
                        </DataDisplay.ItemContentIcon>
                        <DataDisplay.ItemContentTitle>
                            {item.title}
                        </DataDisplay.ItemContentTitle>
                        <DataDisplay.ItemContentDescription>
                            {item.value}
                        </DataDisplay.ItemContentDescription>
                        {item.badge && (
                            <DataDisplay.ItemContentBadge>
                                <Badge size="sm" variant="info">
                                    {item.badge}
                                </Badge>
                            </DataDisplay.ItemContentBadge>
                        )}
                    </DataDisplay.Item>
                ))}
            </DataDisplay>
            <div className="grid gap-3 border-t border-main-700/70 px-4 py-3 sm:grid-cols-2">
                <ProgressBar label="CPU" value={37} showValue />
                <ProgressBar
                    label="Memory"
                    value={81}
                    showValue
                    variant="warning"
                />
            </div>
        </div>
    );
}
```
