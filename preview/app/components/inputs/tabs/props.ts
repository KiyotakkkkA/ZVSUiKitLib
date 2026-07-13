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
                type: "TabsClassNames",
                description: "Classes for the tab list and tab states.",
                slots: {
                    list: { type: "string", description: "Tablist wrapper classes." },
                    tab: { type: "string", description: "Classes applied to every tab button." },
                    activeTab: { type: "string", description: "Additional classes applied to the active tab." },
                },
            },
            tabProps: {
                type: "button attributes",
                description: "Props shared by every tab.",
            },
        },
    },
    compound: [],
};
