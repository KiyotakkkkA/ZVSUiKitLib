import type { Metadata } from "next";
import { FeedbackAPI } from "../feedback-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoLoader } from "./loader-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "Loader" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Loader</SectionOverview.Title>
                <SectionOverview.Description>
                    Compact accessible loading spinner.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoLoader />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="LoadingState.tsx"
            >
                {usage}
            </SectionCode>
            <FeedbackAPI component="Loader" />
        </DocumentationPage>
    );
}
