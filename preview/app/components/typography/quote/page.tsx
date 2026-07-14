import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { QuotePreview } from "./(preview)/quote-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Quote",
    description: "Inline quotation that participates in surrounding prose.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Quote",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Quote</SectionOverview.Title>
                <SectionOverview.Description>
                    Inline quotation that participates in surrounding prose.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview",
                    navTitle: "Preview",
                    headerTitle: "Quote example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <QuotePreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="QuoteExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", navTitle: "API", headerTitle: "Quote API" }}
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
