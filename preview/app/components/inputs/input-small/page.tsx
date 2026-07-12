import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputSmall } from "./input-small-preview";
import usageCode from "./usage.md";

export const metadata: Metadata = {
    title: "InputSmall",
    description: "Compact native input with coordinated behavior presets.",
};

export default function InputSmallPage() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Input &amp; form control
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>InputSmall</SectionOverview.Title>
                <SectionOverview.Description>
                    A compact native field with accessible password, search,
                    email, phone, and URL behavior presets.
                </SectionOverview.Description>
                <SectionOverview.Tags>
                    <span>Stable</span>
                    <span>React 19</span>
                    <span>Native attributes</span>
                </SectionOverview.Tags>
            </SectionOverview>

            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputSmall />
            </SectionPreview>

            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="InputSmallExample.tsx"
            >
                {usageCode}
            </SectionCode>

            <InputAPI component="InputSmall" />
        </DocumentationPage>
    );
}
