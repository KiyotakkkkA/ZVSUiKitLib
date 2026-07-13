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
                    or focused.
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
