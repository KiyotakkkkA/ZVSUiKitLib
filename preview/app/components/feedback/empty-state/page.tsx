import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoEmptyState } from "./(preview)/empty-state-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "EmptyState", description: "Placeholder for empty states." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "EmptyState overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Feedback</SectionOverview.MetaTitle><SectionOverview.Title>EmptyState</SectionOverview.Title><SectionOverview.Description>Placeholder for empty states.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "basic-example", headerTitle: "EmptyState example", navTitle: "Example" }}><SectionPreview.Component><DemoEmptyState /></SectionPreview.Component><SectionPreview.Code label="EmptyStateExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "EmptyState API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group>{componentProps.compound.map((part) => <SectionAPI.Group key={part.name} title={`EmptyState.${part.name}`} description={part.description}><SectionAPI.Table><APIProps props={part.props} /></SectionAPI.Table></SectionAPI.Group>)}</SectionAPI>
</DocumentationPage>; }

