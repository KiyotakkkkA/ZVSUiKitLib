import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoDropdown } from "./(preview)/dropdown-preview";
import usage from "./(usage)/usage.md";
import { DemoDropdownAccount } from "./(preview)/dropdown-account-preview";
import dropdownAccountPreviewUsage from "./(usage)/dropdown-account-preview.md";
import { DemoDropdownSort } from "./(preview)/dropdown-sort-preview";
import dropdownSortPreviewUsage from "./(usage)/dropdown-sort-preview.md";
import { dropdownProps } from "./props";
export const metadata: Metadata = {
    title: "Dropdown",
    description: "Generic dropdown popup container.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Dropdown overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Overlays</SectionOverview.MetaTitle>
                <SectionOverview.Title>Dropdown</SectionOverview.Title>
                <SectionOverview.Description>
                    Compose a trigger and viewport-aware native popover menu
                    with selectable actions.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "actions-menu",
                    headerTitle: "Actions dropdown",
                    navTitle: "Actions",
                }}
            >
                <SectionPreview.Component>
                    <DemoDropdown />
                </SectionPreview.Component>
                <SectionPreview.Code label="DropdownExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "account",
                    headerTitle: "Account menu",
                    navTitle: "Account",
                }}
            >
                <SectionPreview.Component>
                    <DemoDropdownAccount />
                </SectionPreview.Component>
                <SectionPreview.Code label="DropdownAccount.tsx">
                    {dropdownAccountPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "sort",
                    headerTitle: "Sort selector",
                    navTitle: "Sort",
                }}
            >
                <SectionPreview.Component>
                    <DemoDropdownSort />
                </SectionPreview.Component>
                <SectionPreview.Code label="DropdownSort.tsx">
                    {dropdownSortPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "Dropdown API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={dropdownProps.root.name}
                    description={dropdownProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={dropdownProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {dropdownProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`${dropdownProps.root.name}.${part.name}`}
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
