import styles from "./Pagination.module.css";
import { Icon } from "../_shared/icons";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import { useLocale } from "../../hooks/useLocale";
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
    ref,
}: PaginationProps) => {
    const t = useLocale().pagination;
    const normalizedLastPage = Math.max(lastPage, 1);
    const visiblePages = getVisiblePages(page, normalizedLastPage);
    const isFirstPage = page <= 1;
    const isLastPage = page >= normalizedLastPage;
    const perPageSelectOptions = perPageOptions.map((option) => ({
        value: String(option),
        label: String(option),
    }));

    return (
        <div ref={ref} className={styles.s0}>
            <div className={styles.s1}>
                {total > 0 ? (
                    <div className={styles.s2}>
                        <span className={styles.s3}>{t.shownPrefix} </span>
                        <span className={styles.s4}>{from ?? 1}</span>
                        {" - "}
                        <span className={styles.s5}>{to ?? total}</span>
                        <span className={styles.s6}> {t.shownSeparator} </span>
                        <span className={styles.s7}>{total}</span>
                    </div>
                ) : (
                    t.empty
                )}
            </div>

            <div className={styles.s8}>
                {onPerPageChange && (
                    <div className={styles.s9}>
                        <span className={styles.s10}>{t.perPage}</span>
                        <Select
                            value={String(perPage)}
                            disabled={disabled}
                            onChange={(value) => onPerPageChange(Number(value))}
                            options={perPageSelectOptions}
                            className={styles.s11}
                            menuWidth={80}
                            menuPlacement="bottom-left"
                        >
                            <Select.Trigger
                                rounded="rounded"
                                className={styles.s12}
                            />
                            <Select.Menu
                                rounded="rounded-lg"
                                className={styles.s13}
                            >
                                {perPageSelectOptions.map((option) => (
                                    <Select.Option
                                        key={option.value}
                                        {...option}
                                        rounded="rounded-md"
                                        className={styles.s14}
                                    />
                                ))}
                            </Select.Menu>
                        </Select>
                    </div>
                )}

                <nav className={styles.s15} aria-label={t.label}>
                    <Button
                        variant="secondary"
                        disabled={disabled || isFirstPage}
                        onClick={() => onPageChange(page - 1)}
                        className={styles.s16}
                        title={t.previousPage}
                    >
                        <Icon icon="chevron-left" width={20} height={20} />
                    </Button>

                    {visiblePages.map((visiblePage, index) =>
                        visiblePage === "dots" ? (
                            <span key={`dots-${index}`} className={styles.s17}>
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
                                className={styles.s18}
                                title={t.page(visiblePage)}
                            >
                                {visiblePage}
                            </Button>
                        ),
                    )}

                    <Button
                        variant="secondary"
                        disabled={disabled || isLastPage}
                        onClick={() => onPageChange(page + 1)}
                        className={styles.s19}
                        title={t.nextPage}
                    >
                        <Icon icon="chevron-right" width={20} height={20} />
                    </Button>
                </nav>
            </div>
        </div>
    );
};
