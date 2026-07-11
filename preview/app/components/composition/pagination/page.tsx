import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
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
            <CompositionAPI component="Pagination" />
        </DocumentationPage>
    );
}
