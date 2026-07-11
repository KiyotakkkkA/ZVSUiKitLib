import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { InputBigPreview } from "./input-big-preview";
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
                <InputBigPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="InputBigExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="InputBig">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="className"
                            type="string"
                            description="Extra classes."
                        />
                        <SectionAPI.Prop
                            name="...textareaProps"
                            type="TextareaHTMLAttributes<HTMLTextAreaElement>"
                            description="All native textarea attributes."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
