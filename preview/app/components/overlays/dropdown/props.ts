import type { ComponentAPIDoc } from "../../../../_shared/types";
import {
    positionAnchorDirective,
    roundVariantsDirective,
} from "../../../../_shared/directives";
const rounded = (value: string) => ({
    type: "RoundVariants",
    defaultValue: value,
    description: "Border radius variant.",
    directives: [roundVariantsDirective],
});
export const dropdownProps: ComponentAPIDoc = {
    root: {
        name: "Dropdown",
        description:
            "Owns open state, trigger references, positioning, and native popover synchronization.",
        props: {
            children: {
                type: "ReactNode",
                description: "Dropdown compound parts.",
            },
            className: {
                type: "string",
                description: "Outer wrapper classes.",
            },
            disabled: {
                type: "boolean",
                defaultValue: "false",
                description: "Disables the dropdown.",
            },
            menuWidth: {
                type: "number | string",
                defaultValue: "220",
                description: "Popup width; auto matches the trigger.",
            },
            menuPlacement: {
                type: "PositionAnchor",
                defaultValue: '"bottom-left"',
                description: "Popup position relative to the trigger.",
                directives: [positionAnchorDirective],
            },
            onOpenChange: {
                type: "(open: boolean) => void",
                description: "Called whenever the open state changes.",
            },
        },
    },
    compound: [
        {
            name: "Trigger",
            description: "Button trigger with built-in open indicator.",
            props: {
                children: { type: "ReactNode", description: "Trigger label." },
                placeholder: {
                    type: "ReactNode",
                    defaultValue: '"Открыть"',
                    description: "Fallback shown without children.",
                },
                icon: {
                    type: "ReactNode",
                    defaultValue: "chevron",
                    description: "Trailing indicator.",
                },
                disabled: {
                    type: "boolean",
                    description: "Disables this trigger.",
                },
                rounded: rounded('"rounded-2xl"'),
                className: { type: "string", description: "Trigger classes." },
            },
        },
        {
            name: "Anchor",
            description:
                "Custom div anchor with button-like keyboard and ARIA behavior.",
            props: {
                children: {
                    type: "ReactNode",
                    description: "Custom anchor content.",
                },
                focusInputOnOpen: {
                    type: "() => void",
                    description: "Runs after the anchor opens the popup.",
                },
                className: { type: "string", description: "Anchor classes." },
            },
        },
        {
            name: "Menu",
            description: "Viewport-aware native popover surface.",
            props: {
                rounded: rounded('"rounded-lg"'),
                className: { type: "string", description: "Popup classes." },
                children: { type: "ReactNode", description: "Popup content." },
            },
        },
        {
            name: "Item",
            description: "Menu action button.",
            props: {
                children: { type: "ReactNode", description: "Item label." },
                closeOnClick: {
                    type: "boolean",
                    defaultValue: "true",
                    description: "Closes the menu after an unprevented click.",
                },
                active: {
                    type: "boolean",
                    defaultValue: "false",
                    description: "Applies the active visual state.",
                },
                icon: { type: "ReactNode", description: "Leading icon." },
                className: { type: "string", description: "Item classes." },
            },
        },
        {
            name: "Render",
            description:
                "Render prop exposing dropdown state and control helpers.",
            props: {
                children: {
                    type: "(args: DropdownRenderArgs) => ReactNode",
                    description:
                        "Receives open, close, toggleOpen, and openMenu.",
                },
            },
        },
    ],
};
