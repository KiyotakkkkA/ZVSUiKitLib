import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputColor",
        description: "Public InputColor component API.",
        props: {
            value: {
                type: "string",
                description: "Controlled color in #RRGGBB or #RRGGBBAA format.",
            },
            defaultValue: {
                type: "string",
                description: "Initial color in uncontrolled mode.",
                defaultValue: '"#6366F1"',
            },
            onChange: {
                type: "(value: string) => void",
                description:
                    "Called with #RRGGBB, or #RRGGBBAA when translucent.",
            },
            label: {
                type: "ReactNode",
                description: "Label rendered above the trigger.",
            },
            showValue: {
                type: "boolean",
                description:
                    "Shows the current formatted color in the trigger.",
                defaultValue: "true",
            },
            size: {
                type: "InputColorSize",
                description: "Trigger size.",
                defaultValue: '"md"',
            },
            palettePresets: {
                type: "string[] / null",
                description: "Optional quick-select palette inside the popup.",
                defaultValue: "null",
            },
            valueFormatter: {
                type: "(value: string) => ReactNode",
                description: "Formats the value displayed in the trigger.",
            },
            disabled: {
                type: "boolean",
                description:
                    "Disables the trigger and all picker interactions.",
                defaultValue: "false",
            },
            readOnly: {
                type: "boolean",
                description: "Prevents changes and opening the picker.",
                defaultValue: "false",
            },
            className: {
                type: "string",
                description: "Root wrapper classes.",
            },
            classNames: {
                type: "InputColorClassNames",
                description: "Classes for internal slots.",
                slots: {
                    label: {
                        type: "string",
                        description: "Label classes.",
                    },
                    control: {
                        type: "string",
                        description: "Picker trigger classes.",
                    },
                    picker: {
                        type: "string",
                        description: "Trigger color-preview container classes.",
                    },
                    preview: {
                        type: "string",
                        description: "Trigger solid color preview classes.",
                    },
                    input: {
                        type: "string",
                        description: "Hidden form input classes.",
                    },
                    value: {
                        type: "string",
                        description: "Trigger value classes.",
                    },
                    panel: {
                        type: "string",
                        description: "Popup panel classes.",
                    },
                    colorArea: {
                        type: "string",
                        description: "Saturation/brightness area classes.",
                    },
                    colorAreaThumb: {
                        type: "string",
                        description: "Saturation/brightness pointer classes.",
                    },
                    hueTrack: {
                        type: "string",
                        description: "Hue slider track classes.",
                    },
                    hueThumb: {
                        type: "string",
                        description: "Hue slider pointer classes.",
                    },
                    alphaTrack: {
                        type: "string",
                        description: "Alpha slider track classes.",
                    },
                    alphaThumb: {
                        type: "string",
                        description: "Alpha slider pointer classes.",
                    },
                    eyeDropper: {
                        type: "string",
                        description: "Screen eyedropper button classes.",
                    },
                    hexInput: {
                        type: "string",
                        description: "Editable HEX input classes.",
                    },
                    palette: {
                        type: "string",
                        description: "Preset palette section classes.",
                    },
                    preset: {
                        type: "string",
                        description: "Individual preset button classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
