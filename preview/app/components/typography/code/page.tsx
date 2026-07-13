import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { CodePreview } from "./code-preview";

export const metadata: Metadata = {
    title: "Code",
    description: "Inline and block code treatments for technical content.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Code",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Code</SectionOverview.Title>
                <SectionOverview.Description>
                    Inline and block code treatments for technical content.
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
                    <CodePreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
