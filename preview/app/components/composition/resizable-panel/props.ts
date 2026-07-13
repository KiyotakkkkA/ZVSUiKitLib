import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "ResizablePanel",
        description:
            "Horizontal layout owning a constrained resizable sidebar width.",
        props: {
            children: {
                type: "ReactNode",
                description: "Rendered content.",
            },
            defaultSize: {
                type: "number",
                description: "Initial sidebar width.",
                defaultValue: "280",
            },
            minSize: {
                type: "number",
                description: "Minimum sidebar width.",
                defaultValue: "180",
            },
            maxSize: {
                type: "number",
                description: "Maximum sidebar width.",
                defaultValue: "520",
            },
            className: {
                type: "string",
                description: "Additional classes.",
            },
        },
    },
    compound: [
        {
            name: "Sidebar",
            description: "Resizable aside content.",
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
            name: "Handle",
            description: "Pointer and keyboard resize control.",
            props: {
                className: {
                    type: "string",
                    description: "Additional classes.",
                },
            },
        },
        {
            name: "Content",
            description: "Flexible main content.",
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
