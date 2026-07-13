import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { QuotePreview } from "./quote-preview";

export const metadata: Metadata = {
    title: "Quote",
    description: "An inline quotation that participates in surrounding prose.",
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
                    An inline quotation that participates in surrounding prose.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview",
                    navTitle: "Preview",
                    headerTitle: "Example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <QuotePreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
