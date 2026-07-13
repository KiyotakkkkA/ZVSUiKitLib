import { roundVariantsDirective } from "@/_shared/directives";
import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Alert",
        description: "Public Alert component API.",
        props: {
            variant: {
                type: "ColorVariantsBase",
                description: "Alert visual style.",
                defaultValue: '"secondary"',
            },
            rounded: {
                type: "RoundVariants",
                description: "Border radius shape.",
                defaultValue: '"rounded-lg"',
                directives: [roundVariantsDirective],
            },
            title: {
                type: "ReactNode",
                description: "Alert title.",
            },
            icon: {
                type: "ReactNode",
                description: "Custom icon (replaces default icon).",
            },
            className: {
                type: "string",
                description: "Extra classes.",
            },
            classNames: {
                type: "AlertClassNames",
                description: "Classes for internal slots.",
                slots: {
                    icon: {
                        type: "string",
                        description: "Icon wrapper classes.",
                    },
                    content: {
                        type: "string",
                        description: "Content wrapper classes.",
                    },
                    title: {
                        type: "string",
                        description: "Title text classes.",
                    },
                    body: {
                        type: "string",
                        description: "Body text wrapper classes.",
                    },
                },
            },
            children: {
                type: "ReactNode",
                description: "Alert body content.",
            },
        },
    },
    compound: [],
};
