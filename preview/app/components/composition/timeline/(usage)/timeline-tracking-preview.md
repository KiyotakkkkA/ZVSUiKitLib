```tsx
"use client";
import { Badge, Icon, Timeline } from "@kiyotakkkka/zvs-uikit-lib";

const steps = [
    { title: "Order placed", time: "Mon, 21 Oct · 09:14", done: true },
    { title: "Packed at warehouse", time: "Mon, 21 Oct · 16:40", done: true },
    { title: "Handed to courier", time: "Tue, 22 Oct · 08:05", done: true },
    { title: "Out for delivery", time: "Expected today, 12:00–15:00", done: false },
    { title: "Delivered", time: "—", done: false },
];

export function DemoTimelineTracking() {
    const current = steps.findIndex((step) => !step.done);

    return (
        <div className="w-full max-w-md rounded-xl border border-main-700/70 bg-main-900/50 p-5">
            <div className="mb-5 flex items-start justify-between gap-3 border-b border-main-700/70 pb-4">
                <div>
                    <p className="text-sm font-semibold text-main-50">
                        Order #NW-20481
                    </p>
                    <p className="text-xs text-main-400">
                        Tracking number 1Z 999 AA1 01 2345 6784
                    </p>
                </div>
                <Badge variant="info" size="sm" className="mt-0.5 shrink-0">
                    In transit
                </Badge>
            </div>
            <Timeline>
                {steps.map((step, index) => (
                    <Timeline.Item
                        key={step.title}
                        className={index > current ? "opacity-50" : undefined}
                        icon={
                            step.done ? (
                                <Icon icon="check" />
                            ) : (
                                <span className="text-[10px] font-semibold">
                                    {index + 1}
                                </span>
                            )
                        }
                    >
                        <Timeline.ItemTitle>{step.title}</Timeline.ItemTitle>
                        <Timeline.ItemSubTitle>{step.time}</Timeline.ItemSubTitle>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );
}
```
