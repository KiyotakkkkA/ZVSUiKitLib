import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import type { TooltipContentProps, TooltipValueType } from "recharts";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type ChartType = "line" | "area" | "bar";

export type ChartSeries = {
    key: string;
    label?: string;
    color?: string;
    activeColor?: string;
    activeDotColor?: string;
    activeDotStrokeColor?: string;
    strokeWidth?: number;
    className?: string;
};

export type ChartDataItem = Record<string, string | number | null | undefined>;
export type ChartTooltipName = string | number;
export type ChartTooltipProps = TooltipContentProps<
    TooltipValueType,
    ChartTooltipName
>;

export type ChartMargin = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type ChartClassNames = {
    root?: DivClassName;
    header?: DivClassName;
    title?: DivClassName;
    description?: DivClassName;
    body?: DivClassName;
    empty?: DivClassName;
    tooltip?: DivClassName;
    tooltipLabel?: DivClassName;
    tooltipRow?: DivClassName;
    tooltipKey?: SpanClassName;
    tooltipValue?: SpanClassName;
};

export type ChartProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    data: ChartDataItem[];
    series: ChartSeries[];
    xKey: string;
    height?: number;
    type?: ChartType;
    showGrid?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showTooltip?: boolean;
    yWidth?: number;
    margin?: ChartMargin;
    xTickFormatter?: (value: string | number) => string;
    yTickFormatter?: (value: string | number) => string;
    tooltipCursorColor?: string;
    tooltipCursorFill?: string;
    tooltipCursorWidth?: number;
    activeDotRadius?: number;
    renderTooltip?: (props: ChartTooltipProps) => ReactNode;
    emptyState?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    classNames?: ChartClassNames;
    style?: CSSProperties;
    colorVars?: string[];
};

export type DefaultTooltipProps = ChartTooltipProps & {
    classNames?: ChartClassNames;
};
