import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoDataDisplay } from "./data-display-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "DataDisplay",
    description: "Structured labeled values.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>DataDisplay</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound list of labeled values, descriptions, icons, and
                    actions.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoDataDisplay />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="DataDisplayExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="DataDisplay" />
        </DocumentationPage>
    );
}
