import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoAutoFillSelector } from "./(preview)/auto-fill-selector-preview";
import { DemoAutoFillSelectorNoDesc } from "./(preview)/auto-fill-selector-preview-no-desc";
import usage from "./(usage)/usage.md";
import usageNoDesc from "./(usage)/usage-no-desc.md";
import { autoFillSelectorProps } from "./props";

export const metadata: Metadata = {
    title: "AutoFillSelector",
    description: "Searchable multi-select.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Inputs</SectionOverview.MetaTitle>
                <SectionOverview.Title>AutoFillSelector</SectionOverview.Title>
                <SectionOverview.Description>
                    Tagged-combobox with search
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "preview1",
                    headerTitle: "AutoFillSelector with description",
                    navTitle: "Example №1",
                }}
            >
                <SectionPreview.Component>
                    <DemoAutoFillSelector />
                </SectionPreview.Component>
                <SectionPreview.Code label="AutoFillSelectorExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "preview2",
                    headerTitle: "AutoFillSelector without description",
                    navTitle: "Example №2",
                }}
            >
                <SectionPreview.Component>
                    <DemoAutoFillSelectorNoDesc />
                </SectionPreview.Component>
                <SectionPreview.Code label="AutoFillSelectorExampleNoDesc.tsx">
                    {usageNoDesc}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "API Reference for AutoFillSelector",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={autoFillSelectorProps.root.name}
                    description={autoFillSelectorProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={autoFillSelectorProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {autoFillSelectorProps.compound.map((compound) => (
                    <SectionAPI.Group
                        key={compound.name}
                        title={`${autoFillSelectorProps.root.name}.${compound.name}`}
                        description={compound.description}
                    >
                        <SectionAPI.Table>
                            <APIProps props={compound.props} />
                        </SectionAPI.Table>
                    </SectionAPI.Group>
                ))}
            </SectionAPI>
        </DocumentationPage>
    );
}
