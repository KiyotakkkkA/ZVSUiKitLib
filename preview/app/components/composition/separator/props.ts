import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Separator",
        description: "Visual divider accepting native div attributes.",
        props: {
            orientation: {
                type: "Orientation",
                description: "Divider direction.",
                defaultValue: '"horizontal"',
            },
            className: {
                type: "string",
                description: "Additional classes.",
            },
        },
    },
    compound: [],
};
