import { SectionAPI } from "../../molecules";

type PropDoc = {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
};

type GroupDoc = {
    title: string;
    description?: string;
    props: PropDoc[];
};

const nativeDiv: PropDoc = {
    name: "...divProps",
    type: "HTMLAttributes<HTMLDivElement>",
    description: "All remaining native div attributes are forwarded.",
};

const groups: Record<string, GroupDoc[]> = {
    ContextMenu: [
        {
            title: "ContextMenu",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Trigger and menu content.",
                },
            ],
        },
        {
            title: "ContextMenu.Trigger",
            description: 'Extends ComponentPropsWithoutRef<"div">.',
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Area that opens the menu on right click.",
                },
                {
                    name: "disabled",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Disables context-menu opening.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Trigger wrapper classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "ContextMenu.Content",
            description: 'Extends ComponentPropsWithoutRef<"div">.',
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Menu items and submenus.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Menu panel classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "ContextMenu.Item",
            description: 'Extends ComponentPropsWithoutRef<"button">.',
            props: [
                {
                    name: "inset",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Adds leading inset alignment.",
                },
                {
                    name: "leftSlot / rightSlot",
                    type: "ReactNode",
                    description: "Content rendered beside the label.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Item button classes.",
                },
                {
                    name: "...buttonProps",
                    type: 'ComponentPropsWithoutRef<"button">',
                    description: "Native button attributes are forwarded.",
                },
            ],
        },
        {
            title: "ContextMenu.ItemDanger",
            description:
                "Destructive action. Accepts the same props as ContextMenu.Item.",
            props: [
                {
                    name: "inset",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Adds leading inset alignment.",
                },
                {
                    name: "leftSlot / rightSlot",
                    type: "ReactNode",
                    description: "Content rendered beside the label.",
                },
                {
                    name: "...buttonProps",
                    type: 'ComponentPropsWithoutRef<"button">',
                    description: "Native button attributes are forwarded.",
                },
            ],
        },
        {
            title: "ContextMenu.Label",
            description: 'Extends ComponentPropsWithoutRef<"div">.',
            props: [
                {
                    name: "inset",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Aligns the label with inset items.",
                },
                nativeDiv,
            ],
        },
        {
            title: "ContextMenu.Separator",
            description: 'Extends ComponentPropsWithoutRef<"div">.',
            props: [
                {
                    name: "className",
                    type: "string",
                    description: "Separator classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "ContextMenu.Sub",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "SubTrigger and SubContent.",
                },
                {
                    name: "fixable",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Pins the submenu after trigger click.",
                },
                {
                    name: "closeDelay",
                    type: "number",
                    defaultValue: "140",
                    description: "Delay before the submenu closes.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Submenu wrapper classes.",
                },
            ],
        },
        {
            title: "ContextMenu.SubTrigger",
            description: 'Extends ComponentPropsWithoutRef<"button">.',
            props: [
                {
                    name: "inset",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Adds leading inset alignment.",
                },
                {
                    name: "leftSlot / rightSlot",
                    type: "ReactNode",
                    description: "Content rendered beside the label.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Submenu trigger classes.",
                },
                {
                    name: "...buttonProps",
                    type: 'ComponentPropsWithoutRef<"button">',
                    description: "Native button attributes are forwarded.",
                },
            ],
        },
        {
            title: "ContextMenu.SubContent",
            description: 'Extends ComponentPropsWithoutRef<"div">.',
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Nested menu items.",
                },
                {
                    name: "sideOffset",
                    type: "number",
                    defaultValue: "4",
                    description: "Space between submenu and parent.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Submenu panel classes.",
                },
                nativeDiv,
            ],
        },
    ],
    Dropdown: [
        {
            title: "Dropdown",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Dropdown compound parts.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Root wrapper classes.",
                },
                {
                    name: "disabled",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Disables dropdown interaction.",
                },
                {
                    name: "menuWidth",
                    type: "number | string",
                    defaultValue: "220",
                    description: "Popup width; auto matches the trigger.",
                },
                {
                    name: "menuPlacement",
                    type: "DropdownMenuPlacement",
                    defaultValue: "bottom-left",
                    description: "Popup placement relative to trigger.",
                },
                {
                    name: "onOpenChange",
                    type: "(open: boolean) => void",
                    description: "Called whenever open state changes.",
                },
            ],
        },
        {
            title: "Dropdown.Trigger",
            description: "Extends ButtonHTMLAttributes<HTMLButtonElement>.",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Trigger label.",
                },
                {
                    name: "placeholder",
                    type: "ReactNode",
                    defaultValue: "Открыть",
                    description: "Fallback label.",
                },
                {
                    name: "icon",
                    type: "ReactNode",
                    description: "Trailing icon.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Trigger classes.",
                },
                {
                    name: "...buttonProps",
                    type: "ButtonHTMLAttributes<HTMLButtonElement>",
                    description: "Native button attributes are forwarded.",
                },
            ],
        },
        {
            title: "Dropdown.Anchor",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                {
                    name: "focusInputOnOpen",
                    type: "() => void",
                    description: "Runs after opening for custom input focus.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Anchor classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "Dropdown.Menu",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                {
                    name: "rounded",
                    type: "RoundVariants",
                    defaultValue: "rounded-lg",
                    description: "Popover border radius.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Popover menu classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "Dropdown.Item",
            description: "Extends ButtonHTMLAttributes<HTMLButtonElement>.",
            props: [
                {
                    name: "closeOnClick",
                    type: "boolean",
                    defaultValue: "true",
                    description: "Closes menu after selection.",
                },
                {
                    name: "active",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Applies active styling.",
                },
                {
                    name: "icon",
                    type: "ReactNode",
                    description: "Leading icon.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Item classes.",
                },
                {
                    name: "...buttonProps",
                    type: "ButtonHTMLAttributes<HTMLButtonElement>",
                    description: "Native button attributes are forwarded.",
                },
            ],
        },
        {
            title: "Dropdown.Render",
            props: [
                {
                    name: "children",
                    type: "({ open, close, toggleOpen, openMenu }) => ReactNode",
                    description:
                        "Render function exposing dropdown state and controls.",
                },
            ],
        },
    ],
    Floating: [
        {
            title: "Floating",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Trigger and Content.",
                },
                {
                    name: "anchor",
                    type: "FloatingAnchor",
                    defaultValue: "top-right",
                    description: "Content position.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Root classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "Floating.Trigger",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Hover and focus target.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Trigger classes.",
                },
                nativeDiv,
            ],
        },
        {
            title: "Floating.Content",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                {
                    name: "rounded",
                    type: "RoundVariants",
                    defaultValue: "rounded-lg",
                    description: "Panel border radius.",
                },
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Floating panel content.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Panel classes.",
                },
                nativeDiv,
            ],
        },
    ],
    Modal: [
        {
            title: "Modal",
            props: [
                {
                    name: "open",
                    type: "boolean",
                    description: "Controls visibility.",
                },
                {
                    name: "onClose",
                    type: "() => void",
                    description:
                        "Close callback for Escape, overlay, and header button.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Dialog container classes.",
                },
                {
                    name: "rounded",
                    type: "RoundVariants",
                    defaultValue: "rounded-lg",
                    description: "Dialog container border radius.",
                },
                {
                    name: "overlayClassName",
                    type: "string",
                    description: "Overlay classes.",
                },
                {
                    name: "closeOnOverlayClick",
                    type: "boolean",
                    defaultValue: "true",
                    description: "Closes after overlay interaction.",
                },
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Modal sections.",
                },
            ],
        },
        {
            title: "Modal.Header",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Header content.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Header classes.",
                },
                {
                    name: "closeButtonClassName",
                    type: "string",
                    description: "Close button classes.",
                },
                {
                    name: "closeButtonAriaLabel",
                    type: "string",
                    defaultValue: "Закрыть окно",
                    description: "Accessible close label.",
                },
                {
                    name: "showCloseButton",
                    type: "boolean",
                    defaultValue: "true",
                    description: "Controls close button rendering.",
                },
            ],
        },
        {
            title: "Modal.Content",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Scrollable body content.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Content classes.",
                },
            ],
        },
        {
            title: "Modal.Footer",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Footer actions.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Footer classes.",
                },
            ],
        },
    ],
    SlidedPanel: [
        {
            title: "SlidedPanel",
            props: [
                {
                    name: "open",
                    type: "boolean",
                    description: "Controls visibility.",
                },
                {
                    name: "onClose",
                    type: "() => void",
                    description: "Close callback.",
                },
                {
                    name: "closeOnOverlayClick",
                    type: "boolean",
                    defaultValue: "true",
                    description: "Closes after overlay click.",
                },
                {
                    name: "panelPlacement",
                    type: "SlidedPanelPlacement",
                    defaultValue: "right",
                    description: "Viewport edge used by the drawer.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Panel classes and custom dimensions.",
                },
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Panel sections.",
                },
            ],
        },
        ...["Header", "Title", "Subtitle", "Content", "Footer"].map((part) => ({
            title: `SlidedPanel.${part}`,
            description: `Extends native attributes for the ${part.toLowerCase()} element.`,
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: `${part} content.`,
                },
                {
                    name: "className",
                    type: "string",
                    description: `${part} classes.`,
                },
                {
                    name: "...elementProps",
                    type: "HTMLAttributes<HTMLElement>",
                    description: "Remaining native attributes are forwarded.",
                },
            ],
        })),
    ],
    Tooltip: [
        {
            title: "Tooltip",
            props: [
                {
                    name: "children",
                    type: "ReactNode",
                    description: "Wrapped trigger element.",
                },
                {
                    name: "label",
                    type: "ReactNode",
                    description: "Tooltip content.",
                },
                {
                    name: "placement",
                    type: "TooltipPlacement",
                    defaultValue: "top-center",
                    description: "Tooltip and arrow placement.",
                },
                {
                    name: "rounded",
                    type: "RoundVariants",
                    defaultValue: "rounded-lg",
                    description: "Tooltip border radius.",
                },
                {
                    name: "className",
                    type: "string",
                    description: "Tooltip panel classes.",
                },
            ],
        },
    ],
};

export function OverlayAPI({ component }: { component: keyof typeof groups }) {
    return (
        <SectionAPI nav={{ id: "api", title: "API reference" }}>
            {groups[component].map((group) => (
                <SectionAPI.Group
                    key={group.title}
                    title={group.title}
                    description={group.description}
                >
                    <SectionAPI.Table>
                        {group.props.map((prop) => (
                            <SectionAPI.Prop key={prop.name} {...prop} />
                        ))}
                    </SectionAPI.Table>
                </SectionAPI.Group>
            ))}
        </SectionAPI>
    );
}
