import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Accordion",
        description: "Owns the expanded state for a collapsible section.",
        props: {
            defaultOpen: {
                type: "boolean",
                description: "Initial expanded state.",
                defaultValue: "false",
            },
            className: {
                type: "string",
                description: "Additional classes.",
            },
            children: {
                type: "ReactNode",
                description: "Rendered content.",
            },
        },
    },
    compound: [
        {
            name: "Summary",
            description: "Button that toggles the section.",
            props: {
                className: {
                    type: "string",
                    description: "Additional classes.",
                },
                children: {
                    type: "ReactNode",
                    description: "Rendered content.",
                },
            },
        },
        {
            name: "Content",
            description: "Animated expandable content.",
            props: {
                className: {
                    type: "string",
                    description: "Additional classes.",
                },
                children: {
                    type: "ReactNode",
                    description: "Rendered content.",
                },
            },
        },
    ],
};
