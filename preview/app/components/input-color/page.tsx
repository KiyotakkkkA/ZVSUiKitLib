import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
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
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputColor">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value / defaultValue"
                            type="string"
                            defaultValue="#6366F1"
                            description="HEX color state."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="(value: string) => void"
                            description="Color callback."
                        />
                        <SectionAPI.Prop
                            name="label"
                            type="ReactNode"
                            description="Trigger label."
                        />
                        <SectionAPI.Prop
                            name="showValue"
                            type="boolean"
                            defaultValue="true"
                            description="Shows value."
                        />
                        <SectionAPI.Prop
                            name="size"
                            type="sm | md | lg"
                            defaultValue="md"
                            description="Trigger size."
                        />
                        <SectionAPI.Prop
                            name="palettePresets"
                            type="string[] | null"
                            defaultValue="null"
                            description="Quick-select palette."
                        />
                        <SectionAPI.Prop
                            name="valueFormatter"
                            type="(value: string) => ReactNode"
                            description="Value formatter."
                        />
                        <SectionAPI.Prop
                            name="disabled / readOnly"
                            type="boolean"
                            defaultValue="false"
                            description="Interaction controls."
                        />
                        <SectionAPI.Prop
                            name="classNames"
                            type="InputColorClassNames"
                            description="All picker visual slots."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
