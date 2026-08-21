/**
 * The sort-state machine behind Table. Kept free of React so the cycle through
 * a column's sort modes can be tested on its own.
 */

export type SortState = {
    /** The column key currently sorted, or null when unsorted. */
    columnKey: string | null;
    /** The active mode of that column, or null when unsorted. */
    modeKey: string | null;
};

export const UNSORTED: SortState = { columnKey: null, modeKey: null };

/**
 * Returns the state after clicking a column header. Clicking a new column
 * starts at its first mode; clicking the active column advances through its
 * modes and then returns to unsorted.
 */
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
