import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTimeline } from "./(preview)/timeline-preview";
import usage from "./(usage)/usage.md";
import { DemoTimelineTracking } from "./(preview)/timeline-tracking-preview";
import timelineTrackingPreviewUsage from "./(usage)/timeline-tracking-preview.md";
import { DemoTimelineActivity } from "./(preview)/timeline-activity-preview";
import timelineActivityPreviewUsage from "./(usage)/timeline-activity-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Timeline",
    description: "Ordered event timeline.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Timeline overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Timeline</SectionOverview.Title>
                <SectionOverview.Description>
                    Ordered event timeline.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "Timeline example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoTimeline />
                </SectionPreview.Component>
                <SectionPreview.Code label="TimelineExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "tracking",
                    headerTitle: "Order tracking",
                    navTitle: "Tracking",
                }}
            >
                <SectionPreview.Component>
                    <DemoTimelineTracking />
                </SectionPreview.Component>
                <SectionPreview.Code label="TimelineTracking.tsx">
                    {timelineTrackingPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "activity",
                    headerTitle: "Activity feed",
                    navTitle: "Activity",
                }}
            >
                <SectionPreview.Component>
                    <DemoTimelineActivity />
                </SectionPreview.Component>
                <SectionPreview.Code label="TimelineActivity.tsx">
                    {timelineActivityPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Timeline API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={componentProps.root.name}
                    description={componentProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={componentProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {componentProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`Timeline.${part.name}`}
                        description={part.description}
                    >
                        <SectionAPI.Table>
                            <APIProps props={part.props} />
                        </SectionAPI.Table>
                    </SectionAPI.Group>
                ))}
            </SectionAPI>
        </DocumentationPage>
    );
}
