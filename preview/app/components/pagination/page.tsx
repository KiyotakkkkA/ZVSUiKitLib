import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { PaginationPreview } from "./pagination-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Pagination",
    description: "Page and page-size navigation.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Pagination</SectionOverview.Title>
                <SectionOverview.Description>
                    Page and page-size navigation.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <PaginationPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="PaginationExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Pagination">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="page, perPage, total, lastPage"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="from, to"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="disabled"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onPageChange"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onPerPageChange"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="perPageOptions"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
