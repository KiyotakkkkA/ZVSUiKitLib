import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputBig } from "./input-big-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "InputBig" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>InputBig</SectionOverview.Title>
                <SectionOverview.Description>
                    Large multiline native textarea input.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputBig />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="InputBigExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="InputBig" />
        </DocumentationPage>
    );
}
