import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { EmptyStatePreview } from "./empty-state-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "EmptyState" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>EmptyState</SectionOverview.Title>
                <SectionOverview.Description>
                    Empty-content message with optional icon and action.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <EmptyStatePreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="EmptyStateExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="EmptyState">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="icon / title / description / action"
                            type="ReactNode"
                            description="Content slots."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="string"
                            description="Root classes."
                        />
                        <SectionAPI.Prop
                            name="classNames"
                            type="EmptyStateClassNames"
                            description="icon, title, description, action slots."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
