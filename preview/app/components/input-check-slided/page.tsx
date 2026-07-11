import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { InputCheckSlidedPreview } from "./input-check-slided-preview";
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
                <InputCheckSlidedPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SwitchExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputCheckSlided">
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
                            name="type"
                            type="slided"
                            description="Reserved prop."
                        />
                        <SectionAPI.Prop
                            name="classNames.thumb"
                            type="string"
                            description="Thumb classes."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
