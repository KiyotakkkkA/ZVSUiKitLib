import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoScrollArea } from "./(preview)/scroll-area-preview";
import usage from "./(usage)/usage.md";
import { DemoScrollAreaChat } from "./(preview)/scroll-area-chat-preview";
import scrollAreaChatPreviewUsage from "./(usage)/scroll-area-chat-preview.md";
import { DemoScrollAreaChips } from "./(preview)/scroll-area-chips-preview";
import scrollAreaChipsPreviewUsage from "./(usage)/scroll-area-chips-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "ScrollArea",
    description: "Styled scroll container.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "ScrollArea overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>ScrollArea</SectionOverview.Title>
                <SectionOverview.Description>
                    Styled scroll container.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "ScrollArea example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoScrollArea />
                </SectionPreview.Component>
                <SectionPreview.Code label="ScrollAreaExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "chat",
                    headerTitle: "Chat messages",
                    navTitle: "Chat",
                }}
            >
                <SectionPreview.Component>
                    <DemoScrollAreaChat />
                </SectionPreview.Component>
                <SectionPreview.Code label="ScrollAreaChat.tsx">
                    {scrollAreaChatPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "chips",
                    headerTitle: "Horizontal chips",
                    navTitle: "Chips",
                }}
            >
                <SectionPreview.Component>
                    <DemoScrollAreaChips />
                </SectionPreview.Component>
                <SectionPreview.Code label="ScrollAreaChips.tsx">
                    {scrollAreaChipsPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "ScrollArea API",
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
                        title={`ScrollArea.${part.name}`}
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
