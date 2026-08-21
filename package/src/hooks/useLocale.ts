import { useContext } from "react";
import { LocaleContext } from "../lib/context";
import { defaultDictionary } from "../locale/dictionary";

export function useLocale() {
    return useContext(LocaleContext) ?? defaultDictionary;
}
