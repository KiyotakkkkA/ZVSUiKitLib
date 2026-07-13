import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Chart",
        description: "Recharts wrapper for line, area, and bar series.",
        props: {
            data: {
                type: "ChartDataItem[]",
                description: "Dataset.",
            },
            series: {
                type: "ChartSeries[]",
                description: "Series configuration.",
            },
            xKey: {
                type: "string",
                description: "Data key for the horizontal axis.",
            },
            height: {
                type: "number",
                description: "Chart height in pixels.",
                defaultValue: "280",
            },
            type: {
                type: "ChartType",
                description: "Chart renderer.",
                defaultValue: '"line"',
            },
            showGrid: {
                type: "boolean",
                description: "Shows grid lines.",
                defaultValue: "true",
            },
            showXAxis: {
                type: "boolean",
                description: "Shows the X axis.",
                defaultValue: "true",
            },
            showYAxis: {
                type: "boolean",
                description: "Shows the Y axis.",
                defaultValue: "true",
            },
            showTooltip: {
                type: "boolean",
                description: "Shows the tooltip.",
                defaultValue: "true",
            },
            yWidth: {
                type: "number",
                description: "Y axis width.",
                defaultValue: "52",
            },
            margin: {
                type: "ChartMargin",
                description: "Chart plot margins.",
                defaultValue: "{ top: 16, right: 18, bottom: 4, left: 8 }",
            },
            renderTooltip: {
                type: "(props: ChartTooltipProps) => ReactNode",
                description: "Custom tooltip renderer.",
            },
            emptyState: {
                type: "ReactNode",
                description: "Content rendered without data.",
                defaultValue: '"Нет данных"',
            },
            title: {
                type: "ReactNode",
                description: "Optional chart title.",
            },
            description: {
                type: "ReactNode",
                description: "Optional chart description.",
            },
            classNames: {
                type: "ChartClassNames",
                description: "Classes for chart slots.",
                slots: {
                    root: {
                        type: "string",
                        description: "Root classes.",
                    },
                    header: {
                        type: "string",
                        description: "Header classes.",
                    },
                    title: {
                        type: "string",
                        description: "Title classes.",
                    },
                    description: {
                        type: "string",
                        description: "Description classes.",
                    },
                    body: {
                        type: "string",
                        description: "Plot wrapper classes.",
                    },
                    empty: {
                        type: "string",
                        description: "Empty-state classes.",
                    },
                    tooltip: {
                        type: "string",
                        description: "Tooltip classes.",
                    },
                    tooltipLabel: {
                        type: "string",
                        description: "Tooltip header label classes.",
                    },
                    tooltipRow: {
                        type: "string",
                        description: "Tooltip series row classes.",
                    },
                    tooltipKey: {
                        type: "string",
                        description: "Tooltip series name classes.",
                    },
                    tooltipValue: {
                        type: "string",
                        description: "Tooltip series value classes.",
                    },
                },
            },
        },
    },
    compound: [],
};
