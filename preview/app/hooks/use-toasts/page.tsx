import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ToastPreview } from "./toast-preview";
import usage from "./usage.md";

export const metadata: Metadata = { title: "useToasts" };

export default function UseToastsPage() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>Notification hook</SectionOverview.MetaTitle>
                <SectionOverview.Title>useToasts</SectionOverview.Title>
                <SectionOverview.Description>
                    Push accessible, timed notifications from anywhere inside ToastProvider.
                </SectionOverview.Description>
                <SectionOverview.Tags><span>Provider required</span><span>5 variants</span><span>ARIA live</span></SectionOverview.Tags>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "All toast types" }}>
                <ToastPreview />
            </SectionPreview>
            <SectionCode nav={{ id: "usage", title: "Usage" }} label="ToastExample.tsx">{usage}</SectionCode>
            <SectionAPI nav={{ id: "api", title: "API" }}>
                <SectionAPI.Group title="useToasts" description="Must be used inside ToastProvider.">
                    <SectionAPI.Table>
                        <SectionAPI.Prop name="normal" type="(input: ToastInput) => void" description="Neutral notification." />
                        <SectionAPI.Prop name="info" type="(input: ToastInput) => void" description="Informational notification." />
                        <SectionAPI.Prop name="warning" type="(input: ToastInput) => void" description="Warning notification." />
                        <SectionAPI.Prop name="success" type="(input: ToastInput) => void" description="Success notification." />
                        <SectionAPI.Prop name="danger" type="(input: ToastInput) => void" description="Error or destructive notification." />
                        <SectionAPI.Prop name="push" type="(type: ToastType, input: ToastInput) => void" description="Dynamic toast variant." />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="ToastInput">
                    <SectionAPI.Table>
                        <SectionAPI.Prop name="title" type="string" description="Required notification title." />
                        <SectionAPI.Prop name="description" type="string" description="Optional supporting text." />
                        <SectionAPI.Prop name="durationMs" type="number" defaultValue="3500" description="Visible duration, clamped to 1200–20000 ms." />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
