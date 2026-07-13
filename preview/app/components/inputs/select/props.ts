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
                description: "Select.Trigger and Select.Menu.",
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
                type: "{ search?: string }",
                description: "Search input classes.",
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
                },
            },
        },
        {
            name: "Menu",
            description: "Public Select.Menu compound part.",
            props: {
                children: {
                    type: "ReactNode",
                    description: "Mapped Select.Options.",
                },
                className: {
                    type: "string",
                    description: "Popup classes.",
                },
                rounded: {
                    type: "RoundVariants",
                    description: "Popup border radius.",
                    defaultValue: '"rounded-4xl"',
                },
            },
        },
        {
            name: "Option",
            description: "Public Select.Option compound part.",
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
                },
            },
        },
    ],
};
