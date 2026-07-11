import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSwitcher } from "./switcher-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Switcher",
    description: "Compact segmented switcher.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Switcher</SectionOverview.Title>
                <SectionOverview.Description>
                    Compact segmented switcher.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoSwitcher />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SwitcherExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="Switcher" />
        </DocumentationPage>
    );
}
