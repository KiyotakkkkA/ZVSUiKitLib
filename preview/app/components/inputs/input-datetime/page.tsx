import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoInputDatetime } from "./(preview)/input-datetime-preview";
import usage from "./(usage)/usage.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "InputDatetime",
    description: "Date and time input with calendar popup.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "InputDatetime overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Inputs</SectionOverview.MetaTitle>
                <SectionOverview.Title>InputDatetime</SectionOverview.Title>
                <SectionOverview.Description>
                    Date and time input with calendar popup.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "InputDatetime example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoInputDatetime />
                </SectionPreview.Component>
                <SectionPreview.Code label="InputDatetimeExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "InputDatetime API",
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
                        title={`InputDatetime.${part.name}`}
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
