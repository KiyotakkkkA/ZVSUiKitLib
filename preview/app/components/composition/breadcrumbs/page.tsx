import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { BreadcrumbsPreview } from "./(preview)/breadcrumbs-preview";
import usage from "./(usage)/usage.md";
import { DemoBreadcrumbsLinks } from "./(preview)/breadcrumbs-links-preview";
import breadcrumbsLinksPreviewUsage from "./(usage)/breadcrumbs-links-preview.md";
import { DemoBreadcrumbsHeader } from "./(preview)/breadcrumbs-header-preview";
import breadcrumbsHeaderPreviewUsage from "./(usage)/breadcrumbs-header-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Breadcrumbs",
    description: "Navigation trail for the current page.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Breadcrumbs overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Breadcrumbs</SectionOverview.Title>
                <SectionOverview.Description>
                    Navigation trail for the current page.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "Breadcrumbs example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <BreadcrumbsPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="BreadcrumbsExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "links",
                    headerTitle: "Links, icons and truncation",
                    navTitle: "Links",
                }}
            >
                <SectionPreview.Component>
                    <DemoBreadcrumbsLinks />
                </SectionPreview.Component>
                <SectionPreview.Code label="BreadcrumbsLinks.tsx">
                    {breadcrumbsLinksPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "page-header",
                    headerTitle: "Page header",
                    navTitle: "Page header",
                }}
            >
                <SectionPreview.Component>
                    <DemoBreadcrumbsHeader />
                </SectionPreview.Component>
                <SectionPreview.Code label="BreadcrumbsHeader.tsx">
                    {breadcrumbsHeaderPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Breadcrumbs API",
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
                        title={`Breadcrumbs.${part.name}`}
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
