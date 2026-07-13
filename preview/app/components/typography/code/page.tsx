import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { CodePreview } from "./(preview)/code-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "Code", description: "Inline and block code treatments for technical content." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", navTitle: "Overview", headerTitle: "Code" }}><SectionOverview.MetaTitle>Typography</SectionOverview.MetaTitle><SectionOverview.Title>Code</SectionOverview.Title><SectionOverview.Description>Inline and block code treatments for technical content.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "preview", navTitle: "Preview", headerTitle: "Code example" }} className="[&_.demo-stage>div]:w-full"><SectionPreview.Component><CodePreview /></SectionPreview.Component><SectionPreview.Code label="CodeExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", navTitle: "API", headerTitle: "Code API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group></SectionAPI>
</DocumentationPage>; }

