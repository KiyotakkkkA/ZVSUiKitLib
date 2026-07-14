import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { TextPreview } from "./(preview)/text-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Text",
    description: "Body and supporting text with deliberate size and contrast.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Text",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Text</SectionOverview.Title>
                <SectionOverview.Description>
                    Body and supporting text with deliberate size and contrast.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview",
                    navTitle: "Preview",
                    headerTitle: "Text example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <TextPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="TextExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", navTitle: "API", headerTitle: "Text API" }}
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
