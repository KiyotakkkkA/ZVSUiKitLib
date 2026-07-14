import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { LinkPreview } from "./(preview)/link-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Link",
    description:
        "Accessible inline links with clear hover and focus affordances.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Link",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Link</SectionOverview.Title>
                <SectionOverview.Description>
                    Accessible inline links with clear hover and focus
                    affordances.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview",
                    navTitle: "Preview",
                    headerTitle: "Link example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <LinkPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="LinkExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", navTitle: "API", headerTitle: "Link API" }}
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
