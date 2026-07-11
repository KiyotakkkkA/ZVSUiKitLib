import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputCheckSlided } from "./input-check-slided-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputCheckSlided" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputCheckSlided</SectionOverview.Title>
                <SectionOverview.Description>
                    Controlled sliding switch.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputCheckSlided />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SwitchExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputCheckSlided" />
        </DocumentationPage>
    );
}
