import type { ReactNode } from "react";

export type TableRecord = Record<string, unknown>;

export type TableClassNameResolver<T> =
    | string
    | ((item: T, index: number) => string);

export type TableSortMode<T extends TableRecord> = {
    icon: string;
    key: string;
    sortFn: (left: T, right: T, columnKey: string) => number;
};

export type TableColumn<T extends TableRecord> = {
    key: string;
    title: ReactNode;
    accessor?: keyof T;
    render?: (item: T, index: number) => ReactNode;
    headerClassName?: string;
    cellClassName?: TableClassNameResolver<T>;
    className?: string;
    sortModes?: Array<TableSortMode<T>>;
};

export type TableClassNames<T extends TableRecord> = {
    root?: string;
    header?: string;
    headerRow?: string;
    headerCell?: string;
    sortButton?: string;
    body?: string;
    row?: string;
    rowDynamic?: TableClassNameResolver<T>;
    cell?: string;
};

export type SortState = {
    columnKey: string | null;
    modeKey: string | null;
};

export type TableProps<T extends TableRecord> = {
    data: T[];
    columns: Array<TableColumn<T>>;
    rowKey: keyof T | ((item: T, index: number) => string | number);
    classNames?: TableClassNames<T>;
};