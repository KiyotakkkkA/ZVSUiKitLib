import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputBig",
        description: "Public InputBig component API.",
        props: {
            label: {
                type: "ReactNode",
                description: "Accessible label displayed above the textarea.",
            },
            description: {
                type: "ReactNode",
                description: "Supporting text displayed below the textarea.",
            },
            error: {
                type: "ReactNode",
                description: "Error message and invalid visual state.",
            },
            showCount: {
                type: "boolean",
                description: "Shows the current character count.",
                defaultValue: "false",
            },
            autoResize: {
                type: "boolean",
                description: "Grows with content until maxRows is reached.",
                defaultValue: "false",
            },
            minRows: {
                type: "number",
                description: "Initial/minimum row count.",
                defaultValue: "3",
            },
            maxRows: {
                type: "number",
                description: "Maximum row count in auto-resize mode.",
                defaultValue: "10",
            },
            className: {
                type: "string",
                description: "Extra textarea classes.",
            },
            classNames: {
                type: "InputBigClassNames",
                description: "Classes for textarea layout and supporting content slots.",
                slots: {
                    root: { type: "string", description: "Root field wrapper classes." },
                    label: { type: "string", description: "Label classes." },
                    textarea: { type: "string", description: "Native textarea classes." },
                    footer: { type: "string", description: "Message and counter row classes." },
                    message: { type: "string", description: "Description or error message classes." },
                    counter: { type: "string", description: "Character counter classes." },
                },
            },
        },
    },
    compound: [],
};
