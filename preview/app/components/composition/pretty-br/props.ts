import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "PrettyBR",
        description: "Decorative divider with optional icon and label.",
        props: {
            icon: {
                type: "string",
                description: "Iconify icon name.",
                defaultValue: '"mdi:star-four-points"',
            },
            label: {
                type: "string",
                description: "Divider label.",
            },
            size: {
                type: "number",
                description: "Icon size.",
                defaultValue: "18",
            },
            className: {
                type: "string",
                description: "Additional classes.",
            },
            classNames: {
                type: "PrettyBRClassNames",
                description: "Classes for internal slots.",
                slots: {
                    divider: {
                        type: "string",
                        description: "Divider line classes.",
                    },
                    icon: {
                        type: "string",
                        description: "Icon classes.",
                    },
                    label: {
                        type: "string",
                        description: "Label classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
