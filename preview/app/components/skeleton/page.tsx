import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { SkeletonPreview } from "./skeleton-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Skeleton",
    description: "Animated loading placeholder.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Skeleton</SectionOverview.Title>
                <SectionOverview.Description>
                    Animated loading placeholder.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <SkeletonPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SkeletonExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Skeleton">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="animated"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="rounded"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="tone"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="native div props"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
