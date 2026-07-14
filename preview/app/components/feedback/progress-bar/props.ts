import { colorVariantsBaseDirective } from "@/_shared/directives";
import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "ProgressBar",
        description: "Public ProgressBar component API.",
        props: {
            variant: {
                type: "ColorVariantsBase",
                description: "Color variant of the progress bar.",
                defaultValue: "primary",
                directives: [colorVariantsBaseDirective],
            },
            value: {
                type: "number",
                description: "Current value. Clamped between 0 and max.",
            },
            max: {
                type: "number",
                description: "Maximum value.",
                defaultValue: "100",
            },
            label: {
                type: "string",
                description: "Optional label above the bar.",
            },
            showValue: {
                type: "boolean",
                description: "Shows calculated percentage.",
                defaultValue: "false",
            },
            className: {
                type: "string",
                description: "Root classes.",
            },
            classNames: {
                type: "ProgressBarClassNames",
                description: "Classes for internal slots.",
                slots: {
                    header: {
                        type: "string",
                        description: "Label/value row classes.",
                    },
                    label: {
                        type: "string",
                        description: "Label text classes.",
                    },
                    value: {
                        type: "string",
                        description: "Percentage text classes.",
                    },
                    track: {
                        type: "string",
                        description: "Progress track classes.",
                    },
                    indicator: {
                        type: "string",
                        description: "Filled indicator classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
