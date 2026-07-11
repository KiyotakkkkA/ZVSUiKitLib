import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { PrettyBRPreview } from "./pretty-br-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "PrettyBR",
    description: "Decorative labeled divider.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>PrettyBR</SectionOverview.Title>
                <SectionOverview.Description>
                    Decorative labeled divider.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <PrettyBRPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="PrettyBRExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="PrettyBR">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="icon"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="label"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="size"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (divider, icon, label)"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
