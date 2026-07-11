import type { Metadata } from "next";
import { FeedbackAPI } from "../feedback-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSkeleton } from "./skeleton-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Skeleton",
    description: "Animated loading placeholder.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Skeleton</SectionOverview.Title>
                <SectionOverview.Description>
                    Animated loading placeholder.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoSkeleton />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SkeletonExample.tsx"
            >
                {usage}
            </SectionCode>
            <FeedbackAPI component="Skeleton" />
        </DocumentationPage>
    );
}
