import type { Metadata } from "next";
import { OverlayAPI } from "../overlay-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoModal } from "./modal-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "Modal" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Modal</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound portal dialog with Header, Content, and Footer.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoModal />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ModalExample.tsx"
            >
                {usage}
            </SectionCode>
            <OverlayAPI component="Modal" />
        </DocumentationPage>
    );
}
