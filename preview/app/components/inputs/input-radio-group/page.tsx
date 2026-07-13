import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoInputRadioGroup } from "./(preview)/input-radio-group-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "InputRadioGroup", description: "Radios connected to an exclusive boolean model." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "InputRadioGroup overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Inputs</SectionOverview.MetaTitle><SectionOverview.Title>InputRadioGroup</SectionOverview.Title><SectionOverview.Description>Coordinate an exclusive radio selection through one immutable boolean model.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "controlled-group", headerTitle: "Controlled radio group", navTitle: "Group" }}><SectionPreview.Component><DemoInputRadioGroup /></SectionPreview.Component><SectionPreview.Code label="InputRadioGroupExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "InputRadioGroup API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group></SectionAPI>
</DocumentationPage>; }
