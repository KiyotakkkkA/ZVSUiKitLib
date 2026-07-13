import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSlidedPanel } from "./(preview)/slided-panel-preview";
import usage from "./(usage)/usage.md";
import { slidedPanelProps } from "./props";
export const metadata: Metadata = {
    title: "SlidedPanel",
    description: "Slide-in edge panel.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "SlidedPanel overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Overlays</SectionOverview.MetaTitle>
                <SectionOverview.Title>SlidedPanel</SectionOverview.Title>
                <SectionOverview.Description>
                    Open a composable drawer from any viewport edge for focused
                    secondary workflows.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "right-drawer",
                    headerTitle: "Right-side drawer",
                    navTitle: "Drawer",
                }}
            >
                <SectionPreview.Component>
                    <DemoSlidedPanel />
                </SectionPreview.Component>
                <SectionPreview.Code label="SlidedPanelExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "SlidedPanel API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={slidedPanelProps.root.name}
                    description={slidedPanelProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={slidedPanelProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {slidedPanelProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`${slidedPanelProps.root.name}.${part.name}`}
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
