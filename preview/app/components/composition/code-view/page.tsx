import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoCodeView } from "./code-view-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "CodeView",
    description: "Highlighted code viewer.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>CodeView</SectionOverview.Title>
                <SectionOverview.Description>
                    Syntax-highlighted code with compound Header and Content and
                    copy/download actions.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoCodeView />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="CodeViewExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="CodeView" />
        </DocumentationPage>
    );
}
