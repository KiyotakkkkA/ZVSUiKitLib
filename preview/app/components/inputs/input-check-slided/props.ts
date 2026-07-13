import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputCheckSlided",
        description: "Public InputCheckSlided component API.",
        props: {
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
            classNames: {
                type: "object",
                description: "Classes for internal slots.",
                slots: {
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
