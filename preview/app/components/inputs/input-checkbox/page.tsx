import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputCheckBox } from "./input-checkbox-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputCheckBox" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputCheckBox</SectionOverview.Title>
                <SectionOverview.Description>
                    Controlled checkbox input.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputCheckBox />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="CheckboxExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputCheckBox" />
        </DocumentationPage>
    );
}
