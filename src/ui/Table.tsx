import {
    Children,
    cloneElement,
    createContext,
    isValidElement,
    useCallback,
    useContext,
    useMemo,
    useState,
    type HTMLAttributes,
    type ReactElement,
    type ReactNode,
    type TdHTMLAttributes,
} from "react";
import { ScrollArea } from "./ScrollArea";

type TableRecord = Record<string, unknown>;

type Align = "left" | "center" | "right";

type TableSchemaItem<T extends TableRecord> = {
    key: Extract<keyof T, string>;
    label: ReactNode;
    align?: Align;
    width?: number | string;
    className?: string;
    headerClassName?: string;
    render?: (
        value: T[Extract<keyof T, string>],
        row: T,
        rowIndex: number,
    ) => ReactNode;
};

type SortModeConfig<T extends TableRecord> = {
    sortFn: (left: T, right: T, columnKey: Extract<keyof T, string>) => number;
    sortIcon: string;
};

type TableSortModes<T extends TableRecord> = Record<string, SortModeConfig<T>>;

type SortState<T extends TableRecord> = {
    columnKey: Extract<keyof T, string> | null;
    modeKey: string | null;
};

type TableProps<T extends TableRecord> = {
    data: T[];
    schema: Array<TableSchemaItem<T>>;
    children?: ReactNode;
    rowKey?: (row: T, index: number) => string;
    className?: string;
    tableClassName?: string;
    compact?: boolean;
    striped?: boolean;
    hoverable?: boolean;
};

type TableHeaderProps<T extends TableRecord> = {
    className?: string;
    sortModes?: TableSortModes<T>;
    defaultSortMode?: string;
    defaultSortColumn?: Extract<keyof T, string>;
};

type TableBodyProps = {
    className?: string;
    emptyState?: ReactNode;
    children?: ReactNode;
};

type TableRowProps<T extends TableRecord> =
    HTMLAttributes<HTMLTableRowElement> & {
        row?: T;
    };

type TableColumnProps<
    T extends TableRecord,
    K extends Extract<keyof T, string> = Extract<keyof T, string>,
> = Omit<TdHTMLAttributes<HTMLTableCellElement>, "children"> & {
    field?: K;
    children?:
        | ReactNode
        | ((context: {
              value: T[K] | undefined;
              row: T | null;
              rowIndex: number;
              field: K | undefined;
          }) => ReactNode);
};

type TableFooterProps = {
    className?: string;
    children?: ReactNode;
};

type TableContextValue<T extends TableRecord> = {
    schema: Array<TableSchemaItem<T>>;
    schemaMap: Map<string, TableSchemaItem<T>>;
    sortedRows: T[];
    rowKey: (row: T, index: number) => string;
    sortState: SortState<T>;
    sortModeKeys: string[];
    sortModes: TableSortModes<T>;
    toggleSortByColumn: (columnKey: Extract<keyof T, string>) => void;
};

type RowContextValue<T extends TableRecord> = {
    row: T;
    rowIndex: number;
};

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
    tableClassName,
    compact,
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
                        compact && "text-[13px]",
                        tableClassName,
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
        <thead className={config?.className}>
            <tr className="border-b border-main-700/60">
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
                                column.headerClassName,
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
            <tbody className={config?.className}>
                <tr className="border-b border-main-700/50">
                    <td
                        className="px-4 py-4 text-center text-main-400"
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
            <tbody className={config?.className}>
                <tr className="border-b border-main-700/50">
                    <td
                        className="px-4 py-4 text-center text-main-400"
                        colSpan={table.schema.length}
                    >
                        Передайте Table.Row и Table.Column внутрь Table.Body
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className={config?.className}>
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
                schema?.className,
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
        <tfoot className={config.className}>
            <tr className="border-t border-main-700/60">
                <td
                    className="px-4 py-3 text-main-300"
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

type TableCompound = {
    <T extends TableRecord>(props: TableProps<T>): ReactNode;
    Header: <T extends TableRecord>(props: TableHeaderProps<T>) => ReactNode;
    Body: (props: TableBodyProps) => ReactNode;
    Row: <T extends TableRecord>(props: TableRowProps<T>) => ReactNode;
    Column: <
        T extends TableRecord,
        K extends Extract<keyof T, string> = Extract<keyof T, string>,
    >(
        props: TableColumnProps<T, K>,
    ) => ReactNode;
    Footer: (props: TableFooterProps) => ReactNode;
};

export const Table = Object.assign(TableRoot, {
    Header: TableHeader,
    Body: TableBody,
    Row: TableRow,
    Column: TableColumn,
    Footer: TableFooter,
}) as TableCompound;

export type {
    TableBodyProps,
    TableColumnProps,
    TableFooterProps,
    TableHeaderProps,
    TableProps,
    TableRowProps,
    TableSchemaItem,
    TableSortModes,
};
