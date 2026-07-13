import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { EmPreview } from "./em-preview";

export const metadata: Metadata = {
    title: "Em",
    description: "Semantic stress emphasis inside running text.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Em",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Em</SectionOverview.Title>
                <SectionOverview.Description>
                    Semantic stress emphasis inside running text.
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
                    <EmPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
