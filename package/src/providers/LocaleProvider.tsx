import { useMemo, type PropsWithChildren } from "react";
import { LocaleContext } from "../lib/context";
import {
    defaultDictionary,
    mergeDictionary,
    type PartialZvsDictionary,
    type ZvsDictionary,
} from "../locale/dictionary";

export type LocaleProviderProps = PropsWithChildren<{
    /**
     * Strings that replace the defaults. Anything left out keeps the default
     * value, so a project can translate one component at a time.
     */
    dictionary?: PartialZvsDictionary;
    /** The dictionary the overrides are applied on top of. */
    base?: ZvsDictionary;
}>;

/**
 * Replaces the strings the components render by default. Without this
 * provider every component falls back to `defaultDictionary`.
 */
export function LocaleProvider({
    children,
    dictionary,
    base = defaultDictionary,
}: LocaleProviderProps) {
    const value = useMemo(
        () => mergeDictionary(base, dictionary),
        [base, dictionary],
    );

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
}

export type {
    PartialZvsDictionary,
    ZvsDictionary,
} from "../locale/dictionary";
