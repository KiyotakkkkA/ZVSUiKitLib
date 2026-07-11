import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { InputCheckBoxPreview } from "./input-checkbox-preview";
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
                <InputCheckBoxPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="CheckboxExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputCheckBox">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="checked"
                            type="boolean"
                            description="Current value."
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
                            type="InputCheckBoxClassNames"
                            description="input, indicator, and mark slots."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
