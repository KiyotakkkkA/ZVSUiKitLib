import type { ComponentAPIDoc } from "../../../../_shared/types";
import { colorVariantsBaseDirective } from "../../../../_shared/directives";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputCheckSlided",
        description: "Public InputCheckSlided component API.",
        props: {
            variant: {
                type: "ColorVariantsBase",
                description:
                    "Color scheme for the checked track and thumb. Unchecked switches use neutral colors.",
                defaultValue: '"secondary"',
                directives: [colorVariantsBaseDirective],
            },
            checked: {
                type: "boolean",
                description: "Current value.",
            },
            onChange: {
                type: "(checked: boolean) => void",
                description: "Triggered on toggle.",
            },
            disabled: {
                type: "boolean",
                description: "Disables interaction.",
                defaultValue: "false",
            },
            type: {
                type: '"slided"',
                description:
                    "Reserved prop (currently does not change visuals).",
            },
            className: {
                type: "string",
                description: "Extra classes.",
            },
            children: {
                type: "ReactNode",
                description: "Switch label content.",
            },
            ref: {
                type: "Ref<HTMLInputElement>",
                description: "Receives the native checkbox input node.",
            },
            classNames: {
                type: "InputCheckSlidedClassNames",
                description: "Classes for internal slots.",
                slots: {
                    input: {
                        type: "string",
                        description: "Native checkbox input classes.",
                    },
                    control: {
                        type: "string",
                        description: "Switch track classes; override variant styling.",
                    },
                    content: {
                        type: "string",
                        description: "Switch label classes.",
                    },
                    thumb: {
                        type: "string",
                        description: "Switch thumb classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
