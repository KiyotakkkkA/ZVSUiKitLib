import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoButton } from "./button-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Button",
    description: "Interactive action control.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Button</SectionOverview.Title>
                <SectionOverview.Description>
                    Action control with variants, shapes, and loading state.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoButton />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ButtonExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="Button" />
        </DocumentationPage>
    );
}
