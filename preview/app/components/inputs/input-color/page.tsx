import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { InputColorPreview } from "./input-color-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputColor" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputColor</SectionOverview.Title>
                <SectionOverview.Description>
                    Controlled or uncontrolled color picker with alpha and
                    presets.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <InputColorPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ColorField.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputColor" />
        </DocumentationPage>
    );
}
