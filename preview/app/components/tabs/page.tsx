import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { TabsPreview } from "./tabs-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Tabs",
    description: "Controlled tab navigation.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Tabs</SectionOverview.Title>
                <SectionOverview.Description>
                    Controlled tab navigation.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <TabsPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TabsExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Tabs">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="options"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (list, tab, activeTab)"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="tabProps"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
