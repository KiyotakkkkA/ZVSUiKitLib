```tsx
import { Timeline } from "@kiyotakkkka/zvs-uikit-lib";
export function TimelineExample() {
    return (
        <Timeline>
            <Timeline.Item icon="mdi:package-variant-closed">
                <Timeline.ItemTitle>Product shipped</Timeline.ItemTitle>
                <Timeline.ItemSubTitle>Today</Timeline.ItemSubTitle>
                <Timeline.ItemContent>
                    Delivery is on its way.
                </Timeline.ItemContent>
            </Timeline.Item>
        </Timeline>
    );
}
```
