import {
    Children,
    cloneElement,
    createContext,
    isValidElement,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactElement,
    type ReactNode,
} from "react";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import type {
    TableRecord,
    Align,
    TableSchemaItem,
    TableSortModes,
    SortState,
    TableProps,
    TableHeaderProps,
    TableBodyProps,
    TableRowProps,
    TableColumnProps,
    TableFooterProps,
    TableContextValue,
    RowContextValue,
} from "./types";

const TABLE_PART = {
    header: "zvs.table.header",
    body: "zvs.table.body",
    footer: "zvs.table.footer",
} as const;

const TableContext = createContext<TableContextValue<TableRecord> | null>(null);
const RowContext = createContext<RowContextValue<TableRecord> | null>(null);
const EMPTY_SORT_MODES: TableSortModes<TableRecord> = {};

const ALIGN_CLASS: Record<Align, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

function cx(...items: Array<string | undefined | false>) {
    return items.filter(Boolean).join(" ");
}

function getTableParts<T extends TableRecord>(children: ReactNode) {
    const parts: {
        headerConfig?: TableHeaderProps<T>;
        bodyConfig?: TableBodyProps;
        footerConfig?: TableFooterProps;
    } = {};

    Children.forEach(children, (node) => {
        if (!isValidElement(node)) {
            return;
        }

        const part = (node.type as { __zvsTablePart?: string }).__zvsTablePart;

        if (part === TABLE_PART.header && !parts.headerConfig) {
            parts.headerConfig = (
                node as ReactElement<TableHeaderProps<T>>
            ).props;
        }

        if (part === TABLE_PART.body && !parts.bodyConfig) {
            parts.bodyConfig = (node as ReactElement<TableBodyProps>).props;
        }

        if (part === TABLE_PART.footer && !parts.footerConfig) {
            parts.footerConfig = (node as ReactElement<TableFooterProps>).props;
        }
    });

    return parts;
}

function useTypedTableContext<T extends TableRecord>() {
    const context = useContext(TableContext);

    if (!context) {
        throw new Error("Table subcomponents must be used inside <Table>.");
    }

    return context as TableContextValue<T>;
}

function TableRoot<T extends TableRecord>({
    data,
    schema,
    children,
    rowKey,
    className,
    striped,
    hoverable,
}: TableProps<T>) {
    const { headerConfig, bodyConfig, footerConfig } = useMemo(
        () => getTableParts<T>(children),
        [children],
    );

    const headerSortModes = headerConfig?.sortModes;
    const sortModes = useMemo(
        () =>
            (headerSortModes ??
                EMPTY_SORT_MODES) as unknown as TableSortModes<T>,
        [headerSortModes],
    );
    const sortModeKeys = useMemo(() => Object.keys(sortModes), [sortModes]);

    const [sortState, setSortState] = useState<SortState<T>>({
        columnKey: headerConfig?.defaultSortColumn ?? null,
        modeKey:
            headerConfig?.defaultSortMode &&
            sortModes[headerConfig.defaultSortMode]
                ? headerConfig.defaultSortMode
                : (sortModeKeys[0] ?? null),
    });

    const sortedRows = useMemo(() => {
        const { columnKey, modeKey } = sortState;

        if (!columnKey || !modeKey) {
            return data;
        }

        const mode = sortModes[modeKey];

        if (!mode) {
            return data;
        }

        return [...data].sort((left, right) =>
            mode.sortFn(left, right, columnKey),
        );
    }, [data, sortModes, sortState]);

    const schemaMap = useMemo(() => {
        const map = new Map<string, TableSchemaItem<T>>();

        schema.forEach((item) => {
            map.set(item.key, item);
        });

        return map;
    }, [schema]);

    const resolveRowKey = useCallback(
        (row: T, index: number) => rowKey?.(row, index) ?? String(index),
        [rowKey],
    );

    const toggleSortByColumn = useCallback(
        (columnKey: Extract<keyof T, string>) => {
            if (sortModeKeys.length === 0) {
                return;
            }

            setSortState((current) => {
                if (current.columnKey !== columnKey || !current.modeKey) {
                    return { columnKey, modeKey: sortModeKeys[0] };
                }

                const currentIndex = sortModeKeys.indexOf(current.modeKey);
                const nextIndex = currentIndex + 1;

                if (nextIndex >= sortModeKeys.length) {
                    return { columnKey: null, modeKey: null };
                }

                return { columnKey, modeKey: sortModeKeys[nextIndex] };
            });
        },
        [sortModeKeys],
    );

    const contextValue = useMemo<TableContextValue<T>>(
        () => ({
            schema,
            schemaMap,
            sortedRows,
            rowKey: resolveRowKey,
            sortState,
            sortModeKeys,
            sortModes,
            toggleSortByColumn,
        }),
        [
            schema,
            schemaMap,
            sortedRows,
            resolveRowKey,
            sortState,
            sortModeKeys,
            sortModes,
            toggleSortByColumn,
        ],
    );

    return (
        <ScrollArea
            orientation="horizontal"
            className={cx(
                "w-full rounded-2xl border border-main-700/70 bg-main-900/55",
                className,
            )}
        >
            <TableContext.Provider
                value={contextValue as TableContextValue<TableRecord>}
            >
                <table
                    className={cx(
                        "w-full min-w-xl border-collapse text-sm text-main-100",
                    )}
                >
                    <TableHeaderRenderer config={headerConfig} />
                    <TableBodyRenderer
                        config={bodyConfig}
                        striped={striped}
                        hoverable={hoverable}
                    />
                    <TableFooterRenderer config={footerConfig} />
                </table>
            </TableContext.Provider>
        </ScrollArea>
    );
}

function TableHeaderRenderer<T extends TableRecord>({
    config,
}: {
    config?: TableHeaderProps<T>;
}) {
    const table = useTypedTableContext<T>();

    return (
        <thead className={cx(config?.className, config?.classNames?.root)}>
            <tr
                className={cx(
                    "border-b border-main-700/60",
                    config?.classNames?.row,
                )}
            >
                {table.schema.map((column) => {
                    const columnAlign = column.align ?? "left";
                    const isSortable = table.sortModeKeys.length > 0;
                    const isActive = table.sortState.columnKey === column.key;
                    const activeIcon =
                        isActive && table.sortState.modeKey
                            ? table.sortModes[table.sortState.modeKey]?.sortIcon
                            : "";

                    return (
                        <th
                            key={column.key}
                            className={cx(
                                "px-4 py-3 text-[12px] uppercase tracking-[0.08em] text-main-300",
                                ALIGN_CLASS[columnAlign],
                                config?.classNames?.cell,
                                column.classNames?.header,
                            )}
                            style={{ width: column.width }}
                        >
                            {isSortable ? (
                                <button
                                    type="button"
                                    className={cx(
                                        "inline-flex w-full items-center gap-1.5 rounded-md px-1 py-0.5 transition-colors duration-150",
                                        columnAlign === "left" &&
                                            "justify-start",
                                        columnAlign === "center" &&
                                            "justify-center",
                                        columnAlign === "right" &&
                                            "justify-end",
                                        isActive
                                            ? "text-main-100"
                                            : "text-main-300 hover:text-main-100",
                                        config?.classNames?.sortButton,
                                    )}
                                    onClick={() =>
                                        table.toggleSortByColumn(column.key)
                                    }
                                >
                                    <span>{column.label}</span>
                                    <span className="min-w-3 text-main-400">
                                        {activeIcon}
                                    </span>
                                </button>
                            ) : (
                                <span>{column.label}</span>
                            )}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

function TableBodyRenderer<T extends TableRecord>({
    config,
    striped,
    hoverable,
}: {
    config?: TableBodyProps;
    striped?: boolean;
    hoverable?: boolean;
}) {
    const table = useTypedTableContext<T>();
    const rowTemplateNodes = useMemo(
        () => Children.toArray(config?.children),
        [config?.children],
    );

    if (table.sortedRows.length === 0) {
        return (
            <tbody className={cx(config?.className, config?.classNames?.root)}>
                <tr
                    className={cx(
                        "border-b border-main-700/50",
                        config?.classNames?.row,
                    )}
                >
                    <td
                        className={cx(
                            "px-4 py-4 text-center text-main-400",
                            config?.classNames?.empty,
                        )}
                        colSpan={table.schema.length}
                    >
                        {config?.emptyState ?? "Нет данных"}
                    </td>
                </tr>
            </tbody>
        );
    }

    if (rowTemplateNodes.length === 0) {
        return (
            <tbody className={cx(config?.className, config?.classNames?.root)}>
                <tr
                    className={cx(
                        "border-b border-main-700/50",
                        config?.classNames?.row,
                    )}
                >
                    <td
                        className={cx(
                            "px-4 py-4 text-center text-main-400",
                            config?.classNames?.empty,
                        )}
                        colSpan={table.schema.length}
                    >
                        Передайте Table.Row и Table.Column внутрь Table.Body
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className={cx(config?.className, config?.classNames?.root)}>
            {table.sortedRows.map((row, index) => (
                <RowContext.Provider
                    key={table.rowKey(row, index)}
                    value={{ row, rowIndex: index }}
                >
                    {rowTemplateNodes.map((child) => {
                        if (!isValidElement(child)) {
                            return child;
                        }

                        if (child.type !== TableRow) {
                            return child;
                        }

                        const typedChild = child as ReactElement<
                            TableRowProps<T>
                        >;

                        return cloneElement(typedChild, {
                            className: cx(
                                striped && index % 2 === 1 && "bg-main-800/25",
                                hoverable && "hover:bg-main-700/25",
                                config?.classNames?.row,
                                typedChild.props.className,
                            ),
                        });
                    })}
                </RowContext.Provider>
            ))}
        </tbody>
    );
}

function TableRow<T extends TableRecord>({
    row,
    children,
    className,
    ...rest
}: TableRowProps<T>) {
    const parentRowContext = useContext(
        RowContext,
    ) as RowContextValue<T> | null;
    const nextRow = row ?? parentRowContext?.row;
    const nextRowIndex = parentRowContext?.rowIndex ?? -1;

    const rowClassName = cx(
        "border-b border-main-700/50 transition-colors duration-150",
        className,
    );

    if (!nextRow) {
        return (
            <tr className={rowClassName} {...rest}>
                {children}
            </tr>
        );
    }

    return (
        <RowContext.Provider value={{ row: nextRow, rowIndex: nextRowIndex }}>
            <tr className={rowClassName} {...rest}>
                {children}
            </tr>
        </RowContext.Provider>
    );
}

function TableColumn<
    T extends TableRecord,
    K extends Extract<keyof T, string> = Extract<keyof T, string>,
>({ field, children, className, ...rest }: TableColumnProps<T, K>) {
    const table = useTypedTableContext<T>();
    const rowContext = useContext(RowContext) as RowContextValue<T> | null;

    const row = rowContext?.row ?? null;
    const rowIndex = rowContext?.rowIndex ?? -1;

    const schema = field ? table.schemaMap.get(field) : undefined;
    const value = row && field ? (row[field] as T[K]) : undefined;

    let content: ReactNode;

    if (typeof children === "function") {
        content = children({ value, row, rowIndex, field });
    } else if (children !== undefined) {
        content = children;
    } else if (schema?.render && row) {
        content = schema.render(
            value as T[Extract<keyof T, string>],
            row,
            rowIndex,
        );
    } else {
        content = value as ReactNode;
    }

    return (
        <td
            className={cx(
                "px-4 py-3 align-middle text-main-100",
                schema?.align && ALIGN_CLASS[schema.align],
                schema?.classNames?.cell,
                className,
            )}
            {...rest}
        >
            {content}
        </td>
    );
}

function TableFooterRenderer<T extends TableRecord>({
    config,
}: {
    config?: TableFooterProps;
}) {
    const table = useTypedTableContext<T>();

    if (!config) {
        return null;
    }

    return (
        <tfoot className={cx(config.className, config.classNames?.root)}>
            <tr
                className={cx(
                    "border-t border-main-700/60",
                    config.classNames?.row,
                )}
            >
                <td
                    className={cx(
                        "px-4 py-3 text-main-300",
                        config.classNames?.cell,
                    )}
                    colSpan={table.schema.length}
                >
                    {config.children}
                </td>
            </tr>
        </tfoot>
    );
}

function TableHeader<T extends TableRecord>(_props: TableHeaderProps<T>) {
    void _props;
    return null;
}

function TableBody(_props: TableBodyProps) {
    void _props;
    return null;
}

function TableFooter(_props: TableFooterProps) {
    void _props;
    return null;
}

(TableHeader as { __zvsTablePart?: string }).__zvsTablePart = TABLE_PART.header;
(TableBody as { __zvsTablePart?: string }).__zvsTablePart = TABLE_PART.body;
(TableFooter as { __zvsTablePart?: string }).__zvsTablePart = TABLE_PART.footer;

export const Table = Object.assign(TableRoot, {
    Header: TableHeader,
    Body: TableBody,
    Row: TableRow,
    Column: TableColumn,
    Footer: TableFooter,
});
