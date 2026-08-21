import type { ReactNode, Ref } from "react";

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
    /** The direction reported to assistive technology through `aria-sort`. */
    direction?: "ascending" | "descending" | "other";
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
    /** The caption used by the component. */
    caption?: string;
    /** The empty state cell used by the component. */
    empty?: string;
};

export type { SortState } from "../../lib/sorting";

export type TableProps<T extends TableRecord> = {
    /** Receives the `<table>` element. */
    ref?: Ref<HTMLTableElement>;
    /** The data used by the component. */
    data: T[];
    /** The columns used by the component. */
    columns: Array<TableColumn<T>>;
    /** The row key identifier. */
    rowKey: keyof T | ((item: T, index: number) => string | number);
    /** Describes the table for assistive technology. */
    caption?: ReactNode;
    /** Whether the caption is visible or exposed to assistive technology only. */
    captionVisible?: boolean;
    /** Rendered in place of the body when `data` is empty. */
    emptyMessage?: ReactNode;
    /** CSS classes applied to the component slots. */
    classNames?: TableClassNames<T>;
};
