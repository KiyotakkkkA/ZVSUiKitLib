import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { TextPreview } from "./text-preview";

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
                    headerTitle: "Example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <TextPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
