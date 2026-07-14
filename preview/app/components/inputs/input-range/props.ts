import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputRange",
        description: "Public InputRange component API.",
        props: {
            value: {
                type: "[number, number]",
                description: "Controlled lower and upper boundaries.",
            },
            onChange: {
                type: "(value: [number, number]) => void",
                description: "Called when either boundary changes.",
            },
            min: {
                type: "number",
                description: "Minimum allowed value.",
                defaultValue: "0",
            },
            max: {
                type: "number",
                description: "Maximum allowed value.",
                defaultValue: "100",
            },
            step: {
                type: "number",
                description: "Value increment.",
                defaultValue: "1",
            },
            disabled: {
                type: "boolean",
                description: "Disables both thumbs.",
                defaultValue: "false",
            },
            showThumbLabels: {
                type: "boolean",
                description: "Shows formatted values above the thumbs.",
                defaultValue: "true",
            },
            valueFormatter: {
                type: "(value: number) => ReactNode",
                description: "Formats visible boundary values.",
            },
            thumbLabels: {
                type: "[string, string]",
                description:
                    "Accessible labels for the lower and upper thumbs.",
            },
            className: { type: "string", description: "Root classes." },
            classNames: {
                type: "InputRangeClassNames",
                description: "Classes for internal slots.",
                slots: {
                    track: { type: "string", description: "Track classes." },
                    fill: {
                        type: "string",
                        description: "Selected range classes.",
                    },
                    thumb: { type: "string", description: "Thumb classes." },
                    input: {
                        type: "string",
                        description: "Native range input classes.",
                    },
                    value: {
                        type: "string",
                        description: "Visible value classes.",
                    },
                    thumbLabel: {
                        type: "string",
                        description:
                            "Accessible and visible thumb label classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
