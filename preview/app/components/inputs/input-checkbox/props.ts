import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputCheckBox",
        description: "Public InputCheckBox component API.",
        props: {
            checked: {
                type: "boolean",
                description: "Current value.",
            },
            onChange: {
                type: "(checked: boolean) => void",
                description: "Triggered on toggle.",
            },
            modelValue: {
                type: "string",
                description: "Model key when used in InputCheckBoxGroup.",
            },
            disabled: {
                type: "boolean",
                description: "Disables interaction.",
                defaultValue: "false",
            },
            className: {
                type: "string",
                description: "Extra wrapper classes.",
            },
            classNames: {
                type: "object",
                description: "Classes for internal slots.",
                slots: {
                    input: {
                        type: "string",
                        description: "Native input classes.",
                    },
                    indicator: {
                        type: "string",
                        description: "Checkbox frame classes.",
                    },
                    mark: {
                        type: "string",
                        description: "Checked mark classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
