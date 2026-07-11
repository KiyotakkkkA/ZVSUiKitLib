import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSelect } from "./select-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Select",
    description: "Searchable dropdown selection.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Select</SectionOverview.Title>
                <SectionOverview.Description>
                    Searchable dropdown selection.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoSelect />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SelectExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="Select" />
        </DocumentationPage>
    );
}
