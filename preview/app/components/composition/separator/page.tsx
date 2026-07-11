import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSeparator } from "./separator-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Separator",
    description: "Horizontal or vertical divider.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Separator</SectionOverview.Title>
                <SectionOverview.Description>
                    Horizontal or vertical divider.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoSeparator />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SeparatorExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="Separator" />
        </DocumentationPage>
    );
}
