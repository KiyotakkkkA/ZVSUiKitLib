import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { StrongPreview } from "./strong-preview";

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
                    headerTitle: "Example",
                }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <StrongPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
