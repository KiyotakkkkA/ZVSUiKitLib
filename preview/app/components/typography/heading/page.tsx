import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { HeadingPreview } from "./(preview)/heading-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Heading",
    description:
        "Semantic heading scale with controlled tracking and line height.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Heading",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Heading</SectionOverview.Title>
                <SectionOverview.Description>
                    Semantic heading scale with controlled tracking and line
                    height.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview",
                    navTitle: "Preview",
                    headerTitle: "Heading example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <HeadingPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="HeadingExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", navTitle: "API", headerTitle: "Heading API" }}
            >
                <SectionAPI.Group
                    title={componentProps.root.name}
                    description={componentProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={componentProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
