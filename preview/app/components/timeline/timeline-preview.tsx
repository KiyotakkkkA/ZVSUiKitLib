import { Timeline } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function TimelinePreview() {
    return (
        <div className="w-full p-6">
            <Timeline>
                <Timeline.Item icon="mdi:package-variant-closed">
                    <Timeline.ItemTitle>Product shipped</Timeline.ItemTitle>
                    <Timeline.ItemSubTitle>Today</Timeline.ItemSubTitle>
                    <Timeline.ItemContent>
                        Delivery is on its way.
                    </Timeline.ItemContent>
                </Timeline.Item>
            </Timeline>
        </div>
    );
}
