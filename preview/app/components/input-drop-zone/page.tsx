import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
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
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputDropZone">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="file / files"
                            type="File | null / File[]"
                            description="Selected files."
                        />
                        <SectionAPI.Prop
                            name="previewUrls"
                            type="string[]"
                            defaultValue="[]"
                            description="Existing previews."
                        />
                        <SectionAPI.Prop
                            name="onChange / onFilesChange"
                            type="callback"
                            description="Single or multiple callbacks."
                        />
                        <SectionAPI.Prop
                            name="multiple / disabled"
                            type="boolean"
                            defaultValue="false"
                            description="Selection behaviour."
                        />
                        <SectionAPI.Prop
                            name="accept"
                            type="string"
                            defaultValue="image/*"
                            description="Accepted file types."
                        />
                        <SectionAPI.Prop
                            name="emptyIcon / selectedIcon / fileIcon"
                            type="string"
                            description="State icons."
                        />
                        <SectionAPI.Prop
                            name="emptyTitle / emptyDescription / clearLabel"
                            type="string"
                            description="Visible labels."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
