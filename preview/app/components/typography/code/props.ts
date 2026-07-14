import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Code",
        description: "Server-compatible semantic Code typography component.",
        props: {
            block: {
                type: "boolean",
                description:
                    "Renders a scrollable pre/code block instead of inline code.",
                defaultValue: "false",
            },
            className: {
                type: "string",
                description: "Additional code classes.",
            },
            children: {
                type: "ReactNode",
                description: "Code content.",
            },
        },
    },
    compound: [],
};
