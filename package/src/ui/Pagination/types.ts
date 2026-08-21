import type { Ref } from "react";
export type PaginationPageItem = number | "dots";

export type PaginationProps = {
    /** Receives the pagination root element. */
    ref?: Ref<HTMLDivElement>;
    /** The page used by the component. */
    page: number;
    /** The per page used by the component. */
    perPage: number;
    /** The total used by the component. */
    total: number;
    /** The last page used by the component. */
    lastPage: number;
    /** The from used by the component. */
    from?: number | null;
    /** The to used by the component. */
    to?: number | null;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** Callback invoked when page change occurs. */
    onPageChange: (page: number) => void;
    /** Callback invoked when per page change occurs. */
    onPerPageChange?: (perPage: number) => void;
    /** The per page options used by the component. */
    perPageOptions?: number[];
};
