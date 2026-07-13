import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Table",
        description:
            "Generic table with renderable columns and cycling sort modes.",
        props: {
            data: {
                type: "T[]",
                description: "Row data.",
            },
            columns: {
                type: "TableColumn<T>[]",
                description: "Column definitions and sorting modes.",
            },
            rowKey: {
                type: "keyof T | ((item, index) => string | number)",
                description: "Stable row key resolver.",
            },
            classNames: {
                type: "TableClassNames<T>",
                description: "Classes for table slots.",
                slots: {
                    root: {
                        type: "string",
                        description: "Table classes.",
                    },
                    header: {
                        type: "string",
                        description: "Header group classes.",
                    },
                    headerRow: {
                        type: "string",
                        description: "Header row classes.",
                    },
                    headerCell: {
                        type: "string",
                        description: "Header cell classes.",
                    },
                    sortButton: {
                        type: "string",
                        description: "Sort control classes.",
                    },
                    body: {
                        type: "string",
                        description: "Body classes.",
                    },
                    row: {
                        type: "string",
                        description: "Static row classes.",
                    },
                    rowDynamic: {
                        type: "TableClassNameResolver<T>",
                        description: "Per-row classes.",
                    },
                    cell: {
                        type: "string",
                        description: "Body cell classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
