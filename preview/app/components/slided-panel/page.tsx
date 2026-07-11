import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { SlidedPanelPreview } from "./slided-panel-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "SlidedPanel",
    description: "Compound edge drawer.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>SlidedPanel</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound edge drawer.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <SlidedPanelPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SlidedPanelExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="SlidedPanel">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="open"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onClose"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="closeOnOverlayClick"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="panelPlacement"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="children"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="SlidedPanel compound API">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Header"
                            type="Compound part"
                            description="Must be nested inside SlidedPanel."
                        />
                        <SectionAPI.Prop
                            name="Title"
                            type="Compound part"
                            description="Must be nested inside SlidedPanel."
                        />
                        <SectionAPI.Prop
                            name="Subtitle"
                            type="Compound part"
                            description="Must be nested inside SlidedPanel."
                        />
                        <SectionAPI.Prop
                            name="Content"
                            type="Compound part"
                            description="Must be nested inside SlidedPanel."
                        />
                        <SectionAPI.Prop
                            name="Footer"
                            type="Compound part"
                            description="Must be nested inside SlidedPanel."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
