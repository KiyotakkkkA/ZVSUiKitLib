import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTooltipPlacements } from "./(preview)/tooltip-placements-preview";
import { DemoTooltipRounded } from "./(preview)/tooltip-rounded-preview";
import placementsUsage from "./(usage)/placements.md";
import roundedUsage from "./(usage)/rounded.md";
import { tooltipProps } from "./props";
export const metadata: Metadata = {
    title: "Tooltip",
    description: "Hover label.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Tooltip overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Overlays</SectionOverview.MetaTitle>
                <SectionOverview.Title>Tooltip</SectionOverview.Title>
                <SectionOverview.Description>
                    Add concise contextual help that appears when a wrapped
                    control is hovered.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "placements",
                    headerTitle: "All placements",
                    navTitle: "Placements",
                }}
            >
                <SectionPreview.Component>
                    <DemoTooltipPlacements />
                </SectionPreview.Component>
                <SectionPreview.Code label="TooltipPlacements.tsx">
                    {placementsUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "rounded",
                    headerTitle: "Border radius presets",
                    navTitle: "Rounded",
                }}
            >
                <SectionPreview.Component>
                    <DemoTooltipRounded />
                </SectionPreview.Component>
                <SectionPreview.Code label="TooltipRounded.tsx">
                    {roundedUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", headerTitle: "Tooltip API", navTitle: "API" }}
            >
                <SectionAPI.Group
                    title={tooltipProps.root.name}
                    description={tooltipProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={tooltipProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
