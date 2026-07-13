import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { HeadingPreview } from "./heading-preview";

export const metadata: Metadata = {
    title: "Heading",
    description:
        "A semantic heading scale with controlled tracking and line height.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Heading</SectionOverview.Title>
                <SectionOverview.Description>
                    A semantic heading scale with controlled tracking and line
                    height.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{ id: "preview", title: "Preview" }}
                className="[&_.demo-stage>div]:w-full"
            >
                <SectionPreview.Component>
                    <HeadingPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
