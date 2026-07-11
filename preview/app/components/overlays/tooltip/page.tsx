import type { Metadata } from "next";
import { OverlayAPI } from "../overlay-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTooltip } from "./tooltip-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Tooltip",
    description: "Hover and focus hint.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Tooltip</SectionOverview.Title>
                <SectionOverview.Description>
                    Hover and focus hint.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoTooltip />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TooltipExample.tsx"
            >
                {usage}
            </SectionCode>
            <OverlayAPI component="Tooltip" />
        </DocumentationPage>
    );
}
