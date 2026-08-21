import styles from "./Table.module.css";
import { useCallback, useMemo, useState, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import type {
    SortState,
    TableColumn,
    TableClassNameResolver,
    TableProps,
    TableRecord,
} from "./types";

const defaultHeaderCellClassName = styles.defaultHeaderCell;
const defaultRowClassName = styles.defaultRow;
const defaultCellClassName = styles.defaultCell;

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
        const sortModes = column.sortModes ?? [];

        if (sortModes.length === 0) {
            return;
        }

        setSortState((current) => {
            if (current.columnKey !== column.key || !current.modeKey) {
                return { columnKey: column.key, modeKey: sortModes[0].key };
            }

            const currentIndex = sortModes.findIndex(
                (mode) => mode.key === current.modeKey,
            );
            const nextMode = sortModes[currentIndex + 1];

            if (!nextMode) {
                return { columnKey: null, modeKey: null };
            }

            return { columnKey: column.key, modeKey: nextMode.key };
        });
    }, []);

    return (
        <table className={cn(styles.s0, classNames?.root)}>
            {caption && (
                <caption
                    className={cn(
                        !captionVisible && styles.visuallyHidden,
                        classNames?.caption,
                    )}
                >
                    {caption}
                </caption>
            )}

            <thead className={classNames?.header}>
                <tr className={cn(styles.s1, classNames?.headerRow)}>
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
                                    <span className={styles.s2}>
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
                                            styles.s3,
                                            isActive ? styles.s4 : styles.s5,
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
