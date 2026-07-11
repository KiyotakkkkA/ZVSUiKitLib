import type { Metadata } from "next";
import { FeedbackAPI } from "../feedback-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoBadge } from "./badge-preview";
import usageCode from "./usage.md";
export const metadata: Metadata = {
    title: "Badge",
    description: "Compact status indicator.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Data display
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Badge</SectionOverview.Title>
                <SectionOverview.Description>
                    Compact semantic status indicator.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoBadge />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="BadgeExample.tsx"
            >
                {usageCode}
            </SectionCode>
            <FeedbackAPI component="Badge" />
        </DocumentationPage>
    );
}
