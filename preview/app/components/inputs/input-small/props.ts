import { roundVariantsDirective } from "@/_shared/directives";
import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputSmall",
        description: "Public InputSmall component API.",
        props: {
            preset: {
                type: "InputPreset",
                description: "Coordinated behavior preset.",
            },
            type: {
                type: "HTML input type",
                description:
                    "Explicit native type; overrides non-password presets.",
                defaultValue: "preset",
            },
            onClear: {
                type: "() => void",
                description: "Called when the search preset is cleared.",
            },
            rounded: {
                type: "RoundVariants",
                description: "Border radius shape.",
                defaultValue: '"rounded-full"',
                directives: [roundVariantsDirective],
            },
            className: {
                type: "string",
                description: "Input element classes.",
            },
            classNames: {
                type: "InputSmallClassNames",
                description: "Classes for internal slots.",
                slots: {
                    wrapper: {
                        type: "string",
                        description: "Outer wrapper classes.",
                    },
                    icon: {
                        type: "string",
                        description: "Every preset icon.",
                    },
                    leadingIcon: {
                        type: "string",
                        description: "Leading preset icon.",
                    },
                    trailingButton: {
                        type: "string",
                        description:
                            "Password visibility and search clear buttons.",
                    },
                },
            },
        },
    },
    compound: [],
};
