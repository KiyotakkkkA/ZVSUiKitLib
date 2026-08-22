import { useCallback, useMemo, useState, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { nextSortState } from "../../lib/sorting";
import type {
    SortState,
    TableColumn,
    TableClassNameResolver,
    TableProps,
    TableRecord,
} from "./types";

const defaultHeaderCellClassName =
    "px-5 py-3 text-xs font-bold uppercase tracking-wide text-main-300";
const defaultRowClassName = "border-b border-main-800 last:border-b-0";
const defaultCellClassName = "px-5 py-4 text-sm text-main-300";

function resolveClassName<T>(
    className: TableClassNameResolver<T> | undefined,
    item: T,
    index: number,
) {
    return typeof className === "function" ? className(item, index) : className;
}

function resolveRowKey<T extends TableRecord>(
    rowKey: TableProps<T>["rowKey"],
    item: T,
    index: number,
) {
    return typeof rowKey === "function"
        ? rowKey(item, index)
        : String(item[rowKey] ?? "");
}

function getColumnValue<T extends TableRecord>(
    item: T,
    column: TableColumn<T>,
) {
    return column.accessor ? item[column.accessor] : undefined;
}

export function Table<T extends TableRecord>({
    data,
    columns,
    rowKey,
    ref,
    caption,
    captionVisible = false,
    emptyMessage,
    classNames,
}: TableProps<T>) {
    const [sortState, setSortState] = useState<SortState>({
        columnKey: null,
        modeKey: null,
    });

    const activeSortColumn = useMemo(
        () => columns.find((column) => column.key === sortState.columnKey),
        [columns, sortState.columnKey],
    );

    const activeSortMode = useMemo(
        () =>
            activeSortColumn?.sortModes?.find(
                (mode) => mode.key === sortState.modeKey,
            ),
        [activeSortColumn, sortState.modeKey],
    );

    const sortedData = useMemo(() => {
        if (!activeSortColumn || !activeSortMode) {
            return data;
        }

        return [...data].sort((left, right) =>
            activeSortMode.sortFn(left, right, activeSortColumn.key),
        );
    }, [activeSortColumn, activeSortMode, data]);

    const toggleSortByColumn = useCallback((column: TableColumn<T>) => {
        const modeKeys = (column.sortModes ?? []).map((mode) => mode.key);

        setSortState((current) => nextSortState(current, column.key, modeKeys));
    }, []);

    return (
        <table
            ref={ref}
            className={cn("w-full border-collapse text-left", classNames?.root)}
        >
            {caption && (
                <caption
                    className={cn(
                        !captionVisible && "sr-only",
                        classNames?.caption,
                    )}
                >
                    {caption}
                </caption>
            )}

            <thead className={classNames?.header}>
                <tr
                    className={cn(
                        "border-b border-main-700 bg-main-800/80",
                        classNames?.headerRow,
                    )}
                >
                    {columns.map((column) => {
                        const isSortable = Boolean(column.sortModes?.length);
                        const isActive = sortState.columnKey === column.key;
                        const activeIcon = isActive
                            ? column.sortModes?.find(
                                  (mode) => mode.key === sortState.modeKey,
                              )?.icon
                            : undefined;
                        const content = (
                            <>
                                <span>{column.title}</span>
                                {isSortable && (
                                    <span className={"min-w-3 text-main-400"}>
                                        {activeIcon ?? ""}
                                    </span>
                                )}
                            </>
                        );

                        return (
                            <th
                                key={column.key}
                                scope="col"
                                aria-sort={
                                    isSortable
                                        ? isActive
                                            ? (activeSortMode?.direction ??
                                              "other")
                                            : "none"
                                        : undefined
                                }
                                className={cn(
                                    defaultHeaderCellClassName,
                                    classNames?.headerCell,
                                    column.className,
                                    column.headerClassName,
                                )}
                            >
                                {isSortable ? (
                                    <button
                                        type="button"
                                        className={cn(
                                            "inline-flex w-full items-center gap-1.5 rounded-md px-1 py-0.5 text-left transition-colors duration-150",
                                            isActive
                                                ? "text-main-100"
                                                : "text-main-300 hover:text-main-100",
                                            classNames?.sortButton,
                                        )}
                                        onClick={() =>
                                            toggleSortByColumn(column)
                                        }
                                    >
                                        {content}
                                    </button>
                                ) : (
                                    content
                                )}
                            </th>
                        );
                    })}
                </tr>
            </thead>

            <tbody className={classNames?.body}>
                {sortedData.length === 0 && emptyMessage ? (
                    <tr className={cn(defaultRowClassName, classNames?.row)}>
                        <td
                            colSpan={columns.length}
                            className={cn(
                                defaultCellClassName,
                                classNames?.empty,
                            )}
                        >
                            {emptyMessage}
                        </td>
                    </tr>
                ) : (
                    sortedData.map((item, index) => (
                        <tr
                            key={resolveRowKey(rowKey, item, index)}
                            className={cn(
                                defaultRowClassName,
                                classNames?.row,
                                resolveClassName(
                                    classNames?.rowDynamic,
                                    item,
                                    index,
                                ),
                            )}
                        >
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className={cn(
                                        defaultCellClassName,
                                        classNames?.cell,
                                        column.className,
                                        resolveClassName(
                                            column.cellClassName,
                                            item,
                                            index,
                                        ),
                                    )}
                                >
                                    {column.render
                                        ? column.render(item, index)
                                        : (getColumnValue(
                                              item,
                                              column,
                                          ) as ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
