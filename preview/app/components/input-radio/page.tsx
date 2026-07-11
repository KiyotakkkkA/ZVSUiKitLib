import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { InputRadioPreview } from "./input-radio-preview";
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
                <InputRadioPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="RadioGroup.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputRadio">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="checked"
                            type="boolean"
                            description="Current state."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="(checked: boolean) => void"
                            description="Toggle callback."
                        />
                        <SectionAPI.Prop
                            name="disabled"
                            type="boolean"
                            defaultValue="false"
                            description="Disables interaction."
                        />
                        <SectionAPI.Prop
                            name="classNames"
                            type="{ input; indicator; dot }"
                            description="Internal slots."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
