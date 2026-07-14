import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Em",
        description: "Server-compatible semantic Em typography component.",
        props: {
            className: {
                type: "string",
                description: "Additional em classes.",
            },
            children: {
                type: "ReactNode",
                description: "Em content.",
            },
        },
    },
    compound: [],
};
