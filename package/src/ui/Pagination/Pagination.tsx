import { Icon } from "@iconify/react";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import type { PaginationPageItem, PaginationProps } from "./types";

const siblingCount = 1;

function getVisiblePages(page: number, lastPage: number): PaginationPageItem[] {
    if (lastPage <= 7) {
        return Array.from({ length: lastPage }, (_, index) => index + 1);
    }

    const left = Math.max(page - siblingCount, 2);
    const right = Math.min(page + siblingCount, lastPage - 1);
    const pages: PaginationPageItem[] = [1];

    if (left > 2) {
        pages.push("dots");
    }

    for (let currentPage = left; currentPage <= right; currentPage += 1) {
        pages.push(currentPage);
    }

    if (right < lastPage - 1) {
        pages.push("dots");
    }

    pages.push(lastPage);

    return pages;
}

export const Pagination = ({
    page,
    perPage,
    total,
    lastPage,
    from,
    to,
    disabled = false,
    onPageChange,
    onPerPageChange,
    perPageOptions = [10, 20, 50],
}: PaginationProps) => {
    const normalizedLastPage = Math.max(lastPage, 1);
    const visiblePages = getVisiblePages(page, normalizedLastPage);
    const isFirstPage = page <= 1;
    const isLastPage = page >= normalizedLastPage;
    const perPageSelectOptions = perPageOptions.map((option) => ({
        value: String(option),
        label: String(option),
    }));

    return (
        <div className="grid gap-2 sm:flex sm:items-center sm:justify-between sm:gap-3">
            <div className="rounded-md border border-main-700/70 bg-main-900/35 px-3 py-2 text-sm text-main-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
                {total > 0 ? (
                    <div className="whitespace-nowrap">
                        <span className="hidden sm:inline">Показано </span>
                        <span className="font-semibold text-main-50">
                            {from ?? 1}
                        </span>
                        {" - "}
                        <span className="font-semibold text-main-50">
                            {to ?? total}
                        </span>
                        <span className="text-main-400"> из </span>
                        <span className="font-semibold text-main-50">
                            {total}
                        </span>
                    </div>
                ) : (
                    "Нет записей"
                )}
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-2 sm:flex sm:flex-row sm:items-center sm:gap-3">
                {onPerPageChange && (
                    <div className="flex min-w-0 items-center justify-between gap-2 rounded-md bg-main-900/35 text-sm text-main-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
                        <span className="truncate hidden sm:inline">
                            На странице
                        </span>
                        <Select
                            value={String(perPage)}
                            disabled={disabled}
                            onChange={(value) => onPerPageChange(Number(value))}
                            options={perPageSelectOptions}
                            className="w-16"
                            menuWidth={80}
                            menuPlacement="bottom-left"
                        >
                            <Select.Trigger
                                rounded="rounded"
                                className="h-8 w-16 border-main-700 bg-main-900 px-2 text-sm font-semibold sm:h-9"
                            />
                            <Select.Menu
                                rounded="rounded-lg"
                                className="border border-main-700 bg-main-900 text-main-100"
                            >
                                {perPageSelectOptions.map((option) => (
                                    <Select.Option
                                        key={option.value}
                                        {...option}
                                        rounded="rounded-md"
                                        className="justify-center px-2 py-1 text-sm"
                                    />
                                ))}
                            </Select.Menu>
                        </Select>
                    </div>
                )}

                <nav
                    className="flex items-center justify-end gap-1 rounded-md border border-main-700/70 bg-main-900/35 p-1 sm:border-0 sm:bg-transparent sm:p-0"
                    aria-label="Пагинация"
                >
                    <Button
                        variant="secondary"
                        disabled={disabled || isFirstPage}
                        onClick={() => onPageChange(page - 1)}
                        className="flex size-8 items-center justify-center p-0 disabled:cursor-not-allowed disabled:opacity-50 sm:size-9"
                        title="Предыдущая страница"
                    >
                        <Icon icon="mdi:chevron-left" width={20} height={20} />
                    </Button>

                    {visiblePages.map((visiblePage, index) =>
                        visiblePage === "dots" ? (
                            <span
                                key={`dots-${index}`}
                                className="flex size-8 items-center justify-center text-main-500 sm:size-9"
                            >
                                ...
                            </span>
                        ) : (
                            <Button
                                key={visiblePage}
                                variant={
                                    visiblePage === page
                                        ? "primary"
                                        : "secondary"
                                }
                                disabled={disabled || visiblePage === page}
                                onClick={() => onPageChange(visiblePage)}
                                className="flex size-8 items-center justify-center p-0 text-sm font-bold disabled:cursor-default disabled:opacity-100 sm:size-9"
                                title={`Страница ${visiblePage}`}
                            >
                                {visiblePage}
                            </Button>
                        ),
                    )}

                    <Button
                        variant="secondary"
                        disabled={disabled || isLastPage}
                        onClick={() => onPageChange(page + 1)}
                        className="flex size-8 items-center justify-center p-0 disabled:cursor-not-allowed disabled:opacity-50 sm:size-9"
                        title="Следующая страница"
                    >
                        <Icon icon="mdi:chevron-right" width={20} height={20} />
                    </Button>
                </nav>
            </div>
        </div>
    );
};
