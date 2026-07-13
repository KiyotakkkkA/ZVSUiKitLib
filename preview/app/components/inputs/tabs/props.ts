import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Tabs",
        description: "Public Tabs component API.",
        props: {
            value: {
                type: "string",
                description: "Active tab value.",
            },
            onChange: {
                type: "(value) => void",
                description: "Called when a tab is chosen.",
            },
            options: {
                type: "TabOption[]",
                description: "Tab items.",
            },
            className: {
                type: "string",
                description: "Wrapper classes.",
            },
            classNames: {
                type: "object",
                description: "Internal slot classes.",
            },
            tabProps: {
                type: "button attributes",
                description: "Props shared by every tab.",
            },
        },
    },
    compound: [],
};
