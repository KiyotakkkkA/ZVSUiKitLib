import type { ComponentAPIDoc } from "../../../../_shared/types";
import {
    positionAnchorDirective,
    roundVariantsDirective,
} from "../../../../_shared/directives";
export const floatingProps: ComponentAPIDoc = {
    root: {
        name: "Floating",
        description:
            "Positions a compound hover and focus panel around its trigger.",
        props: {
            children: {
                type: "ReactNode",
                description: "Trigger and content parts.",
            },
            anchor: {
                type: "PositionAnchor",
                defaultValue: '"top-right"',
                description: "Panel position relative to the trigger.",
                directives: [positionAnchorDirective],
            },
            className: { type: "string", description: "Root wrapper classes." },
        },
    },
    compound: [
        {
            name: "Trigger",
            description:
                "Hover and focus trigger wrapper accepting native div attributes.",
            props: {
                children: {
                    type: "ReactNode",
                    description: "Trigger content.",
                },
                className: {
                    type: "string",
                    description: "Trigger wrapper classes.",
                },
            },
        },
        {
            name: "Content",
            description: "Panel revealed by trigger hover or focus-within.",
            props: {
                children: { type: "ReactNode", description: "Panel content." },
                className: { type: "string", description: "Panel classes." },
                rounded: {
                    type: "RoundVariants",
                    defaultValue: '"rounded-lg"',
                    description: "Panel border radius.",
                    directives: [roundVariantsDirective],
                },
            },
        },
    ],
};
