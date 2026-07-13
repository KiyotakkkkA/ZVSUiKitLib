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
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Text</SectionOverview.Title>
                <SectionOverview.Description>
                    Body and supporting text with deliberate size and contrast.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{ id: "preview", title: "Preview" }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <TextPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
