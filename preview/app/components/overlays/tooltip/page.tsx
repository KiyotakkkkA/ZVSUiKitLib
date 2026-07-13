import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTooltip } from "./(preview)/tooltip-preview";
import usage from "./(usage)/usage.md";
import { tooltipProps } from "./props";
export const metadata: Metadata = {
    title: "Tooltip",
    description: "Hover and focus label.",
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
                    control is hovered or focused.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "hover-label",
                    headerTitle: "Hover and focus label",
                    navTitle: "Tooltip",
                }}
            >
                <SectionPreview.Component>
                    <DemoTooltip />
                </SectionPreview.Component>
                <SectionPreview.Code label="TooltipExample.tsx">
                    {usage}
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
