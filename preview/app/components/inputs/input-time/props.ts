import type { ComponentAPIDoc } from "../../../../_shared/types";
import { positionAnchorDirective } from "../../../../_shared/directives";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputTime",
        description: "Public InputTime component API.",
        props: {
            value: {
                type: "string / null",
                description: 'Controlled time in the "HH:mm" format.',
            },
            defaultValue: {
                type: "string / null",
                description: "Initial value for uncontrolled mode.",
                defaultValue: "null",
            },
            onChange: {
                type: "(time: string / null) => void",
                description: 'Receives the new "HH:mm" time, or null after clearing.',
            },
            placeholder: {
                type: "string",
                description: "Trigger text for empty value.",
                defaultValue: '"Выберите время"',
            },
            minuteStep: {
                type: "number",
                description: "Minutes interval offered in the minutes column.",
                defaultValue: "1",
            },
            disabled: {
                type: "boolean",
                description: "Disable trigger and popup.",
                defaultValue: "false",
            },
            closeOnSelect: {
                type: "boolean",
                description: "Close popup after a minute is picked.",
                defaultValue: "false",
            },
            clearable: {
                type: "boolean",
                description: "Show clear button when time is selected.",
                defaultValue: "false",
            },
            menuPlacement: {
                type: "PositionAnchor",
                description: "Popup placement.",
                defaultValue: '"bottom-left"',
                directives: [positionAnchorDirective],
            },
            menuWidth: {
                type: "number",
                description: "Popup width.",
                defaultValue: "200",
            },
            className: {
                type: "string",
                description: "Root classes.",
            },
            classNames: {
                type: "InputTimeClassNames",
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
                    columns: {
                        type: "string",
                        description: "Hours and minutes columns classes.",
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
        },
    },
    compound: [],
};
