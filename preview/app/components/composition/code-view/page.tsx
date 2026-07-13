import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoCodeView } from "./(preview)/code-view-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "CodeView", description: "Highlighted code block with copy action." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "CodeView overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Composition</SectionOverview.MetaTitle><SectionOverview.Title>CodeView</SectionOverview.Title><SectionOverview.Description>Highlighted code block with copy action.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "basic-example", headerTitle: "CodeView example", navTitle: "Example" }}><SectionPreview.Component><DemoCodeView /></SectionPreview.Component><SectionPreview.Code label="CodeViewExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "CodeView API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group>{componentProps.compound.map((part) => <SectionAPI.Group key={part.name} title={`CodeView.${part.name}`} description={part.description}><SectionAPI.Table><APIProps props={part.props} /></SectionAPI.Table></SectionAPI.Group>)}</SectionAPI>
</DocumentationPage>; }

