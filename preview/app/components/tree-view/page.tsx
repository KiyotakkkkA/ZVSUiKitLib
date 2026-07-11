import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { TreeViewPreview } from "./tree-view-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "TreeView",
    description: "Hierarchical and virtualized tree.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>TreeView</SectionOverview.Title>
                <SectionOverview.Description>
                    Hierarchical and virtualized tree.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <TreeViewPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TreeViewExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "Main API" }}>
                <SectionAPI.Group title="TreeView">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="children"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="virtualized"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="height"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="estimateSize"
                            type="See exported types"
                            description="Component API."
                        />
                        <SectionAPI.Prop
                            name="overscan"
                            type="See exported types"
                            description="Component API."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="TreeView compound API">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Catalog (classNames: trigger, title, nested, chevronIcon, folderIcon, rightSlot, virtualContent, virtualItem)"
                            type="Compound part"
                            description="Must be nested inside TreeView."
                        />
                        <SectionAPI.Prop
                            name="Element (classNames: icon, content, label, description, rightSlot)"
                            type="Compound part"
                            description="Must be nested inside TreeView."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
