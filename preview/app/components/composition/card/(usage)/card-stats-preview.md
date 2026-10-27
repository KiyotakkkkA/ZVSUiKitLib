```tsx
"use client";
import { Badge, Card, ProgressBar } from "@kiyotakkkka/zvs-uikit-lib";

const stats = [
    { label: "Monthly revenue", value: "$48,920", trend: "+12.4%", up: true },
    { label: "Active users", value: "3,184", trend: "+4.1%", up: true },
    { label: "Churn rate", value: "2.3%", trend: "+0.6%", up: false },
];

export function DemoCardStats() {
    return (
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
                <Card key={stat.label} rounded="rounded-xl">
                    <Card.Content className="space-y-2 py-4">
                        <p className="text-xs text-main-400">{stat.label}</p>
                        <div className="flex items-end justify-between gap-2">
                            <span className="text-2xl font-semibold tabular-nums text-main-50">
                                {stat.value}
                            </span>
                            <Badge
                                size="sm"
                                variant={stat.up ? "success" : "danger"}
                            >
                                {stat.trend}
                            </Badge>
                        </div>
                        <p className="text-[11px] text-main-500">
                            vs. previous 30 days
                        </p>
                    </Card.Content>
                </Card>
            ))}
            <Card rounded="rounded-xl" className="sm:col-span-3">
                <Card.Content className="py-4">
                    <ProgressBar
                        label="Storage used · 68 of 100 GB"
                        value={68}
                        showValue
                        variant="info"
                    />
                </Card.Content>
            </Card>
        </div>
    );
}
```
