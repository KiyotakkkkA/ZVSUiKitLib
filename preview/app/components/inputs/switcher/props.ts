import { roundVariantsDirective } from "@/_shared/directives";
import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Switcher",
        description: "Public Switcher component API.",
        props: {
            value: {
                type: "string",
                description: "Active value.",
            },
            options: {
                type: "{ value: string; label: string }[]",
                description: "Segments list.",
            },
            onChange: {
                type: "(value: string) => void",
                description: "Called on selection change.",
            },
            rounded: {
                type: "RoundVariants",
                description: "Border radius shape.",
                defaultValue: '"rounded-full"',
                directives: [roundVariantsDirective],
            },
            className: {
                type: "string",
                description: "Extra wrapper classes.",
            },
            classNames: {
                type: "SwitcherClassNames",
                description: "Classes for internal slots.",
                slots: {
                    tab: {
                        type: "string",
                        description: "Segment button classes",
                    },
                },
            },
        },
    },
    compound: [],
};
