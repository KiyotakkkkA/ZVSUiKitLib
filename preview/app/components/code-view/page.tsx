import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { CodeViewPreview } from "./code-view-preview";
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
                <CodeViewPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="CodeViewExample.tsx"
            >
                {usage}
            </SectionCode>
        </DocumentationPage>
    );
}
