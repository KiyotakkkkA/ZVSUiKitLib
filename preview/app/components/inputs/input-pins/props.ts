import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputPins",
        description: "Public InputPins component API.",
        props: {
            value: {
                type: "string",
                description: "Current PIN value.",
            },
            onChange: {
                type: "(value) => void",
                description:
                    "Called with the positional value; empty preceding cells are spaces.",
            },
            length: {
                type: "number",
                description: "Number of input cells.",
                defaultValue: "4",
            },
            label: {
                type: "string",
                description: "Optional label under the cells.",
            },
            disabled: {
                type: "boolean",
                description: "Disables all cells.",
                defaultValue: "false",
            },
            mask: {
                type: "boolean",
                description: "Uses password inputs.",
                defaultValue: "false",
            },
            className: {
                type: "string",
                description: "Wrapper classes.",
            },
            classNames: {
                type: "InputPinsClassNames",
                description: "Classes for the segmented input slots.",
                slots: {
                    group: {
                        type: "string",
                        description: "Wrapper around all PIN cells.",
                    },
                    input: {
                        type: "string",
                        description:
                            "Classes applied to every native input cell.",
                    },
                },
            },
        },
    },
    compound: [],
};
