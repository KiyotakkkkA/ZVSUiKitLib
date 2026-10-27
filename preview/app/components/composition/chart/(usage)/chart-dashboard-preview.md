```tsx
"use client";
import { Badge, Card, Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { Chart } from "@kiyotakkkka/zvs-uikit-lib/chart";
import { useState } from "react";

const revenue = {
    "7d": [
        { day: "Mon", revenue: 4200 },
        { day: "Tue", revenue: 5100 },
        { day: "Wed", revenue: 4800 },
        { day: "Thu", revenue: 6200 },
        { day: "Fri", revenue: 7400 },
        { day: "Sat", revenue: 6900 },
        { day: "Sun", revenue: 8100 },
    ],
    "30d": Array.from({ length: 10 }, (_, index) => ({
        day: `${(index + 1) * 3} Oct`,
        revenue: 3800 + ((index * 1370) % 4200) + index * 260,
    })),
};

const kpis = [
    { label: "Revenue", value: "$42.7k", trend: "+18%", up: true },
    { label: "Orders", value: "1,248", trend: "+6%", up: true },
    { label: "Refunds", value: "23", trend: "-12%", up: true },
];

export function DemoChartDashboard() {
    const [range, setRange] = useState<keyof typeof revenue>("7d");

    return (
        <div className="grid w-full min-w-0 max-w-3xl gap-4">
            <div className="grid gap-3 sm:grid-cols-3">
                {kpis.map((kpi) => (
                    <Card key={kpi.label} rounded="rounded-xl">
                        <Card.Content className="py-4">
                            <p className="text-xs text-main-400">{kpi.label}</p>
                            <div className="mt-1 flex items-end justify-between">
                                <span className="text-2xl font-semibold tabular-nums text-main-50">
                                    {kpi.value}
                                </span>
                                <Badge
                                    size="sm"
                                    variant={kpi.up ? "success" : "danger"}
                                >
                                    {kpi.trend}
                                </Badge>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </div>
            <div className="relative">
                <div className="absolute right-4 top-4 z-10">
                    <Switcher.Root
                        model={range}
                        onModelChange={(value) =>
                            setRange(value as keyof typeof revenue)
                        }
                        label="Date range"
                    >
                        <Switcher.Option value="7d">7 days</Switcher.Option>
                        <Switcher.Option value="30d">30 days</Switcher.Option>
                    </Switcher.Root>
                </div>
                <Chart
                    title="Revenue"
                    description="Gross revenue in USD"
                    type="area"
                    data={revenue[range]}
                    xKey="day"
                    height={240}
                    showYAxis={false}
                    series={[
                        {
                            key: "revenue",
                            label: "Revenue",
                            color: "rgb(125 211 252)",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
```
