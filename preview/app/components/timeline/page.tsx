import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { TimelinePreview } from "./timeline-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Timeline",
    description: "Compound chronological content.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Timeline</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound chronological content.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <TimelinePreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TimelineExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Timeline">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="children"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="Timeline compound API">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Item"
                            type="Compound part"
                            description="Must be nested inside Timeline."
                        />
                        <SectionAPI.Prop
                            name="ItemTitle"
                            type="Compound part"
                            description="Must be nested inside Timeline."
                        />
                        <SectionAPI.Prop
                            name="ItemSubTitle"
                            type="Compound part"
                            description="Must be nested inside Timeline."
                        />
                        <SectionAPI.Prop
                            name="ItemContent"
                            type="Compound part"
                            description="Must be nested inside Timeline."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
