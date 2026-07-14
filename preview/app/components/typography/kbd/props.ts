import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Kbd",
        description: "Server-compatible semantic Kbd typography component.",
        props: {
            className: {
                type: "string",
                description: "Additional kbd classes.",
            },
            children: {
                type: "ReactNode",
                description: "Kbd content.",
            },
        },
    },
    compound: [],
};
