import type { Metadata } from "next";
import { OverlayAPI } from "../overlay-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoDropdown } from "./dropdown-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Dropdown",
    description: "Composable anchored menu.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>Overlay</SectionOverview.MetaTitle>
                <SectionOverview.Title>Dropdown</SectionOverview.Title>
                <SectionOverview.Description>
                    Composable popup with Trigger, Anchor, Menu, Item, and
                    Render parts.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoDropdown />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="DropdownExample.tsx"
            >
                {usage}
            </SectionCode>
            <OverlayAPI component="Dropdown" />
        </DocumentationPage>
    );
}
