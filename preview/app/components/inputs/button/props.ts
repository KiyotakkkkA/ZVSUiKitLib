import type { ComponentAPIDoc } from "../../../../_shared/types";
import {
    colorVariantFullDirective,
    roundVariantsDirective,
} from "../../../../_shared/directives";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Button",
        description: "Public Button component API.",
        props: {
            children: {
                type: "ReactNode",
                description: "Button content.",
            },
            label: {
                type: "string",
                description: "Value for aria-label.",
            },
            loading: {
                type: "boolean",
                description: "Shows loading state and disables the button.",
                defaultValue: "false",
            },
            loadingText: {
                type: "string",
                description:
                    "Text shown while loading. Without it, the centered Loader is shown.",
            },
            variant: {
                type: "ButtonVariants",
                description:
                    "Visual style. Empty string disables built-in variant style.",
                defaultValue: '"secondary"',
                directives: [colorVariantFullDirective],
            },
            rounded: {
                type: "RoundVariants",
                description: "Border radius shape.",
                defaultValue: '"rounded-full"',
                directives: [roundVariantsDirective],
            },
            className: {
                type: "string",
                description: "Extra classes.",
            },
            classNames: {
                type: "ButtonClassNames",
                description: "Classes for loading-state slots.",
                slots: {
                    loaderIcon: {
                        type: "string",
                        description: "Classes applied to the centered loading spinner.",
                    },
                    loaderText: {
                        type: "string",
                        description: "Classes applied to loadingText content.",
                    },
                },
            },
        },
    },
    compound: [],
};
