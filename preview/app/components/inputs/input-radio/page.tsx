import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputRadio } from "./input-radio-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputRadio" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputRadio</SectionOverview.Title>
                <SectionOverview.Description>
                    Controlled radio input with indicator and dot slots.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputRadio />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="RadioGroup.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputRadio" />
        </DocumentationPage>
    );
}
