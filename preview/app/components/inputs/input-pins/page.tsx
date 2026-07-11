import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputPins } from "./input-pins-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputPins" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputPins</SectionOverview.Title>
                <SectionOverview.Description>
                    Segmented PIN input with paste and keyboard navigation.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputPins />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="VerificationCode.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputPins" />
        </DocumentationPage>
    );
}
