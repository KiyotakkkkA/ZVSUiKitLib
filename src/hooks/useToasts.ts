import { useContext } from "react";
import { ToastContext } from "../lib/context";

export const useToasts = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToasts must be used within ToastProvider");
    }

    return context;
};
