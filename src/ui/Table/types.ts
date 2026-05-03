import type { HTMLAttributes, ReactNode, TdHTMLAttributes } from "react";

type DivClassName = HTMLAttributes<HTMLDivElement>["className"];
type TableSectionClassName =
    HTMLAttributes<HTMLTableSectionElement>["className"];
type TableRowClassName = HTMLAttributes<HTMLTableRowElement>["className"];
type TableCellClassName = TdHTMLAttributes<HTMLTableCellElement>["className"];
type ButtonClassName = HTMLAttributes<HTMLButtonElement>["className"];

export type TableRecord = Record<string, unknown>;
export type Align = "left" | "center" | "right";

export type TableSchemaItem<T extends TableRecord> = {
    key: Extract<keyof T, string>;
    label: ReactNode;
    align?: Align;
    width?: number | string;
    classNames?: {
        cell?: TableCellClassName;
        header?: TableCellClassName;
    };
    render?: (
        value: T[Extract<keyof T, string>],
        row: T,
        rowIndex: number,
    ) => ReactNode;
};

export type SortModeConfig<T extends TableRecord> = {
    sortFn: (left: T, right: T, columnKey: Extract<keyof T, string>) => number;
    sortIcon: string;
};

export type TableSortModes<T extends TableRecord> = Record<
    string,
    SortModeConfig<T>
>;

export type SortState<T extends TableRecord> = {
    columnKey: Extract<keyof T, string> | null;
    modeKey: string | null;
};

export type TableProps<T extends TableRecord> = {
    data: T[];
    schema: Array<TableSchemaItem<T>>;
    children?: ReactNode;
    rowKey?: (row: T, index: number) => string;
    className?: DivClassName;
    striped?: boolean;
    hoverable?: boolean;
};

export type TableHeaderProps<T extends TableRecord> = {
    className?: TableSectionClassName;
    classNames?: {
        root?: TableSectionClassName;
        row?: TableRowClassName;
        cell?: TableCellClassName;
        sortButton?: ButtonClassName;
    };
    sortModes?: TableSortModes<T>;
    defaultSortMode?: string;
    defaultSortColumn?: Extract<keyof T, string>;
};

export type TableBodyProps = {
    className?: TableSectionClassName;
    classNames?: {
        root?: TableSectionClassName;
        row?: TableRowClassName;
        empty?: TableCellClassName;
    };
    emptyState?: ReactNode;
    children?: ReactNode;
};

export type TableRowProps<T extends TableRecord> =
    HTMLAttributes<HTMLTableRowElement> & {
        row?: T;
    };

export type TableColumnProps<
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

export type TableFooterProps = {
    className?: TableSectionClassName;
    classNames?: {
        root?: TableSectionClassName;
        row?: TableRowClassName;
        cell?: TableCellClassName;
    };
    children?: ReactNode;
};

export type TableContextValue<T extends TableRecord> = {
    schema: Array<TableSchemaItem<T>>;
    schemaMap: Map<string, TableSchemaItem<T>>;
    sortedRows: T[];
    rowKey: (row: T, index: number) => string;
    sortState: SortState<T>;
    sortModeKeys: string[];
    sortModes: TableSortModes<T>;
    toggleSortByColumn: (columnKey: Extract<keyof T, string>) => void;
};

export type RowContextValue<T extends TableRecord> = {
    row: T;
    rowIndex: number;
};
