import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoPrettyBR } from "./pretty-br-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "PrettyBR",
    description: "Decorative labeled divider.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>PrettyBR</SectionOverview.Title>
                <SectionOverview.Description>
                    Decorative labeled divider.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoPrettyBR />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="PrettyBRExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="PrettyBR" />
        </DocumentationPage>
    );
}
