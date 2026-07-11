import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoScrollArea } from "./scroll-area-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "ScrollArea",
    description: "Styled overflow container.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>ScrollArea</SectionOverview.Title>
                <SectionOverview.Description>
                    Styled overflow container.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoScrollArea />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ScrollAreaExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="ScrollArea" />
        </DocumentationPage>
    );
}
