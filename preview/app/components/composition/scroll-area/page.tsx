import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import { DocumentationPage, SectionAPI, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoScrollArea } from "./(preview)/scroll-area-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = { title: "ScrollArea", description: "Styled scroll container." };
export default function Page() { return <DocumentationPage>
    <SectionOverview nav={{ id: "overview", headerTitle: "ScrollArea overview", navTitle: "Overview" }}><SectionOverview.MetaTitle>Composition</SectionOverview.MetaTitle><SectionOverview.Title>ScrollArea</SectionOverview.Title><SectionOverview.Description>Styled scroll container.</SectionOverview.Description></SectionOverview>
    <SectionPreview nav={{ id: "basic-example", headerTitle: "ScrollArea example", navTitle: "Example" }}><SectionPreview.Component><DemoScrollArea /></SectionPreview.Component><SectionPreview.Code label="ScrollAreaExample.tsx">{usage}</SectionPreview.Code></SectionPreview>
    <SectionAPI nav={{ id: "api", headerTitle: "ScrollArea API", navTitle: "API" }}><SectionAPI.Group title={componentProps.root.name} description={componentProps.root.description}><SectionAPI.Table><APIProps props={componentProps.root.props} /></SectionAPI.Table></SectionAPI.Group>{componentProps.compound.map((part) => <SectionAPI.Group key={part.name} title={`ScrollArea.${part.name}`} description={part.description}><SectionAPI.Table><APIProps props={part.props} /></SectionAPI.Table></SectionAPI.Group>)}</SectionAPI>
</DocumentationPage>; }

