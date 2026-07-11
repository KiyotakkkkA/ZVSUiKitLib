import type { Metadata } from "next";
import { FeedbackAPI } from "../feedback-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoProgressBar } from "./progress-bar-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "ProgressBar",
    description: "Labeled progress indicator.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>ProgressBar</SectionOverview.Title>
                <SectionOverview.Description>
                    Labeled progress indicator.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoProgressBar />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ProgressBarExample.tsx"
            >
                {usage}
            </SectionCode>
            <FeedbackAPI component="ProgressBar" />
        </DocumentationPage>
    );
}
