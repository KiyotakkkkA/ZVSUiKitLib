import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Link",
        description: "Server-compatible semantic Link typography component.",
        props: {
            href: {
                type: "string",
                description: "Link destination.",
            },
            className: {
                type: "string",
                description: "Additional link classes.",
            },
            children: {
                type: "ReactNode",
                description: "Link content.",
            },
        },
    },
    compound: [],
};
