import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoProgressBar } from "./(preview)/progress-bar-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "ProgressBar", description: "Progress indicator with optional label." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "ProgressBar overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Feedback</SectionOverview.MetaTitle><SectionOverview.Title>ProgressBar</SectionOverview.Title><SectionOverview.Description>Progress indicator with optional label.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "basic-example", headerTitle: "ProgressBar example", navTitle: "Example" }}><SectionPreview.Component><DemoProgressBar /></SectionPreview.Component><SectionPreview.Code label="ProgressBarExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "ProgressBar API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group>{componentProps.compound.map((part) => <SectionAPI.Group key={part.name} title={`ProgressBar.${part.name}`} description={part.description}><SectionAPI.Table><APIProps props={part.props} /></SectionAPI.Table></SectionAPI.Group>)}</SectionAPI>
</DocumentationPage>; }

