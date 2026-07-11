import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { AutoFillSelectorPreview } from "./auto-fill-selector-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "AutoFillSelector",
    description: "Searchable multi-select.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>AutoFillSelector</SectionOverview.Title>
                <SectionOverview.Description>
                    Composable multi-select with Trigger, Tags, Input, Menu,
                    Options, and Empty parts.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <AutoFillSelectorPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="AutoFillSelectorExample.tsx"
            >
                {usage}
            </SectionCode>
        </DocumentationPage>
    );
}
