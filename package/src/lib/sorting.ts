export type SortState = {
    /** The column key currently sorted, or null when unsorted. */
    columnKey: string | null;
    /** The active mode of that column, or null when unsorted. */
    modeKey: string | null;
};

export const UNSORTED: SortState = { columnKey: null, modeKey: null };

export const nextSortState = (
    current: SortState,
    columnKey: string,
    modeKeys: readonly string[],
): SortState => {
    if (modeKeys.length === 0) return current;

    if (current.columnKey !== columnKey || !current.modeKey) {
        return { columnKey, modeKey: modeKeys[0] };
    }

    const currentIndex = modeKeys.indexOf(current.modeKey);
    const nextMode = modeKeys[currentIndex + 1];

    if (!nextMode) return UNSORTED;

    return { columnKey, modeKey: nextMode };
};
