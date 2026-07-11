import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { TooltipPreview } from "./tooltip-preview";
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
                <TooltipPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TooltipExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Tooltip">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="children"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="label"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="placement"
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
            </SectionAPI>
        </DocumentationPage>
    );
}
