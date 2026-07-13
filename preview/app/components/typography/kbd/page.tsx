import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { KbdPreview } from "./(preview)/kbd-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "Kbd", description: "Keyboard shortcuts rendered as compact physical-key tokens." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", navTitle: "Overview", headerTitle: "Kbd" }}><SectionOverview.MetaTitle>Typography</SectionOverview.MetaTitle><SectionOverview.Title>Kbd</SectionOverview.Title><SectionOverview.Description>Keyboard shortcuts rendered as compact physical-key tokens.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "preview", navTitle: "Preview", headerTitle: "Kbd example" }} className="[&_.demo-stage>div]:w-full"><SectionPreview.Component><KbdPreview /></SectionPreview.Component><SectionPreview.Code label="KbdExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", navTitle: "API", headerTitle: "Kbd API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group></SectionAPI>
</DocumentationPage>; }

