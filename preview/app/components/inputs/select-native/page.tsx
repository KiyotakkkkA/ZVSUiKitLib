import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSelectNative } from "./select-native-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "SelectNative",
    description: "Styled native select.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>SelectNative</SectionOverview.Title>
                <SectionOverview.Description>
                    Styled native select.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoSelectNative />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SelectNativeExample.tsx"
            >
                {usage}
            </SectionCode>
            <InputAPI component="SelectNative" />
        </DocumentationPage>
    );
}
