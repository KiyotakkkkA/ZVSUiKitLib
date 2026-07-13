import type { ComponentAPIDoc } from "../../../../_shared/types";
import { enumValuesDirective } from "../../../../_shared/directives";
const placementDirective = enumValuesDirective({
    title: "SlidedPanelPlacement",
    description: "Viewport edge used by the drawer.",
    values: ["top", "right", "bottom", "left"],
});
const section = (description: string) => ({
    description,
    props: {
        className: {
            type: "string",
            description:
                "Additional classes; native element attributes are supported.",
        },
        children: { type: "ReactNode", description: "Rendered content." },
    },
});
export const slidedPanelProps: ComponentAPIDoc = {
    root: {
        name: "SlidedPanel",
        description:
            "Portal-based edge drawer with overlay and Escape-key dismissal.",
        props: {
            open: {
                type: "boolean",
                description: "Controls drawer visibility.",
            },
            onClose: {
                type: "() => void",
                description: "Handles all dismissal paths.",
            },
            closeOnOverlayClick: {
                type: "boolean",
                defaultValue: "true",
                description: "Closes the drawer when its overlay is activated.",
            },
            panelPlacement: {
                type: "SlidedPanelPlacement",
                defaultValue: '"right"',
                description: "Edge from which the panel enters.",
                directives: [placementDirective],
            },
            className: {
                type: "string",
                description:
                    "Panel classes, including width or height overrides.",
            },
            children: { type: "ReactNode", description: "Panel sections." },
        },
    },
    compound: [
        { name: "Header", ...section("Header with a built-in close button.") },
        { name: "Title", ...section("Single-line panel title.") },
        { name: "Subtitle", ...section("Single-line supporting title text.") },
        { name: "Content", ...section("Flexible main panel content.") },
        { name: "Footer", ...section("Footer area for panel actions.") },
    ],
};
