import styles from "./Chart.module.css";
import { memo, useMemo, useCallback, useId } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    type TooltipPayloadEntry,
} from "recharts";
import { cn } from "../../lib/utils";
import type { ChartSeries, ChartProps, DefaultTooltipProps } from "./types";

const DEFAULT_HEIGHT = 280;
const DEFAULT_MARGIN = { top: 16, right: 18, bottom: 4, left: 8 } as const;

const DEFAULT_COLOR_VARS = [
    "var(--chart-color-1, var(--color-main-100))",
    "var(--chart-color-2, var(--color-main-300))",
    "var(--chart-color-3, var(--color-main-500))",
    "var(--chart-color-4, var(--color-main-400))",
];

const AXIS_STYLE = {
    stroke: "rgb(115 115 115)",
    fontSize: 12,
} as const;

const DefaultTooltip = memo(
    ({ active, payload, label, classNames }: DefaultTooltipProps) => {
        if (!active || !payload?.length) return null;

        return (
            <div className={cn(styles.s0, classNames?.tooltip)}>
                {label !== undefined && (
                    <div className={cn(styles.s1, classNames?.tooltipLabel)}>
                        {label}
                    </div>
                )}

                <div className={styles.s2}>
                    {payload.map((item: TooltipPayloadEntry) => {
                        const key = String(item.dataKey ?? item.name);
                        const value = Array.isArray(item.value)
                            ? item.value.join(" – ")
                            : item.value;

                        return (
                            <div
                                key={key}
                                className={cn(
                                    styles.s3,
                                    classNames?.tooltipRow,
                                )}
                            >
                                <div className={styles.s4}>
                                    <span
                                        className={styles.s5}
                                        style={{ background: item.color }}
                                    />
                                    <span
                                        className={cn(
                                            styles.s6,
                                            classNames?.tooltipKey,
                                        )}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                                <span
                                    className={cn(
                                        styles.s7,
                                        classNames?.tooltipValue,
                                    )}
                                >
                                    {value}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    },
);

const ChartBase = ({
    data,
    series,
    xKey,

    height = DEFAULT_HEIGHT,
    type = "line",

    showGrid = true,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,

    yWidth = 52,
    margin = DEFAULT_MARGIN,
    xTickFormatter,
    yTickFormatter,
    tooltipCursorColor = "rgba(245, 245, 245, 0.28)",
    tooltipCursorFill = "transparent",
    tooltipCursorWidth = 1,
    activeDotRadius = 4,

    renderTooltip,
    emptyState = "Нет данных",

    title,
    description,
    className,
    classNames,
    style,
    colorVars = DEFAULT_COLOR_VARS,

    ...props
}: ChartProps) => {
    const uid = useId();

    const hasData = data.length > 0 && series.length > 0;

    const getColor = useCallback(
        (series: ChartSeries, index: number): string =>
            series.color ?? colorVars[index % colorVars.length],
        [colorVars],
    );

    const commonChildren = useMemo(
        () => (
            <>
                {showGrid && (
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="rgba(115, 115, 115, 0.22)"
                    />
                )}

                {showXAxis && (
                    <XAxis
                        dataKey={xKey}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        minTickGap={18}
                        tickFormatter={xTickFormatter}
                        {...AXIS_STYLE}
                    />
                )}

                {showYAxis && (
                    <YAxis
                        width={yWidth}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={8}
                        tickFormatter={yTickFormatter}
                        {...AXIS_STYLE}
                    />
                )}

                {showTooltip && (
                    <Tooltip
                        cursor={{
                            stroke: tooltipCursorColor,
                            strokeWidth: tooltipCursorWidth,
                            fill: tooltipCursorFill,
                        }}
                        content={
                            renderTooltip
                                ? renderTooltip
                                : (tooltipProps) => (
                                      <DefaultTooltip
                                          {...tooltipProps}
                                          classNames={classNames}
                                      />
                                  )
                        }
                    />
                )}
            </>
        ),
        [
            showGrid,
            showXAxis,
            showYAxis,
            showTooltip,
            xKey,
            xTickFormatter,
            yTickFormatter,
            yWidth,
            tooltipCursorColor,
            tooltipCursorFill,
            tooltipCursorWidth,
            renderTooltip,
            classNames,
        ],
    );

    const chartContent = useMemo(() => {
        const commonProps = {
            data,
            margin,
        };

        if (type === "bar") {
            return (
                <BarChart {...commonProps}>
                    {commonChildren}
                    {series.map((item, index) => (
                        <Bar
                            key={item.key}
                            className={item.className}
                            dataKey={item.key}
                            name={item.label ?? item.key}
                            fill={getColor(item, index)}
                            radius={[6, 6, 2, 2]}
                            isAnimationActive={false}
                        />
                    ))}
                </BarChart>
            );
        }

        if (type === "area") {
            return (
                <AreaChart {...commonProps}>
                    {commonChildren}

                    <defs>
                        {series.map((item, index) => {
                            const color = getColor(item, index);
                            return (
                                <linearGradient
                                    key={`${uid}-grad-${item.key}`}
                                    id={`${uid}-grad-${item.key}`}
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor={color}
                                        stopOpacity={0.28}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor={color}
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            );
                        })}
                    </defs>

                    {series.map((item, index) => {
                        const color = getColor(item, index);
                        const activeColor =
                            item.activeColor ?? item.activeDotColor ?? color;
                        return (
                            <Area
                                key={item.key}
                                className={item.className}
                                type="monotone"
                                dataKey={item.key}
                                name={item.label ?? item.key}
                                stroke={color}
                                fill={`url(#${uid}-grad-${item.key})`}
                                strokeWidth={item.strokeWidth ?? 2}
                                dot={false}
                                activeDot={{
                                    r: activeDotRadius,
                                    fill: activeColor,
                                    stroke:
                                        item.activeDotStrokeColor ??
                                        activeColor,
                                }}
                                isAnimationActive={false}
                            />
                        );
                    })}
                </AreaChart>
            );
        }

        return (
            <LineChart {...commonProps}>
                {commonChildren}
                {series.map((item, index) => (
                    <Line
                        key={item.key}
                        className={item.className}
                        type="monotone"
                        dataKey={item.key}
                        name={item.label ?? item.key}
                        stroke={getColor(item, index)}
                        strokeWidth={item.strokeWidth ?? 2}
                        dot={false}
                        activeDot={{
                            r: activeDotRadius,
                            fill:
                                item.activeColor ??
                                item.activeDotColor ??
                                getColor(item, index),
                            stroke:
                                item.activeDotStrokeColor ??
                                item.activeColor ??
                                item.activeDotColor ??
                                getColor(item, index),
                        }}
                        isAnimationActive={false}
                    />
                ))}
            </LineChart>
        );
    }, [
        data,
        series,
        type,
        uid,
        getColor,
        commonChildren,
        margin,
        activeDotRadius,
    ]);

    return (
        <div
            {...props}
            style={style}
            className={cn(styles.s8, className, classNames?.root)}
        >
            {(title || description) && (
                <div className={cn(styles.s9, classNames?.header)}>
                    {title && (
                        <div className={cn(styles.s10, classNames?.title)}>
                            {title}
                        </div>
                    )}
                    {description && (
                        <div
                            className={cn(styles.s11, classNames?.description)}
                        >
                            {description}
                        </div>
                    )}
                </div>
            )}

            <div className={cn(styles.s12, classNames?.body)}>
                {hasData ? (
                    <ResponsiveContainer width="100%" height={height}>
                        {chartContent}
                    </ResponsiveContainer>
                ) : (
                    <div
                        className={cn(styles.s13, classNames?.empty)}
                        style={{ height }}
                    >
                        {emptyState}
                    </div>
                )}
            </div>
        </div>
    );
};

export const Chart = memo(ChartBase);
