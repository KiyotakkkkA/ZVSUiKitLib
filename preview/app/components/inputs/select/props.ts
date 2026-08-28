import {
    positionAnchorDirective,
    roundVariantsDirective,
} from "@/_shared/directives";
import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Select",
        description: "Public Select component API.",
        props: {
            value: {
                type: "string",
                description: "Selected value.",
            },
            onChange: {
                type: "(value: string) => void",
                description: "Value change handler.",
            },
            options: {
                type: "SelectOption[]",
                description: "Option source for selection and search.",
            },
            children: {
                type: "ReactNode",
                description:
                    "Select.Trigger and Select.Menu. Omit entirely to render the default Trigger + Menu + Options composition.",
            },
            placeholder: {
                type: "string",
                description: "Trigger text without a selected option.",
                defaultValue: '"Выберите"',
            },
            searchable: {
                type: "boolean",
                description: "Enables search inside Select.Menu.",
                defaultValue: "false",
            },
            searchPlaceholder: {
                type: "string",
                description: "Search input placeholder.",
                defaultValue: '"Поиск..."',
            },
            emptyMessage: {
                type: "string",
                description: "Empty search result.",
                defaultValue: '"Ничего не найдено"',
            },
            disabled: {
                type: "boolean",
                description: "Disables interaction.",
                defaultValue: "false",
            },
            menuWidth: {
                type: "number / string",
                description: "Popup width; auto matches the trigger.",
                defaultValue: '"auto"',
            },
            menuPlacement: {
                type: "PositionAnchor",
                description: "Popup placement.",
                defaultValue: '"bottom-left"',
                directives: [positionAnchorDirective],
            },
            closeOnSelect: {
                type: "boolean",
                description: "Closes the popup after option selection.",
                defaultValue: "true",
            },
            className: {
                type: "string",
                description: "Root wrapper classes.",
            },
            classNames: {
                type: "SelectClassNames",
                description: "Classes for internal select slots.",
                slots: {
                    search: {
                        type: "string",
                        description: "Search input classes inside Select.Menu.",
                    },
                },
            },
        },
    },
    compound: [
        {
            name: "Trigger",
            description: "Public Select.Trigger compound part.",
            props: {
                className: {
                    type: "string",
                    description: "Trigger button classes.",
                },
                rounded: {
                    type: "RoundVariants",
                    description: "Trigger border radius.",
                    defaultValue: '"rounded-2xl"',
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Menu",
            description: "Public Select.Menu compound part.",
            props: {
                children: {
                    type: "ReactNode",
                    description: "Typically Select.Options, or manual Select.Option elements.",
                },
                className: {
                    type: "string",
                    description: "Popup classes.",
                },
                rounded: {
                    type: "RoundVariants",
                    description: "Popup border radius.",
                    defaultValue: '"rounded-4xl"',
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Options",
            description:
                "Renders every entry from the root options array, reading them from the attached Select context so they never need to be listed twice.",
            props: {
                className: {
                    type: "string",
                    description: "Classes applied to every rendered option.",
                },
                rounded: {
                    type: "RoundVariants",
                    description: "Border radius applied to every rendered option.",
                    defaultValue: '"rounded-full"',
                    directives: [roundVariantsDirective],
                },
            },
        },
        {
            name: "Option",
            description:
                "Single option, for cases that need custom per-item rendering instead of Select.Options.",
            props: {
                value: {
                    type: "string",
                    description: "Option value.",
                },
                label: {
                    type: "string",
                    description: "Visible label and searchable text.",
                },
                icon: {
                    type: "ReactNode",
                    description: "Optional leading icon.",
                },
                onClick: {
                    type: "() => void",
                    description: "Runs after the value changes.",
                },
                className: {
                    type: "string",
                    description: "Option button classes.",
                },
                rounded: {
                    type: "RoundVariants",
                    description: "Option border radius.",
                    defaultValue: '"rounded-full"',
                    directives: [roundVariantsDirective],
                },
            },
        },
    ],
};
