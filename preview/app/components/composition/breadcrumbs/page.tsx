import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { BreadcrumbsPreview } from "./breadcrumbs-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Breadcrumbs",
    description: "Navigation trail.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Breadcrumbs</SectionOverview.Title>
                <SectionOverview.Description>
                    Navigation trail composed from Breadcrumbs.Nav items.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <BreadcrumbsPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="BreadcrumbsExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="Breadcrumbs" />
        </DocumentationPage>
    );
}
