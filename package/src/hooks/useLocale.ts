import { useContext } from "react";
import { LocaleContext } from "../lib/context";
import { defaultDictionary } from "../locale/dictionary";

/**
 * Returns the active string dictionary. Unlike the other context hooks this
 * one does not require a provider: without `LocaleProvider` it returns the
 * defaults, so components work unconfigured.
 */
export function useLocale() {
    return useContext(LocaleContext) ?? defaultDictionary;
}
