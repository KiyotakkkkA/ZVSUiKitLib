"use client";
import { Badge, Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const issueFilters = [
    { value: "open", label: "Open", count: 12 },
    { value: "review", label: "In review", count: 3 },
    { value: "closed", label: "Closed", count: 248 },
];

const plans = {
    monthly: { price: "$12", note: "per month, billed monthly" },
    yearly: { price: "$115", note: "per year, two months free" },
};

export function DemoSwitcherContent() {
    const [filter, setFilter] = useState("open");
    const [billing, setBilling] = useState<keyof typeof plans>("yearly");

    return (
        <div className="w-full max-w-lg space-y-6">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    With counters
                </span>
                <Switcher.Root
                    model={filter}
                    onModelChange={setFilter}
                    label="Issue status"
                >
                    {issueFilters.map((item) => (
                        <Switcher.Option key={item.value} value={item.value}>
                            {item.label}
                            <Badge size="sm" className="tabular-nums">
                                {item.count}
                            </Badge>
                        </Switcher.Option>
                    ))}
                </Switcher.Root>
            </div>
            <div className="grid gap-3 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Pricing toggle
                </span>
                <div className="space-y-3">
                    <Switcher.Root
                        model={billing}
                        onModelChange={(value) =>
                            setBilling(value as keyof typeof plans)
                        }
                        label="Billing period"
                        className="w-full"
                    >
                        <Switcher.Option value="monthly" className="flex-1">
                            Monthly
                        </Switcher.Option>
                        <Switcher.Option value="yearly" className="flex-1">
                            Yearly
                            <Badge size="sm" variant="success">
                                −20%
                            </Badge>
                        </Switcher.Option>
                    </Switcher.Root>
                    <p className="text-sm text-main-300">
                        <span className="text-2xl font-semibold text-main-50">
                            {plans[billing].price}
                        </span>{" "}
                        {plans[billing].note}
                    </p>
                </div>
            </div>
        </div>
    );
}
