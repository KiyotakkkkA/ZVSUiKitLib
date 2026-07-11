import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { SelectNativePreview } from "./select-native-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "SelectNative",
    description: "Styled native select.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>SelectNative</SectionOverview.Title>
                <SectionOverview.Description>
                    Styled native select.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <SelectNativePreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SelectNativeExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="SelectNative">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="options"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="placeholder"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="native select props"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (select)"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
