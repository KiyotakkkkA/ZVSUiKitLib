import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { LinkPreview } from "./link-preview";

export const metadata: Metadata = {
    title: "Link",
    description:
        "Accessible inline links with clear hover and focus affordances.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
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
                nav={{ id: "preview", title: "Preview" }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <LinkPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
