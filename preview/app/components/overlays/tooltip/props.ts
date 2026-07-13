import type { ComponentAPIDoc } from "../../../../_shared/types";
import {
    positionAnchorDirective,
    roundVariantsDirective,
} from "../../../../_shared/directives";
export const tooltipProps: ComponentAPIDoc = {
    root: {
        name: "Tooltip",
        description:
            "Small hover and focus label attached to one wrapped trigger.",
        props: {
            children: {
                type: "ReactNode",
                description: "Wrapped trigger element.",
            },
            label: { type: "ReactNode", description: "Tooltip content." },
            placement: {
                type: "PositionAnchor",
                defaultValue: '"top-center"',
                description: "Label and arrow position.",
                directives: [positionAnchorDirective],
            },
            rounded: {
                type: "RoundVariants",
                defaultValue: '"rounded-lg"',
                description: "Tooltip border radius.",
                directives: [roundVariantsDirective],
            },
            className: {
                type: "string",
                description: "Tooltip panel classes.",
            },
        },
    },
    compound: [],
};
