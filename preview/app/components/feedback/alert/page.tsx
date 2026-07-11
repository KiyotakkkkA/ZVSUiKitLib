import type { Metadata } from "next";
import { FeedbackAPI } from "../feedback-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoAlert } from "./alert-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Alert",
    description: "Status notification block.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Alert</SectionOverview.Title>
                <SectionOverview.Description>
                    Notification block with variant, title, icon, and content.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoAlert />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="AlertExample.tsx"
            >
                {usage}
            </SectionCode>
            <FeedbackAPI component="Alert" />
        </DocumentationPage>
    );
}
