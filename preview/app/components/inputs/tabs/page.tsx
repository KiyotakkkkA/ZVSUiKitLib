import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTabs } from "./tabs-preview";
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
                <DemoTabs />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TabsExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="Tabs" />
        </DocumentationPage>
    );
}
