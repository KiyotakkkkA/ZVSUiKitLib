import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoDataDisplay } from "./(preview)/data-display-preview";
import usage from "./(usage)/usage.md";
import { DemoDataDisplayOrder } from "./(preview)/data-display-order-preview";
import dataDisplayOrderPreviewUsage from "./(usage)/data-display-order-preview.md";
import { DemoDataDisplayServer } from "./(preview)/data-display-server-preview";
import dataDisplayServerPreviewUsage from "./(usage)/data-display-server-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "DataDisplay",
    description: "Compact labeled data list.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "DataDisplay overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>DataDisplay</SectionOverview.Title>
                <SectionOverview.Description>
                    Compact labeled data list.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "DataDisplay example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoDataDisplay />
                </SectionPreview.Component>
                <SectionPreview.Code label="DataDisplayExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "order",
                    headerTitle: "Order summary",
                    navTitle: "Order",
                }}
            >
                <SectionPreview.Component>
                    <DemoDataDisplayOrder />
                </SectionPreview.Component>
                <SectionPreview.Code label="DataDisplayOrder.tsx">
                    {dataDisplayOrderPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "server",
                    headerTitle: "Server details",
                    navTitle: "Server",
                }}
            >
                <SectionPreview.Component>
                    <DemoDataDisplayServer />
                </SectionPreview.Component>
                <SectionPreview.Code label="DataDisplayServer.tsx">
                    {dataDisplayServerPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "DataDisplay API",
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
                        title={`DataDisplay.${part.name}`}
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
