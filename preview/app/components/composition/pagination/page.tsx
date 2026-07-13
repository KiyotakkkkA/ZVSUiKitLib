import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { PaginationPreview } from "./(preview)/pagination-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "Pagination", description: "Pagination and page-size controls." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "Pagination overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Composition</SectionOverview.MetaTitle><SectionOverview.Title>Pagination</SectionOverview.Title><SectionOverview.Description>Pagination and page-size controls.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "basic-example", headerTitle: "Pagination example", navTitle: "Example" }}><SectionPreview.Component><PaginationPreview /></SectionPreview.Component><SectionPreview.Code label="PaginationExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "Pagination API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group>{componentProps.compound.map((part) => <SectionAPI.Group key={part.name} title={`Pagination.${part.name}`} description={part.description}><SectionAPI.Table><APIProps props={part.props} /></SectionAPI.Table></SectionAPI.Group>)}</SectionAPI>
</DocumentationPage>; }

