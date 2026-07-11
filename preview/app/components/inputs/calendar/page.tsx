import type { Metadata } from "next";
import { InputAPI } from "../input-api";
import { DocumentationPage, SectionCode, SectionOverview, SectionPreview } from "../../../molecules";
import { DemoCalendar } from "./calendar-preview";
import usage from "./usage.md";

export const metadata: Metadata = { title: "Calendar", description: "Configurable date calendar." };
export default function Page() {
    return <DocumentationPage>
        <SectionOverview nav={{ id: "overview", title: "Overview" }}>
            <SectionOverview.MetaTitle>Input &amp; form control</SectionOverview.MetaTitle>
            <SectionOverview.Title>Calendar</SectionOverview.Title>
            <SectionOverview.Description>Date selection with constraints, localization, controlled view state, and custom day rendering.</SectionOverview.Description>
        </SectionOverview>
        <SectionPreview nav={{ id: "preview", title: "Preview" }}><DemoCalendar /></SectionPreview>
        <SectionCode nav={{ id: "usage", title: "Usage" }} label="CalendarExample.tsx">{usage}</SectionCode>
        <InputAPI component="Calendar" />
    </DocumentationPage>;
}
