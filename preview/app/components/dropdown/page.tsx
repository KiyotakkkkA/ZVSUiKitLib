import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { DropdownPreview } from "./dropdown-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Dropdown",
    description: "Composable anchored menu.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>Overlay</SectionOverview.MetaTitle>
                <SectionOverview.Title>Dropdown</SectionOverview.Title>
                <SectionOverview.Description>
                    Composable popup with Trigger, Anchor, Menu, Item, and
                    Render parts.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DropdownPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="DropdownExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="Dropdown">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="children"
                            type="ReactNode"
                            description="Dropdown parts."
                        />
                        <SectionAPI.Prop
                            name="disabled"
                            type="boolean"
                            defaultValue="false"
                            description="Disables trigger."
                        />
                        <SectionAPI.Prop
                            name="menuWidth"
                            type="number | string"
                            defaultValue="220"
                            description="Popup width."
                        />
                        <SectionAPI.Prop
                            name="menuPlacement"
                            type="DropdownMenuPlacement"
                            defaultValue="bottom-left"
                            description="Popup placement."
                        />
                        <SectionAPI.Prop
                            name="onOpenChange"
                            type="(open: boolean) => void"
                            description="Open state callback."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group
                    title="Dropdown compound parts"
                    description="Trigger, Anchor, Menu, Item, and Render must be nested inside Dropdown."
                >
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Trigger"
                            type="children, placeholder, icon, disabled, className"
                            description="Trigger button props."
                        />
                        <SectionAPI.Prop
                            name="Anchor"
                            type="children, focusInputOnOpen, className"
                            description="Custom div anchor props."
                        />
                        <SectionAPI.Prop
                            name="Item"
                            type="children, closeOnClick, active, icon, className"
                            description="Menu item props."
                        />
                        <SectionAPI.Prop
                            name="Render"
                            type="({ open, close, toggleOpen, openMenu }) => ReactNode"
                            description="Render state access."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
