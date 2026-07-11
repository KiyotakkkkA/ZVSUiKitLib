import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { CardPreview } from "./card-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Card",
    description: "Structured content surface.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Card</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound content surface with header, title, subtitle,
                    content, and footer.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <CardPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="CardExample.tsx"
            >
                {usage}
            </SectionCode>
        </DocumentationPage>
    );
}
