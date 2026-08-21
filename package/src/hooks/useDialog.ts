import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR = [
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "iframe",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]:not([contenteditable='false'])",
    "[tabindex]:not([tabindex='-1'])",
].join(",");

const isVisible = (element: HTMLElement) =>
    element.offsetWidth > 0 ||
    element.offsetHeight > 0 ||
    element.getClientRects().length > 0;

const getFocusable = (container: HTMLElement) =>
    Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ).filter(
        (element) =>
            !element.hasAttribute("inert") &&
            element.getAttribute("aria-hidden") !== "true" &&
            isVisible(element),
    );

let scrollLockCount = 0;
let restoreOverflow = "";
let restorePaddingRight = "";

const lockBodyScroll = () => {
    const { body } = document;

    if (scrollLockCount === 0) {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        restoreOverflow = body.style.overflow;
        restorePaddingRight = body.style.paddingRight;
        body.style.overflow = "hidden";

        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`;
        }
    }

    scrollLockCount += 1;
};

const unlockBodyScroll = () => {
    scrollLockCount = Math.max(0, scrollLockCount - 1);

    if (scrollLockCount === 0) {
        const { body } = document;
        body.style.overflow = restoreOverflow;
        body.style.paddingRight = restorePaddingRight;
    }
};

export type UseDialogOptions = {
    /** Whether the dialog is currently rendered as open. */
    open: boolean;
    /** Called when the user dismisses the dialog with Escape. */
    onClose: () => void;
    /** Whether Escape dismisses the dialog. */
    closeOnEscape?: boolean;
    /** Whether page scrolling is blocked while the dialog is open. */
    lockScroll?: boolean;
};

export function useDialog<T extends HTMLElement>({
    open,
    onClose,
    closeOnEscape = true,
    lockScroll = true,
}: UseDialogOptions) {
    const containerRef = useRef<T | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!open || !container) return;

        const previouslyFocused = document.activeElement as HTMLElement | null;
        const focusable = getFocusable(container);

        (focusable[0] ?? container).focus({ preventScroll: true });

        return () => {
            if (previouslyFocused && previouslyFocused.isConnected) {
                previouslyFocused.focus({ preventScroll: true });
            }
        };
    }, [open]);

    useEffect(() => {
        if (!open || !lockScroll) return;

        lockBodyScroll();
        return unlockBodyScroll;
    }, [open, lockScroll]);

    useEffect(() => {
        const container = containerRef.current;

        if (!open || !container) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (closeOnEscape && event.key === "Escape") {
                event.stopPropagation();
                onClose();
                return;
            }

            if (event.key !== "Tab") return;

            const focusable = getFocusable(container);

            if (focusable.length === 0) {
                event.preventDefault();
                container.focus({ preventScroll: true });
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (!container.contains(active)) {
                event.preventDefault();
                first.focus({ preventScroll: true });
                return;
            }

            if (event.shiftKey && active === first) {
                event.preventDefault();
                last.focus({ preventScroll: true });
                return;
            }

            if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus({ preventScroll: true });
            }
        };

        document.addEventListener("keydown", onKeyDown, true);
        return () => document.removeEventListener("keydown", onKeyDown, true);
    }, [open, onClose, closeOnEscape]);

    return containerRef;
}
