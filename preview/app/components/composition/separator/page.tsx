import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSeparator } from "./(preview)/separator-preview";
import usage from "./(usage)/usage.md";
import { DemoSeparatorLogin } from "./(preview)/separator-login-preview";
import separatorLoginPreviewUsage from "./(usage)/separator-login-preview.md";
import { DemoSeparatorToolbar } from "./(preview)/separator-toolbar-preview";
import separatorToolbarPreviewUsage from "./(usage)/separator-toolbar-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Separator",
    description: "Horizontal or vertical divider.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Separator overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Separator</SectionOverview.Title>
                <SectionOverview.Description>
                    Horizontal or vertical divider.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "Separator example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoSeparator />
                </SectionPreview.Component>
                <SectionPreview.Code label="SeparatorExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "login",
                    headerTitle: "Sign-in card",
                    navTitle: "Sign-in",
                }}
            >
                <SectionPreview.Component>
                    <DemoSeparatorLogin />
                </SectionPreview.Component>
                <SectionPreview.Code label="SeparatorLogin.tsx">
                    {separatorLoginPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "toolbar",
                    headerTitle: "Toolbar and stats",
                    navTitle: "Toolbar",
                }}
            >
                <SectionPreview.Component>
                    <DemoSeparatorToolbar />
                </SectionPreview.Component>
                <SectionPreview.Code label="SeparatorToolbar.tsx">
                    {separatorToolbarPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Separator API",
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
                        title={`Separator.${part.name}`}
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
