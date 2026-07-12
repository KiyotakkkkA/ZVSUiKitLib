import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import { DocumentationPage, SectionCode, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoInputCheckBoxGroup } from "./input-checkbox-group-preview";
import usage from "./usage.md";

export const metadata: Metadata = { title: "InputCheckBoxGroup" };

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputCheckBoxGroup</SectionOverview.Title>
                <SectionOverview.Description>Boolean-record checkbox group with multiple or exclusive selection.</SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}><DemoInputCheckBoxGroup /></SectionPreview>
            <SectionCode nav={{ id: "usage", title: "Usage" }} label="InputCheckBoxGroupExample.tsx">{usage}</SectionCode>
            <InputAPI component="InputCheckBoxGroup" />
        </DocumentationPage>
    );
}
