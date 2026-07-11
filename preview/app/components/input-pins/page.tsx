import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { InputPinsPreview } from "./input-pins-preview";
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
                <InputPinsPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="VerificationCode.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputPins">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="string"
                            description="Current PIN."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="(value: string) => void"
                            description="Joined value callback."
                        />
                        <SectionAPI.Prop
                            name="length"
                            type="number"
                            defaultValue="4"
                            description="Cell count."
                        />
                        <SectionAPI.Prop
                            name="label"
                            type="string"
                            description="Label below cells."
                        />
                        <SectionAPI.Prop
                            name="disabled / mask"
                            type="boolean"
                            defaultValue="false"
                            description="Cell states."
                        />
                        <SectionAPI.Prop
                            name="classNames"
                            type="InputPinsClassNames"
                            description="group and input slots."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
