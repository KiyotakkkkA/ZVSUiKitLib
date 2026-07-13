import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { KbdPreview } from "./kbd-preview";

export const metadata: Metadata = {
    title: "Kbd",
    description: "Keyboard shortcuts rendered as compact physical-key tokens.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    navTitle: "Overview",
                    headerTitle: "Kbd",
                }}
            >
                <SectionOverview.MetaTitle>
                    Typography
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Kbd</SectionOverview.Title>
                <SectionOverview.Description>
                    Keyboard shortcuts rendered as compact physical-key tokens.
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
                    <KbdPreview />
                </SectionPreview.Component>
            </SectionPreview>
        </DocumentationPage>
    );
}
