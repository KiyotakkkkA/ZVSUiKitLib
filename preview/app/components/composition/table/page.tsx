import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { TablePreview } from "./table-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Table",
    description: "Typed sortable data table.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Table</SectionOverview.Title>
                <SectionOverview.Description>
                    Typed sortable data table.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <TablePreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TableExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="Table" />
        </DocumentationPage>
    );
}
