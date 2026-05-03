import { useContext } from "react";
import { StyleContext } from "../lib/context";

export function useStyle() {
    const context = useContext(StyleContext);

    if (!context) {
        throw new Error("useStyle must be used within StyleProvider");
    }

    return context;
}
