import type {
    CSSProperties,
    ComponentPropsWithoutRef,
    ReactNode,
    Ref,
} from "react";
import type { TooltipContentProps, TooltipValueType } from "recharts";

import type { DivClassName, SpanClassName } from "../_shared/types";

export type ChartType = "line" | "area" | "bar";

export type ChartSeries = {
    /** The key identifier. */
    key: string;
    /** Text used for the label. */
    label?: string;
    /** The color used to render the chart series. */
    color?: string;
    /** Whether active color is enabled. */
    activeColor?: string;
    /** Whether active dot color is enabled. */
    activeDotColor?: string;
    /** Whether active dot stroke color is enabled. */
    activeDotStrokeColor?: string;
    /** The width of the chart series stroke. */
    strokeWidth?: number;
    /** CSS classes applied to the root element. */
    className?: string;
};

export type ChartDataItem = Record<string, string | number | null | undefined>;
export type ChartTooltipName = string | number;
export type ChartTooltipProps = TooltipContentProps<
    TooltipValueType,
    ChartTooltipName
>;

export type ChartMargin = {
    /** The top used by the component. */
    top?: number;
    /** The right used by the component. */
    right?: number;
    /** The bottom used by the component. */
    bottom?: number;
    /** The left used by the component. */
    left?: number;
};

export type ChartClassNames = {
    /** The root used by the component. */
    root?: DivClassName;
    /** Content rendered for the header. */
    header?: DivClassName;
    /** Text used for the title. */
    title?: DivClassName;
    /** Text used for the description. */
    description?: DivClassName;
    /** The body used by the component. */
    body?: DivClassName;
    /** The empty used by the component. */
    empty?: DivClassName;
    /** The tooltip used by the component. */
    tooltip?: DivClassName;
    /** Text used for the tooltip label. */
    tooltipLabel?: DivClassName;
    /** The tooltip row used by the component. */
    tooltipRow?: DivClassName;
    /** The tooltip key identifier. */
    tooltipKey?: SpanClassName;
    /** The tooltip value used by the component. */
    tooltipValue?: SpanClassName;
};

export type ChartProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    /** Receives the chart root element. */
    ref?: Ref<HTMLDivElement>;
    /** The data used by the component. */
    data: ChartDataItem[];
    /** The series used by the component. */
    series: ChartSeries[];
    /** The x key identifier. */
    xKey: string;
    /** The height of the chart in pixels. */
    height?: number;
    /** The chart visualization type. */
    type?: ChartType;
    /** Whether show grid is enabled. */
    showGrid?: boolean;
    /** Whether show xaxis is enabled. */
    showXAxis?: boolean;
    /** Whether show yaxis is enabled. */
    showYAxis?: boolean;
    /** Whether show tooltip is enabled. */
    showTooltip?: boolean;
    /** The width reserved for the Y axis. */
    yWidth?: number;
    /** The margin used by the component. */
    margin?: ChartMargin;
    /** The x tick formatter used by the component. */
    xTickFormatter?: (value: string | number) => string;
    /** The y tick formatter used by the component. */
    yTickFormatter?: (value: string | number) => string;
    /** The stroke color of the tooltip cursor. */
    tooltipCursorColor?: string;
    /** The tooltip cursor fill used by the component. */
    tooltipCursorFill?: string;
    /** The stroke width of the tooltip cursor. */
    tooltipCursorWidth?: number;
    /** Whether active dot radius is enabled. */
    activeDotRadius?: number;
    /** Function used to render tooltip. */
    renderTooltip?: (props: ChartTooltipProps) => ReactNode;
    /** The empty state used by the component. Defaults to the `chart.emptyState` string from the active locale dictionary. */
    emptyState?: ReactNode;
    /** Text used for the title. */
    title?: ReactNode;
    /** Text used for the description. */
    description?: ReactNode;
    /** CSS classes applied to the component slots. */
    classNames?: ChartClassNames;
    /** The style used by the component. */
    style?: CSSProperties;
    /** The color vars used by the component. */
    colorVars?: string[];
};

export type DefaultTooltipProps = ChartTooltipProps & {
    /** CSS classes applied to the component slots. */
    classNames?: ChartClassNames;
};
