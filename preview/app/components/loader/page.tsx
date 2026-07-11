import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { LoaderPreview } from "./loader-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "Loader" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Loader</SectionOverview.Title>
                <SectionOverview.Description>
                    Compact accessible loading spinner.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <LoaderPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="LoadingState.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="Loader">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="className"
                            type="string"
                            description="Spinner classes."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
