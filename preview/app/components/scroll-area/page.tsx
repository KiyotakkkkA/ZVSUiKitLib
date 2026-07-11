import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ScrollAreaPreview } from "./scroll-area-preview";
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
                <ScrollAreaPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ScrollAreaExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="ScrollArea">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="children"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="orientation"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="showScrollbar"
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
