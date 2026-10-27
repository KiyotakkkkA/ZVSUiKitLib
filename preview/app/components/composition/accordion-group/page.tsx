import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoAccordionGroup } from "./(preview)/accordion-group-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "AccordionGroup",
    description: "Accordions that share an open mode.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "AccordionGroup overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>AccordionGroup</SectionOverview.Title>
                <SectionOverview.Description>
                    Group accordions and choose whether one or several of them
                    can be open at the same time.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "presets",
                    headerTitle: "Groups with solid and ghost presets",
                    navTitle: "Presets",
                }}
            >
                <SectionPreview.Component>
                    <DemoAccordionGroup />
                </SectionPreview.Component>
                <SectionPreview.Code label="AccordionGroupExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "AccordionGroup API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={componentProps.root.name}
                    description={componentProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={componentProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
