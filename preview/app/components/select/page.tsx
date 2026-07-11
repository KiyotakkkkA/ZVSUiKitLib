import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { SelectPreview } from "./select-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Select",
    description: "Searchable dropdown selection.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Select</SectionOverview.Title>
                <SectionOverview.Description>
                    Searchable dropdown selection.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <SelectPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SelectExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="Select">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="options"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="placeholder"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="searchable"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="searchPlaceholder"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="emptyMessage"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="disabled"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="menuWidth"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="menuPlacement"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="closeOnSelect"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="classNames (trigger, menu, search, option, optionLabel)"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
