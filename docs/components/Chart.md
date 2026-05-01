# Chart

## Purpose

Reusable line/area/bar chart wrapper around Recharts with a consistent UI shell.

## Props

### `Chart` (root)

| Prop               | Type                        | Default                                      | Description                               |
| ------------------ | --------------------------- | -------------------------------------------- | ----------------------------------------- |
| data               | `ChartDataItem[]`           | -                                            | Dataset.                                  |
| series             | `ChartSeries[]`             | -                                            | Series configuration.                     |
| xKey               | string                      | -                                            | Data key for the X axis.                  |
| height             | number                      | `280`                                        | Chart height in pixels.                   |
| type               | `"line" \| "area" \| "bar"` | `"line"`                                     | Chart type.                               |
| showGrid           | boolean                     | `true`                                       | Toggle grid lines.                        |
| showXAxis          | boolean                     | `true`                                       | Toggle X axis.                            |
| showYAxis          | boolean                     | `true`                                       | Toggle Y axis.                            |
| showTooltip        | boolean                     | `true`                                       | Toggle tooltip.                           |
| yWidth             | number                      | `52`                                         | Y axis width.                             |
| margin             | object                      | `{ top: 16, right: 18, bottom: 4, left: 8 }` | Chart margin.                             |
| xTickFormatter     | `(value) => string`         | -                                            | X axis tick formatter.                    |
| yTickFormatter     | `(value) => string`         | -                                            | Y axis tick formatter.                    |
| tooltipCursorColor | string                      | `rgba(245, 245, 245, 0.28)`                  | Tooltip cursor stroke color.              |
| tooltipCursorFill  | string                      | `transparent`                                | Tooltip cursor fill.                      |
| tooltipCursorWidth | number                      | `1`                                          | Tooltip cursor stroke width.              |
| activeDotRadius    | number                      | `4`                                          | Active dot radius for line/area.          |
| renderTooltip      | `(props) => ReactNode`      | -                                            | Custom tooltip renderer.                  |
| emptyState         | ReactNode                   | `"Нет данных"`                               | Content for empty datasets.               |
| title              | ReactNode                   | -                                            | Optional title above the chart.           |
| description        | ReactNode                   | -                                            | Optional description text.                |
| className          | string                      | -                                            | Root wrapper classes.                     |
| classNames         | object                      | -                                            | Slot class overrides.                     |
| style              | CSSProperties               | -                                            | Root inline styles.                       |
| colorVars          | string[]                    | default palette                              | CSS color variables for series fallbacks. |

### `ChartSeries`

| Field                | Type   | Description                        |
| -------------------- | ------ | ---------------------------------- |
| key                  | string | Data key for the series.           |
| label                | string | Tooltip label (defaults to `key`). |
| color                | string | Line/bar color override.           |
| activeColor          | string | Active dot fill color override.    |
| activeDotColor       | string | Active dot fill color (alias).     |
| activeDotStrokeColor | string | Active dot stroke color.           |
| strokeWidth          | number | Line/area stroke width.            |
| className            | string | Classes for the series element.    |

### `Chart` classNames slots

| Slot         | Description                |
| ------------ | -------------------------- |
| root         | Root wrapper.              |
| header       | Title/description wrapper. |
| title        | Title classes.             |
| description  | Description classes.       |
| body         | Chart body container.      |
| empty        | Empty state wrapper.       |
| tooltip      | Tooltip container.         |
| tooltipLabel | Tooltip header label.      |
| tooltipRow   | Tooltip row wrapper.       |
| tooltipKey   | Tooltip series name.       |
| tooltipValue | Tooltip value.             |

## Example

```tsx
import { Chart } from "@kiyotakkkka/zvs-uikit-lib/ui";

const weeklyActivityData = [
    { date: "Mon", users: 120, requests: 340 },
    { date: "Tue", users: 180, requests: 420 },
    { date: "Wed", users: 150, requests: 390 },
    { date: "Thu", users: 240, requests: 620 },
    { date: "Fri", users: 310, requests: 790 },
    { date: "Sat", users: 280, requests: 710 },
    { date: "Sun", users: 360, requests: 880 },
];

const tokenUsageData = [
    { date: "01.05", tokens: 1200 },
    { date: "02.05", tokens: 1800 },
    { date: "03.05", tokens: 1600 },
    { date: "04.05", tokens: 2600 },
    { date: "05.05", tokens: 3100 },
    { date: "06.05", tokens: 2800 },
    { date: "07.05", tokens: 3600 },
];

const modelRequestsData = [
    { model: "GPT", count: 42 },
    { model: "Ollama", count: 28 },
    { model: "Claude", count: 19 },
    { model: "Gemini", count: 14 },
];

export function ChartPreview() {
    return (
        <div className="grid gap-4 w-full">
            <Chart
                title="Line Chart"
                description="Users and requests by weekday"
                type="line"
                data={weeklyActivityData}
                xKey="date"
                tooltipCursorColor="rgba(250, 250, 250, 0.42)"
                activeDotRadius={5}
                series={[
                    {
                        key: "users",
                        label: "Users",
                        color: "rgb(250 250 250)",
                        activeColor: "rgb(34 197 94)",
                    },
                    {
                        key: "requests",
                        label: "Requests",
                        color: "rgb(163 163 163)",
                        activeColor: "rgb(125 211 252)",
                    },
                ]}
                height={400}
            />

            <Chart
                title="Area Chart"
                description="Token usage by day"
                type="area"
                data={tokenUsageData}
                xKey="date"
                series={[
                    {
                        key: "tokens",
                        label: "Tokens",
                        activeColor: "rgb(250 250 250)",
                    },
                ]}
                height={260}
                yTickFormatter={(value) => `${value}`}
            />

            <Chart
                title="Bar Chart"
                description="Request count by model"
                type="bar"
                data={modelRequestsData}
                xKey="model"
                series={[
                    {
                        key: "count",
                        label: "Requests",
                        className:
                            "hover:bg-gray-200 transition-colors duration-200",
                    },
                ]}
                height={240}
            />
        </div>
    );
}
```
