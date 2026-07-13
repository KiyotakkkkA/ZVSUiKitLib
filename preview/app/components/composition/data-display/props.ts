import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "DataDisplay",
        description: "Structured list of labeled values.",
        props: {
            bordered: {
                type: "boolean",
                description: "Shows the outer border.",
                defaultValue: "true",
            },
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
            name: "Item",
            description: "One labeled data row.",
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
            name: "ItemTopTitle",
            description: "Primary title in the top row.",
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
            name: "ItemTopSubTitle",
            description: "Supporting title in the top row.",
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
            name: "ItemTopBadge",
            description: "Badge area in the top row.",
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
            name: "ItemContentTitle",
            description: "Primary content title.",
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
            name: "ItemContentDescription",
            description: "Supporting content description.",
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
            name: "ItemContentIcon",
            description: "Icon area in the content row.",
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
            name: "ItemContentBadge",
            description: "Badge area in the content row.",
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
