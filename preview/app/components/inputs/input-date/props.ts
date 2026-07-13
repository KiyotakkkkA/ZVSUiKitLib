import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputDate",
        description: "Public InputDate component API.",
        props: {
            value: {
                type: "Date / null",
                description: "Controlled selected date.",
            },
            defaultValue: {
                type: "Date / null",
                description: "Initial value for uncontrolled mode.",
                defaultValue: "null",
            },
            onChange: {
                type: "(date: Date / null) => void",
                description: "Date change callback.",
            },
            placeholder: {
                type: "string",
                description: "Trigger text for empty value.",
                defaultValue: '"Выберите дату"',
            },
            locale: {
                type: "string",
                description: "Date label locale.",
                defaultValue: '"ru-RU"',
            },
            weekStartsOn: {
                type: 'CalendarProps["weekStartsOn"]',
                description: "Week start day for nested calendar.",
                defaultValue: "1",
            },
            minDate: {
                type: "Date",
                description: "Minimum available date.",
            },
            maxDate: {
                type: "Date",
                description: "Maximum available date.",
            },
            disabledDates: {
                type: 'CalendarProps["disabledDates"]',
                description: "Disabled dates configuration.",
            },
            allowDeselect: {
                type: "boolean",
                description: "Pass-through to calendar.",
            },
            showOutsideDays: {
                type: "boolean",
                description: "Pass-through to calendar.",
            },
            disabled: {
                type: "boolean",
                description: "Disable trigger and popup.",
                defaultValue: "false",
            },
            closeOnSelect: {
                type: "boolean",
                description: "Close popup after selecting date.",
                defaultValue: "false",
            },
            clearable: {
                type: "boolean",
                description: "Show clear button when date is selected.",
                defaultValue: "false",
            },
            menuPlacement: {
                type: "PositionAnchor",
                description: "Popup placement.",
                defaultValue: '"bottom-left"',
            },
            menuWidth: {
                type: "number",
                description: "Popup width.",
                defaultValue: "300",
            },
            className: {
                type: "string",
                description: "Root classes.",
            },
            classNames: {
                type: "InputDateClassNames",
                description: "Classes for internal slots.",
                slots: {
                    trigger: {
                        type: "string",
                        description: "Trigger button classes.",
                    },
                    menu: {
                        type: "string",
                        description: "Popup container classes.",
                    },
                    calendar: {
                        type: "string",
                        description: "Nested calendar classes.",
                    },
                    value: {
                        type: "string",
                        description: "Trigger value label classes.",
                    },
                    controls: {
                        type: "string",
                        description: "Right controls wrapper classes.",
                    },
                    clearButton: {
                        type: "string",
                        description: "Clear button classes.",
                    },
                },
            },
            formatLabel: {
                type: "(date: Date) => string",
                description: "Custom trigger label formatting.",
            },
        },
    },
    compound: [],
};
