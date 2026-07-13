import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { BlockquotePreview } from "./blockquote-preview";

export const metadata: Metadata = {
    title: "Blockquote",
    description: "A block quotation with an optional source or attribution.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Blockquote</SectionOverview.Title>
                <SectionOverview.Description>
                    A block quotation with an optional source or attribution.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{ id: "preview", title: "Preview" }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <BlockquotePreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
