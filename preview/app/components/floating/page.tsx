import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { FloatingPreview } from "./floating-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "Floating" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Floating</SectionOverview.Title>
                <SectionOverview.Description>
                    Anchored content shown on hover or focus.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <FloatingPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="FloatingExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="Floating">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="anchor"
                            type="FloatingAnchor"
                            defaultValue="top-right"
                            description="Content position."
                        />
                        <SectionAPI.Prop
                            name="children"
                            type="ReactNode"
                            description="Trigger and Content."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="string"
                            description="Root classes."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="Compound parts">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Floating.Trigger"
                            type="children, className"
                            description="Hover/focus trigger."
                        />
                        <SectionAPI.Prop
                            name="Floating.Content"
                            type="children, className"
                            description="Floating panel."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
