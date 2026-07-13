import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputRadio",
        description: "Public InputRadio component API.",
        props: {
            checked: {
                type: "boolean",
                description: "Current selected state.",
            },
            onChange: {
                type: "(checked: boolean) => void",
                description: "Triggered on selection.",
            },
            modelValue: {
                type: "string",
                description: "Model key when used in InputRadioGroup.",
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
                type: "InputRadioClassNames",
                description: "Classes for internal slots.",
                slots: {
                    input: {
                        type: "string",
                        description: "Native input classes.",
                    },
                    indicator: {
                        type: "string",
                        description: "Radio frame classes.",
                    },
                    dot: {
                        type: "string",
                        description: "Selected dot classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
