import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputSlider } from "./input-slider-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputSlider" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputSlider</SectionOverview.Title>
                <SectionOverview.Description>
                    Pointer-driven numeric range input.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputSlider />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SliderField.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputSlider" />
        </DocumentationPage>
    );
}
