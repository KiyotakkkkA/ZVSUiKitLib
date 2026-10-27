import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSwitcherContent } from "./(preview)/switcher-content-preview";
import { DemoSwitcherIcons } from "./(preview)/switcher-icons-preview";
import { DemoSwitcher } from "./(preview)/switcher-preview";
import { DemoSwitcherStates } from "./(preview)/switcher-states-preview";
import contentUsage from "./(usage)/content.md";
import iconsUsage from "./(usage)/icons.md";
import statesUsage from "./(usage)/states.md";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Switcher",
    description: "Segmented option switch.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Switcher overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Inputs</SectionOverview.MetaTitle>
                <SectionOverview.Title>Switcher</SectionOverview.Title>
                <SectionOverview.Description>
                    Segmented option switch.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "Switcher example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoSwitcher />
                </SectionPreview.Component>
                <SectionPreview.Code label="SwitcherExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "icons",
                    headerTitle: "Options with icons",
                    navTitle: "Icons",
                }}
            >
                <SectionPreview.Component>
                    <DemoSwitcherIcons />
                </SectionPreview.Component>
                <SectionPreview.Code label="SwitcherIcons.tsx">
                    {iconsUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "rich-content",
                    headerTitle: "Counters and pricing toggle",
                    navTitle: "Rich content",
                }}
            >
                <SectionPreview.Component>
                    <DemoSwitcherContent />
                </SectionPreview.Component>
                <SectionPreview.Code label="SwitcherContent.tsx">
                    {contentUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "states",
                    headerTitle: "Borderless tabs and disabled option",
                    navTitle: "States",
                }}
            >
                <SectionPreview.Component>
                    <DemoSwitcherStates />
                </SectionPreview.Component>
                <SectionPreview.Code label="SwitcherStates.tsx">
                    {statesUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Switcher API",
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
                {componentProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`Switcher.${part.name}`}
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
