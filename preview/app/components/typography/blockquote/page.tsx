import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { BlockquotePreview } from "./(preview)/blockquote-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "Blockquote", description: "Block quotation with an optional source or attribution." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", navTitle: "Overview", headerTitle: "Blockquote" }}><SectionOverview.MetaTitle>Typography</SectionOverview.MetaTitle><SectionOverview.Title>Blockquote</SectionOverview.Title><SectionOverview.Description>Block quotation with an optional source or attribution.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "preview", navTitle: "Preview", headerTitle: "Blockquote example" }} className="[&_.demo-stage>div]:w-full"><SectionPreview.Component><BlockquotePreview /></SectionPreview.Component><SectionPreview.Code label="BlockquoteExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", navTitle: "API", headerTitle: "Blockquote API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group></SectionAPI>
</DocumentationPage>; }

