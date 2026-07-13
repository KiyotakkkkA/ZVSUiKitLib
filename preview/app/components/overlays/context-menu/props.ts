import type { ComponentAPIDoc } from "../../../../_shared/types";

const commonContent = {
    className: { type: "string", description: "Additional classes." },
    children: { type: "ReactNode", description: "Rendered content." },
};
const itemProps = {
    inset: {
        type: "boolean",
        defaultValue: "false",
        description: "Adds leading indentation.",
    },
    leftSlot: { type: "ReactNode", description: "Content before the label." },
    rightSlot: { type: "ReactNode", description: "Content after the label." },
    ...commonContent,
};

export const contextMenuProps: ComponentAPIDoc = {
    root: {
        name: "ContextMenu",
        description:
            "Owns open state and screen coordinates for a compound right-click menu.",
        props: {
            children: { type: "ReactNode", description: "Context menu parts." },
        },
    },
    compound: [
        {
            name: "Trigger",
            description: "Area that opens the menu on a context-menu event.",
            props: {
                disabled: {
                    type: "boolean",
                    defaultValue: "false",
                    description: "Prevents the menu from opening.",
                },
                ...commonContent,
            },
        },
        {
            name: "Content",
            description: "Floating menu surface positioned at the pointer.",
            props: commonContent,
        },
        {
            name: "Item",
            description:
                "Standard action button; native button props are also supported.",
            props: itemProps,
        },
        {
            name: "ItemDanger",
            description: "Destructive action button with danger styling.",
            props: itemProps,
        },
        {
            name: "Label",
            description: "Non-interactive section label.",
            props: {
                inset: {
                    type: "boolean",
                    defaultValue: "false",
                    description: "Adds leading indentation.",
                },
                ...commonContent,
            },
        },
        {
            name: "Separator",
            description: "Visual divider accepting native div attributes.",
            props: {
                className: {
                    type: "string",
                    description: "Additional divider classes.",
                },
            },
        },
        {
            name: "Sub",
            description: "Owns hover state and timing for a nested menu.",
            props: {
                fixable: {
                    type: "boolean",
                    defaultValue: "false",
                    description:
                        "Keeps the submenu open while interacting with it.",
                },
                closeDelay: {
                    type: "number",
                    defaultValue: "140",
                    description: "Delay in milliseconds before closing.",
                },
                ...commonContent,
            },
        },
        {
            name: "SubTrigger",
            description: "Action-like row that opens a submenu.",
            props: itemProps,
        },
        {
            name: "SubContent",
            description: "Floating surface for nested items.",
            props: {
                sideOffset: {
                    type: "number",
                    defaultValue: "4",
                    description:
                        "Horizontal distance from the submenu trigger.",
                },
                ...commonContent,
            },
        },
    ],
};
