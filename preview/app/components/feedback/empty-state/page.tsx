import type { Metadata } from "next";
import { FeedbackAPI } from "../feedback-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoEmptyState } from "./empty-state-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "EmptyState" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>EmptyState</SectionOverview.Title>
                <SectionOverview.Description>
                    Empty-content message with optional icon and action.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoEmptyState />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="EmptyStateExample.tsx"
            >
                {usage}
            </SectionCode>
            <FeedbackAPI component="EmptyState" />
        </DocumentationPage>
    );
}
