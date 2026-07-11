import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ContextMenuPreview } from "./context-menu-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "ContextMenu",
    description: "Pointer context menu.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>ContextMenu</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound contextual actions with nested submenus and
                    viewport positioning.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <ContextMenuPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ContextMenuExample.tsx"
            >
                {usage}
            </SectionCode>
        </DocumentationPage>
    );
}
