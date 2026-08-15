import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoResizablePanel } from "./(preview)/resizable-panel-preview";
import { ControlledResizablePanelPreview } from "./(preview)/controlled-resizable-panel-preview";
import usage from "./(usage)/usage.md";
import controlledUsage from "./(usage)/controlled.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "ResizablePanel",
    description: "Resizable sidebar layout.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "ResizablePanel overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>ResizablePanel</SectionOverview.Title>
                <SectionOverview.Description>
                    Accessible split-panel layout with controlled and uncontrolled sizing, pointer, touch, and keyboard interaction.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "ResizablePanel example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component className="p-5 [&>div]:flex [&>div]:w-full [&>div]:items-center [&>div]:justify-center sm:p-8">
                    <DemoResizablePanel />
                </SectionPreview.Component>
                <SectionPreview.Code label="ResizablePanelExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "controlled-vertical",
                    headerTitle: "Controlled vertical panel",
                    navTitle: "Controlled vertical",
                }}
            >
                <SectionPreview.Component className="p-5 [&>div]:flex [&>div]:w-full [&>div]:items-center [&>div]:justify-center sm:p-8">
                    <ControlledResizablePanelPreview />
                </SectionPreview.Component>
                <SectionPreview.Code label="ControlledResizablePanel.tsx">
                    {controlledUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "ResizablePanel API",
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
                        title={`ResizablePanel.${part.name}`}
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
