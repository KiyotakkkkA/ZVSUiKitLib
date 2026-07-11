import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { InputSliderPreview } from "./input-slider-preview";
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
                <InputSliderPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SliderField.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputSlider">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="number"
                            description="Current value."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="(value: number) => void"
                            description="Value callback."
                        />
                        <SectionAPI.Prop
                            name="min / max / step"
                            type="number"
                            description="Range configuration."
                        />
                        <SectionAPI.Prop
                            name="showValue"
                            type="boolean"
                            defaultValue="false"
                            description="Displays value."
                        />
                        <SectionAPI.Prop
                            name="valueFormatter"
                            type="(value) => ReactNode"
                            description="Value formatter."
                        />
                        <SectionAPI.Prop
                            name="classNames"
                            type="{ input; track; fill; thumb; value }"
                            description="Internal slots."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
