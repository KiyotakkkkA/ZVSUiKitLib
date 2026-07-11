import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
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
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Table">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="data"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="columns"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="rowKey"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (root, header, headerRow, headerCell, sortButton, body, row, rowDynamic, cell)"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
