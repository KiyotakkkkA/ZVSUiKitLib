import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import { DocumentationPage, SectionCode, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoInputRadioGroup } from "./input-radio-group-preview";
import usage from "./usage.md";

export const metadata: Metadata = { title: "InputRadioGroup" };

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputRadioGroup</SectionOverview.Title>
                <SectionOverview.Description>Exclusive radio selection backed by a boolean record.</SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}><DemoInputRadioGroup /></SectionPreview>
            <SectionCode nav={{ id: "usage", title: "Usage" }} label="InputRadioGroupExample.tsx">{usage}</SectionCode>
            <InputAPI component="InputRadioGroup" />
        </DocumentationPage>
    );
}
