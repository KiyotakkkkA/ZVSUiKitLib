import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ChartPreview } from "./chart-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Chart",
    description: "Responsive data chart.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Chart</SectionOverview.Title>
                <SectionOverview.Description>
                    Responsive line, area, and bar data visualization.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <ChartPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ChartExample.tsx"
            >
                {usage}
            </SectionCode>
        </DocumentationPage>
    );
}
