import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputCheckBoxGroup } from "./(preview)/input-checkbox-group-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "InputCheckBoxGroup",
    description: "Checkboxes connected to a shared boolean model.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "InputCheckBoxGroup overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Inputs</SectionOverview.MetaTitle>
                <SectionOverview.Title>
                    InputCheckBoxGroup
                </SectionOverview.Title>
                <SectionOverview.Description>
                    Coordinate multiple checkbox controls through one immutable
                    boolean model.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "controlled-group",
                    headerTitle: "Controlled checkbox group",
                    navTitle: "Group",
                }}
            >
                <SectionPreview.Component>
                    <DemoInputCheckBoxGroup />
                </SectionPreview.Component>
                <SectionPreview.Code label="InputCheckBoxGroupExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "InputCheckBoxGroup API",
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
