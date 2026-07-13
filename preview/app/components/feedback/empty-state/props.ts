import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "EmptyState",
        description: "Public EmptyState component API.",
        props: {
            icon: {
                type: "ReactNode",
                description: "Optional icon area.",
            },
            title: {
                type: "ReactNode",
                description: "Main empty state title.",
            },
            description: {
                type: "ReactNode",
                description: "Supporting text.",
            },
            action: {
                type: "ReactNode",
                description: "Optional action control.",
            },
            className: {
                type: "string",
                description: "Root classes.",
            },
            classNames: {
                type: "EmptyStateClassNames",
                description: "Classes for internal slots.",
                slots: {
                    icon: {
                        type: "string",
                        description: "Icon wrapper classes.",
                    },
                    title: {
                        type: "string",
                        description: "Title classes.",
                    },
                    description: {
                        type: "string",
                        description: "Description classes.",
                    },
                    action: {
                        type: "string",
                        description: "Action wrapper classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
