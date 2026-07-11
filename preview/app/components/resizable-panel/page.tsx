import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ResizablePanelPreview } from "./resizable-panel-preview";
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
                <ResizablePanelPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ResizablePanelExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="ResizablePanel">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="children"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="defaultSize"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="minSize"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="maxSize"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="ResizablePanel compound API">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Sidebar"
                            type="Compound part"
                            description="Must be nested inside ResizablePanel."
                        />
                        <SectionAPI.Prop
                            name="Handle"
                            type="Compound part"
                            description="Must be nested inside ResizablePanel."
                        />
                        <SectionAPI.Prop
                            name="Content"
                            type="Compound part"
                            description="Must be nested inside ResizablePanel."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
