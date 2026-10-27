import { roundVariantsDirective } from "@/_shared/directives";
import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Switcher.Root",
        description:
            "Radio group that stores the selected option value and shares the shape with its options.",
        props: {
            model: {
                type: "string",
                description: "Value of the currently selected option.",
            },
            onModelChange: {
                type: "(value: string) => void",
                description: "Called with the value of the picked option.",
            },
            label: {
                type: "string",
                description: "Accessible name of the radio group.",
                defaultValue: "locale switcher.label",
            },
            rounded: {
                type: "RoundVariants",
                description: "Border radius of the root and every option.",
                defaultValue: '"rounded-lg"',
                directives: [roundVariantsDirective],
            },
            className: {
                type: "string",
                description: "Extra wrapper classes.",
            },
            children: {
                type: "ReactNode",
                description: "Switcher.Option elements.",
            },
        },
    },
    compound: [
        {
            name: "Option",
            description: "One selectable segment.",
            props: {
                value: {
                    type: "string",
                    description:
                        "Value written to the root model when this option is picked.",
                },
                disabled: {
                    type: "boolean",
                    description: "Disables picking this option.",
                    defaultValue: "false",
                },
                "aria-label": {
                    type: "string",
                    description: "Accessible name for icon-only options.",
                },
                className: {
                    type: "string",
                    description: "Option button classes.",
                },
                children: {
                    type: "ReactNode",
                    description: "Option content: text, icons, badges.",
                },
            },
        },
    ],
};
