import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { StrongPreview } from "./(preview)/strong-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Strong",
    description: "Semantic importance with restrained visual emphasis.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Strong",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Strong</SectionOverview.Title>
                <SectionOverview.Description>
                    Semantic importance with restrained visual emphasis.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview",
                    navTitle: "Preview",
                    headerTitle: "Strong example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <StrongPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="StrongExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", navTitle: "API", headerTitle: "Strong API" }}
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
