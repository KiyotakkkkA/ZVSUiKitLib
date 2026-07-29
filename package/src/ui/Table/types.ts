import type { ReactNode } from "react";

export type TableRecord = Record<string, unknown>;

export type TableClassNameResolver<T> =
    string | ((item: T, index: number) => string);

export type TableSortMode<T extends TableRecord> = {
    /** Content rendered for the icon. */
    icon: string;
    /** The key identifier. */
    key: string;
    /** The sort fn used by the component. */
    sortFn: (left: T, right: T, columnKey: string) => number;
};

export type TableColumn<T extends TableRecord> = {
    /** The key identifier. */
    key: string;
    /** Text used for the title. */
    title: ReactNode;
    /** The accessor used by the component. */
    accessor?: keyof T;
    /** The render used by the component. */
    render?: (item: T, index: number) => ReactNode;
    /** CSS classes applied to the header element. */
    headerClassName?: string;
    /** CSS classes applied to the cell element. */
    cellClassName?: TableClassNameResolver<T>;
    /** CSS classes applied to the root element. */
    className?: string;
    /** The sort modes used by the component. */
    sortModes?: Array<TableSortMode<T>>;
};

export type TableClassNames<T extends TableRecord> = {
    /** The root used by the component. */
    root?: string;
    /** Content rendered for the header. */
    header?: string;
    /** The header row used by the component. */
    headerRow?: string;
    /** The header cell used by the component. */
    headerCell?: string;
    /** The sort button used by the component. */
    sortButton?: string;
    /** The body used by the component. */
    body?: string;
    /** The row used by the component. */
    row?: string;
    /** The row dynamic used by the component. */
    rowDynamic?: TableClassNameResolver<T>;
    /** The cell used by the component. */
    cell?: string;
};

export type SortState = {
    /** The column key identifier. */
    columnKey: string | null;
    /** The mode key identifier. */
    modeKey: string | null;
};

export type TableProps<T extends TableRecord> = {
    /** The data used by the component. */
    data: T[];
    /** The columns used by the component. */
    columns: Array<TableColumn<T>>;
    /** The row key identifier. */
    rowKey: keyof T | ((item: T, index: number) => string | number);
    /** CSS classes applied to the component slots. */
    classNames?: TableClassNames<T>;
};
