import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputSlider",
        description: "Public InputSlider component API.",
        props: {
            value: {
                type: "number",
                description: "Controlled slider value.",
            },
            onChange: {
                type: "(value: number) => void",
                description: "Called when the value changes.",
            },
            min: {
                type: "number",
                description: "Minimum value.",
                defaultValue: "0",
            },
            max: {
                type: "number",
                description: "Maximum value.",
                defaultValue: "100",
            },
            step: {
                type: "number",
                description: "Step increment.",
                defaultValue: "1",
            },
            disabled: {
                type: "boolean",
                description: "Disables interaction.",
                defaultValue: "false",
            },
            showValue: {
                type: "boolean",
                description: "Shows the formatted value label.",
                defaultValue: "false",
            },
            valueFormatter: {
                type: "(value: number) => string",
                description: "Formats the visible value label.",
            },
            className: {
                type: "string",
                description: "Root wrapper classes.",
            },
            classNames: {
                type: "object",
                description: "Classes for internal slots.",
                slots: {
                    track: {
                        type: "string",
                        description: "Track wrapper classes.",
                    },
                    fill: {
                        type: "string",
                        description: "Filled track classes.",
                    },
                    thumb: {
                        type: "string",
                        description: "Thumb indicator classes.",
                    },
                    input: {
                        type: "string",
                        description: "Hidden native range classes.",
                    },
                    value: {
                        type: "string",
                        description: "Visible value label classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
