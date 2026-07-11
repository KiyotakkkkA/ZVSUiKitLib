export type PaginationPageItem = number | "dots";

export type PaginationProps = {
    page: number;
    perPage: number;
    total: number;
    lastPage: number;
    from?: number | null;
    to?: number | null;
    disabled?: boolean;
    onPageChange: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
    perPageOptions?: number[];
};
