import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoResizablePanel } from "./resizable-panel-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "ResizablePanel",
    description: "Resizable sidebar and content layout.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>ResizablePanel</SectionOverview.Title>
                <SectionOverview.Description>
                    Resizable sidebar and content layout.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoResizablePanel />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ResizablePanelExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="ResizablePanel" />
        </DocumentationPage>
    );
}
