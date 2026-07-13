import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Card",
        description:
            "Semantic container composed from header, content, and footer sections.",
        props: {
            rounded: {
                type: "RoundVariants",
                description: "Root border radius.",
                defaultValue: '"rounded-lg"',
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
            name: "Header",
            description: "Header section accepting native element attributes.",
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
            name: "Title",
            description: "Title section accepting native element attributes.",
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
            name: "Subtitle",
            description:
                "Subtitle section accepting native element attributes.",
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
            description: "Content section accepting native element attributes.",
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
            name: "Footer",
            description: "Footer section accepting native element attributes.",
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
