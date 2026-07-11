import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { InputDropZonePreview } from "./input-drop-zone-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputDropZone" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputDropZone</SectionOverview.Title>
                <SectionOverview.Description>
                    Single or multiple file selection with drag-and-drop
                    previews.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <InputDropZonePreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ImageDropZone.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputDropZone" />
        </DocumentationPage>
    );
}
