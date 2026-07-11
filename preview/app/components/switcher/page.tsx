import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { SwitcherPreview } from "./switcher-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Switcher",
    description: "Compact segmented switcher.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Switcher</SectionOverview.Title>
                <SectionOverview.Description>
                    Compact segmented switcher.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <SwitcherPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SwitcherExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Switcher">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="options"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (tab)"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
