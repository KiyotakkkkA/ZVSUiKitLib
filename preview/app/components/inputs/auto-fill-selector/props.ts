import type { ComponentAPIDoc } from "../../../../_shared/types";
import { roundVariantsDirective } from "../../../../_shared/directives";

const roundedType = "RoundVariants";

export const autoFillSelectorProps: ComponentAPIDoc = {
    root: {
        name: "AutoFillSelector",
        description:
            "Composable multi-select with search, selected tags, filtered options, and a dropdown listbox.",
        props: {
            options: {
                type: "AutoFillOption[]",
                description: "Option list.",
            },
            value: {
                type: "string[]",
                defaultValue: "[]",
                description: "Selected values.",
            },
            onChange: {
                type: "(value: string[]) => void",
                description: "Called when selection changes.",
            },
            disabled: {
                type: "boolean",
                defaultValue: "false",
                description: "Disables interactions.",
            },
            menuWidth: {
                type: "number | string",
                defaultValue: '"auto"',
                description: "Dropdown popup width; auto matches the trigger.",
            },
            children: {
                type: "ReactNode",
                description: "Selector compound parts.",
            },
            onOpenChange: {
                type: "(open: boolean) => void",
                description: "Called when dropdown open state changes.",
            },
            className: {
                type: "string",
                description: "Root wrapper classes.",
            },
            rounded: {
                type: roundedType,
                defaultValue: '"rounded-2xl"',
                description: "Border radius classes.",
                directives: [roundVariantsDirective],
            },
        },
    },
    compound: [
        {
            name: "Trigger",
            description:
                "Clickable and focusable trigger wrapper based on Dropdown.Anchor.",
            props: {
                children: {
                    type: "ReactNode",
                    description: "Trigger content.",
                },
                className: {
                    type: "string",
                    description: "Trigger wrapper classes.",
                },
                rounded: {
                    type: roundedType,
                    defaultValue: '"rounded-2xl"',
                    description: "Border radius classes.",
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Tags",
            description: "Selected value tags. Must be placed inside Trigger.",
            props: {
                classNames: {
                    type: "AutoFillSelectorTagsClassNames",
                    description: "Classes for selected tag slots.",
                    slots: {
                        tagClassName: {
                            type: "string",
                            description: "Selected tag classes.",
                        },
                        tagRemoveClassName: {
                            type: "string",
                            description: "Tag remove button classes.",
                        },
                    },
                },
                className: {
                    type: "string",
                    description: "Tags wrapper classes.",
                },
                rounded: {
                    type: roundedType,
                    defaultValue: '"rounded-full"',
                    description: "Border radius classes.",
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Input",
            description: "Search input. Must be placed inside Trigger.",
            props: {
                placeholder: {
                    type: "string",
                    defaultValue: '"Enter to search"',
                    description: "Placeholder when no values are selected.",
                },
                className: {
                    type: "string",
                    description: "Input classes.",
                },
                rounded: {
                    type: roundedType,
                    defaultValue: '"rounded-full"',
                    description: "Border radius classes.",
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Menu",
            description: "Dropdown menu with scroll area.",
            props: {
                className: {
                    type: "string",
                    description: "Dropdown menu classes.",
                },
                rounded: {
                    type: roundedType,
                    defaultValue: '"rounded-4xl"',
                    description: "Border radius classes.",
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Options",
            description: "Filtered option list. Must be placed inside Menu.",
            props: {
                classNames: {
                    type: "AutoFillSelectorOptionsClassNames",
                    description: "Classes for option slots.",
                    slots: {
                        optionClassName: {
                            type: "string",
                            description: "Option button classes.",
                        },
                        optionLabelClassName: {
                            type: "string",
                            description: "Option label classes.",
                        },
                        optionDescriptionClassName: {
                            type: "string",
                            description: "Option description classes.",
                        },
                        optionIconClassName: {
                            type: "string",
                            description: "Option icon and check classes.",
                        },
                    },
                },
                className: {
                    type: "string",
                    description: "Options wrapper classes.",
                },
                rounded: {
                    type: roundedType,
                    defaultValue: '"rounded-full"',
                    description: "Border radius classes.",
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Empty",
            description:
                "Empty state shown when no options match. Must be placed inside Menu.",
            props: {
                children: {
                    type: "ReactNode",
                    defaultValue: '"Nothing found"',
                    description: "Empty state content.",
                },
                className: {
                    type: "string",
                    description: "Empty state classes.",
                },
            },
        },
    ],
};
