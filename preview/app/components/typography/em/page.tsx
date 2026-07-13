import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { EmPreview } from "./(preview)/em-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "Em", description: "Semantic stress emphasis inside running text." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", navTitle: "Overview", headerTitle: "Em" }}><SectionOverview.MetaTitle>Typography</SectionOverview.MetaTitle><SectionOverview.Title>Em</SectionOverview.Title><SectionOverview.Description>Semantic stress emphasis inside running text.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "preview", navTitle: "Preview", headerTitle: "Em example" }} className="[&_.demo-stage>div]:w-full"><SectionPreview.Component><EmPreview /></SectionPreview.Component><SectionPreview.Code label="EmExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", navTitle: "API", headerTitle: "Em API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group></SectionAPI>
</DocumentationPage>; }

