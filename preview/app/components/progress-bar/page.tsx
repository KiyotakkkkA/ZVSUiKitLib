import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ProgressBarPreview } from "./progress-bar-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "ProgressBar",
    description: "Labeled progress indicator.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>ProgressBar</SectionOverview.Title>
                <SectionOverview.Description>
                    Labeled progress indicator.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <ProgressBarPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ProgressBarExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="ProgressBar">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="max"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="label"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="showValue"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (header, label, value, track, indicator)"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
