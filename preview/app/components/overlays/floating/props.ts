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
            fixOnClick: {
                type: "boolean",
                defaultValue: "true",
                description:
                    "Pins the panel open on trigger click until the trigger is clicked again, an outside click, or Escape.",
            },
            className: { type: "string", description: "Root wrapper classes." },
        },
    },
    compound: [
        {
            name: "Trigger",
            description:
                "Hover, focus and click trigger wrapper accepting native div attributes.",
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
            description: "Panel revealed by trigger hover, focus-within, or a pinning click.",
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
