# Chart

## Table of contents

- [Import](#import)
- [API](#api)
    - [ChartType](#charttype)
    - [ChartSeries](#chartseries)
    - [ChartDataItem](#chartdataitem)
    - [ChartTooltipName](#charttooltipname)
    - [ChartTooltipProps](#charttooltipprops)
    - [ChartMargin](#chartmargin)
    - [Chart](#chart)
        - [ChartClassNames](#chartclassnames)
    - [DefaultTooltipProps](#defaulttooltipprops)
- [Example](#example)

## Import

```tsx
import { Chart } from "@kiyotakkkka/zvs-uikit-lib/chart";
```

## API

### ChartType

```ts
type ChartType = "line" | "area" | "bar";
```

### ChartSeries

| Property               | Type     | Default | Required | Description                                 |
| ---------------------- | -------- | ------- | -------- | ------------------------------------------- |
| `key`                  | `string` | -       | Yes      | The key identifier.                         |
| `label`                | `string` | -       | No       | Text used for the label.                    |
| `color`                | `string` | -       | No       | The color used to render the chart series.  |
| `activeColor`          | `string` | -       | No       | Whether active color is enabled.            |
| `activeDotColor`       | `string` | -       | No       | Whether active dot color is enabled.        |
| `activeDotStrokeColor` | `string` | -       | No       | Whether active dot stroke color is enabled. |
| `strokeWidth`          | `number` | -       | No       | The width of the chart series stroke.       |
| `className`            | `string` | -       | No       | CSS classes applied to the root element.    |

### ChartDataItem

```ts
type ChartDataItem = Record<string, string | number | null | undefined>;
```

### ChartTooltipName

```ts
type ChartTooltipName = string | number;
```

### ChartTooltipProps

```ts
type ChartTooltipProps = TooltipContentProps<
    TooltipValueType,
    ChartTooltipName
>;
```

### ChartMargin

| Property | Type     | Default | Required | Description                       |
| -------- | -------- | ------- | -------- | --------------------------------- |
| `top`    | `number` | -       | No       | The top used by the component.    |
| `right`  | `number` | -       | No       | The right used by the component.  |
| `bottom` | `number` | -       | No       | The bottom used by the component. |
| `left`   | `number` | -       | No       | The left used by the component.   |

### Chart

Extends: `Omit<ComponentPropsWithoutRef<"div">, "children">`.

| Property             | Type                                      | Default                       | Required | Description                                                                                                           |
| -------------------- | ----------------------------------------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `ref`                | `Ref<HTMLDivElement>`                     | -                             | No       | Receives the chart root element.                                                                                      |
| `data`               | `ChartDataItem[]`                         | -                             | Yes      | The data used by the component.                                                                                       |
| `series`             | `ChartSeries[]`                           | -                             | Yes      | The series used by the component.                                                                                     |
| `xKey`               | `string`                                  | -                             | Yes      | The x key identifier.                                                                                                 |
| `height`             | `number`                                  | `DEFAULT_HEIGHT`              | No       | The height of the chart in pixels.                                                                                    |
| `type`               | `ChartType`                               | `"line"`                      | No       | The chart visualization type.                                                                                         |
| `showGrid`           | `boolean`                                 | `true`                        | No       | Whether show grid is enabled.                                                                                         |
| `showXAxis`          | `boolean`                                 | `true`                        | No       | Whether show xaxis is enabled.                                                                                        |
| `showYAxis`          | `boolean`                                 | `true`                        | No       | Whether show yaxis is enabled.                                                                                        |
| `showTooltip`        | `boolean`                                 | `true`                        | No       | Whether show tooltip is enabled.                                                                                      |
| `yWidth`             | `number`                                  | `52`                          | No       | The width reserved for the Y axis.                                                                                    |
| `margin`             | `ChartMargin`                             | `DEFAULT_MARGIN`              | No       | The margin used by the component.                                                                                     |
| `xTickFormatter`     | `(value: string \| number) => string`     | -                             | No       | The x tick formatter used by the component.                                                                           |
| `yTickFormatter`     | `(value: string \| number) => string`     | -                             | No       | The y tick formatter used by the component.                                                                           |
| `tooltipCursorColor` | `string`                                  | `"rgba(245, 245, 245, 0.28)"` | No       | The stroke color of the tooltip cursor.                                                                               |
| `tooltipCursorFill`  | `string`                                  | `"transparent"`               | No       | The tooltip cursor fill used by the component.                                                                        |
| `tooltipCursorWidth` | `number`                                  | `1`                           | No       | The stroke width of the tooltip cursor.                                                                               |
| `activeDotRadius`    | `number`                                  | `4`                           | No       | Whether active dot radius is enabled.                                                                                 |
| `renderTooltip`      | `(props: ChartTooltipProps) => ReactNode` | -                             | No       | Function used to render tooltip.                                                                                      |
| `emptyState`         | `ReactNode`                               | -                             | No       | The empty state used by the component. Defaults to the \`chart.emptyState\` string from the active locale dictionary. |
| `title`              | `ReactNode`                               | -                             | No       | Text used for the title.                                                                                              |
| `description`        | `ReactNode`                               | -                             | No       | Text used for the description.                                                                                        |
| `classNames`         | `ChartClassNames`                         | -                             | No       | CSS classes applied to the component slots.                                                                           |
| `style`              | `CSSProperties`                           | -                             | No       | The style used by the component.                                                                                      |
| `colorVars`          | `string[]`                                | `DEFAULT_COLOR_VARS`          | No       | The color vars used by the component.                                                                                 |

### ChartClassNames

| Property       | Description                              |
| -------------- | ---------------------------------------- |
| `root`         | The root used by the component.          |
| `header`       | Content rendered for the header.         |
| `title`        | Text used for the title.                 |
| `description`  | Text used for the description.           |
| `body`         | The body used by the component.          |
| `empty`        | The empty used by the component.         |
| `tooltip`      | The tooltip used by the component.       |
| `tooltipLabel` | Text used for the tooltip label.         |
| `tooltipRow`   | The tooltip row used by the component.   |
| `tooltipKey`   | The tooltip key identifier.              |
| `tooltipValue` | The tooltip value used by the component. |

### DefaultTooltipProps

Extends: `ChartTooltipProps`.

| Property     | Type              | Default | Required | Description                                 |
| ------------ | ----------------- | ------- | -------- | ------------------------------------------- |
| `classNames` | `ChartClassNames` | -       | No       | CSS classes applied to the component slots. |

```tsx
"use client";
import { Chart } from "@kiyotakkkka/zvs-uikit-lib/chart";

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
