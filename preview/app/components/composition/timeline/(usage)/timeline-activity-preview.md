```tsx
"use client";
import { Badge, Timeline } from "@kiyotakkkka/zvs-uikit-lib";

const events = [
    {
        author: "Alisa Kim",
        initials: "AK",
        color: "bg-violet-500",
        action: "merged pull request",
        target: "#412 Compound Switcher API",
        time: "12 minutes ago",
        tag: "merged",
    },
    {
        author: "Mark Ortiz",
        initials: "MO",
        color: "bg-sky-500",
        action: "commented on",
        target: "#409 InputDatetime",
        time: "1 hour ago",
        comment: "The time column on the right looks much better. Ship it!",
    },
    {
        author: "Lena Novak",
        initials: "LN",
        color: "bg-emerald-500",
        action: "opened issue",
        target: "#415 Carousel keyboard support",
        time: "Yesterday",
        tag: "bug",
    },
];

export function DemoTimelineActivity() {
    return (
        <Timeline className="w-full max-w-lg">
            {events.map((event) => (
                <Timeline.Item
                    key={event.target}
                    icon={
                        <span
                            className={`grid size-full place-items-center text-[9px] font-semibold text-white ${event.color}`}
                        >
                            {event.initials}
                        </span>
                    }
                >
                    <Timeline.ItemTitle className="font-normal text-main-300">
                        <span className="font-semibold text-main-50">
                            {event.author}
                        </span>{" "}
                        {event.action}{" "}
                        <span className="text-main-100">{event.target}</span>
                    </Timeline.ItemTitle>
                    <Timeline.ItemSubTitle className="flex items-center gap-2">
                        {event.time}
                        {event.tag && (
                            <Badge
                                size="sm"
                                variant={
                                    event.tag === "bug" ? "danger" : "tertiary"
                                }
                            >
                                {event.tag}
                            </Badge>
                        )}
                    </Timeline.ItemSubTitle>
                    {event.comment && (
                        <Timeline.ItemContent className="rounded-lg border border-main-700/70 bg-main-900/50 px-3 py-2 text-main-200">
                            {event.comment}
                        </Timeline.ItemContent>
                    )}
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
```
