import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getServerSnapshot = () => null;
const getSnapshot = () =>
    typeof document === "undefined" ? null : document.body;

export function usePortalContainer() {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
