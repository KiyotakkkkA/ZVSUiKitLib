import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoTreeView } from "./(preview)/tree-view-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "TreeView", description: "Hierarchical optionally virtualized list." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "TreeView overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Composition</SectionOverview.MetaTitle><SectionOverview.Title>TreeView</SectionOverview.Title><SectionOverview.Description>Hierarchical optionally virtualized list.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "basic-example", headerTitle: "TreeView example", navTitle: "Example" }}><SectionPreview.Component><DemoTreeView /></SectionPreview.Component><SectionPreview.Code label="TreeViewExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "TreeView API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group>{componentProps.compound.map((part) => <SectionAPI.Group key={part.name} title={`TreeView.${part.name}`} description={part.description}><SectionAPI.Table><APIProps props={part.props} /></SectionAPI.Table></SectionAPI.Group>)}</SectionAPI>
</DocumentationPage>; }

