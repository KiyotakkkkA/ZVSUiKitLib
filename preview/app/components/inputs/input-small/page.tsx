import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import passwordCode from "./password.md";
import { DemoInputSmall } from "./input-small-preview";
import usageCode from "./usage.md";

export const metadata: Metadata = {
    title: "InputSmall",
    description: "Compact single-line input with password visibility support.",
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
                    A compact single-line field with native input behavior and a
                    built-in password visibility control.
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
                label="EmailField.tsx"
            >
                {usageCode}
            </SectionCode>

            <SectionCode
                nav={{ id: "password", title: "Password input" }}
                label="PasswordField.tsx"
            >
                {passwordCode}
            </SectionCode>
            <InputAPI component="InputSmall" />
        </DocumentationPage>
    );
}
