import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoFloating } from "./(preview)/floating-preview";
import usage from "./(usage)/usage.md";
import { DemoFloatingProfile } from "./(preview)/floating-profile-preview";
import floatingProfilePreviewUsage from "./(usage)/floating-profile-preview.md";
import { DemoFloatingHint } from "./(preview)/floating-hint-preview";
import floatingHintPreviewUsage from "./(usage)/floating-hint-preview.md";
import { floatingProps } from "./props";
export const metadata: Metadata = {
    title: "Floating",
    description: "Hover and focus floating panel.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Floating overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Overlays</SectionOverview.MetaTitle>
                <SectionOverview.Title>Floating</SectionOverview.Title>
                <SectionOverview.Description>
                    Reveal a flexible panel when its attached trigger is hovered
                    or focused, and click the trigger to pin it open.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "positioned-panel",
                    headerTitle: "Positioned floating panel",
                    navTitle: "Panel",
                }}
            >
                <SectionPreview.Component>
                    <DemoFloating />
                </SectionPreview.Component>
                <SectionPreview.Code label="FloatingExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "profile",
                    headerTitle: "Profile hover card",
                    navTitle: "Profile",
                }}
            >
                <SectionPreview.Component>
                    <DemoFloatingProfile />
                </SectionPreview.Component>
                <SectionPreview.Code label="FloatingProfile.tsx">
                    {floatingProfilePreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "hints",
                    headerTitle: "Form field hints",
                    navTitle: "Hints",
                }}
            >
                <SectionPreview.Component>
                    <DemoFloatingHint />
                </SectionPreview.Component>
                <SectionPreview.Code label="FloatingHint.tsx">
                    {floatingHintPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Floating API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={floatingProps.root.name}
                    description={floatingProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={floatingProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {floatingProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`${floatingProps.root.name}.${part.name}`}
                        description={part.description}
                    >
                        <SectionAPI.Table>
                            <APIProps props={part.props} />
                        </SectionAPI.Table>
                    </SectionAPI.Group>
                ))}
            </SectionAPI>
        </DocumentationPage>
    );
}
