import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import formatLabelCode from "./format-label.md";
import { DemoInputDate } from "./input-date-preview";
import usageCode from "./usage.md";

export const metadata: Metadata = {
    title: "InputDate",
    description: "Date input with a calendar popup and date constraints.",
};

export default function InputDatePage() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Input &amp; form control
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>InputDate</SectionOverview.Title>
                <SectionOverview.Description>
                    A date field paired with a calendar popup, clear action,
                    locale formatting, placement control, and selection
                    constraints.
                </SectionOverview.Description>
                <SectionOverview.Tags>
                    <span>Stable</span>
                    <span>Controlled or uncontrolled</span>
                    <span>Locale aware</span>
                </SectionOverview.Tags>
            </SectionOverview>

            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoInputDate />
            </SectionPreview>

            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="DeliveryDateField.tsx"
            >
                {usageCode}
            </SectionCode>

            <SectionCode
                nav={{ id: "formatting", title: "Custom formatting" }}
                label="FormattedDate.tsx"
            >
                {formatLabelCode}
            </SectionCode>
            <InputAPI component="InputDate" />
        </DocumentationPage>
    );
}
