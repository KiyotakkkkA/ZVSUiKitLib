import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Text",
        description: "Server-compatible semantic Text typography component.",
        props: {
            tone: {
                type: "TextTone",
                description: "Text color emphasis.",
                defaultValue: '"default"',
            },
            size: {
                type: "TextSize",
                description: "Font size and line height.",
                defaultValue: '"md"',
            },
            className: {
                type: "string",
                description: "Additional text classes.",
            },
            children: {
                type: "ReactNode",
                description: "Text content.",
            },
        },
    },
    compound: [],
};
