import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputRange } from "./input-range-preview";
import usage from "./usage.md";

export const metadata: Metadata = { title: "InputRange" };

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputRange</SectionOverview.Title>
                <SectionOverview.Description>
                    Numeric range input with two draggable boundaries.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputRange />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="RangeField.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputRange" />
        </DocumentationPage>
    );
}
