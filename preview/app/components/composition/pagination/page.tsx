import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { PaginationPreview } from "./(preview)/pagination-preview";
import usage from "./(usage)/usage.md";
import { DemoPaginationTable } from "./(preview)/pagination-table-preview";
import paginationTablePreviewUsage from "./(usage)/pagination-table-preview.md";
import { DemoPaginationCompact } from "./(preview)/pagination-compact-preview";
import paginationCompactPreviewUsage from "./(usage)/pagination-compact-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Pagination",
    description: "Pagination and page-size controls.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Pagination overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Pagination</SectionOverview.Title>
                <SectionOverview.Description>
                    Pagination and page-size controls.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "Pagination example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <PaginationPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="PaginationExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "with-table",
                    headerTitle: "Paginated table",
                    navTitle: "With table",
                }}
            >
                <SectionPreview.Component>
                    <DemoPaginationTable />
                </SectionPreview.Component>
                <SectionPreview.Code label="PaginationTable.tsx">
                    {paginationTablePreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "compact",
                    headerTitle: "Without page size",
                    navTitle: "Compact",
                }}
            >
                <SectionPreview.Component>
                    <DemoPaginationCompact />
                </SectionPreview.Component>
                <SectionPreview.Code label="PaginationCompact.tsx">
                    {paginationCompactPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Pagination API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={componentProps.root.name}
                    description={componentProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={componentProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {componentProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`Pagination.${part.name}`}
                        description={part.description}
                    >
                        <SectionAPI.Table>
                            <APIProps props={part.props} />
                        </SectionAPI.Table>
                    </SectionAPI.Group>
                ))}
            </SectionAPI>
        </DocumentationPage>
    );
}
