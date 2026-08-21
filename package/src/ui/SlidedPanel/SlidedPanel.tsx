import styles from "./SlidedPanel.module.css";
import {
    createContext,
    useContext,
    useEffect,
    useId,
    useState,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "../_shared/icons";
import { cn, mergeRefs } from "../../lib/utils";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import { useDialog } from "../../hooks/useDialog";
import { useLocale } from "../../hooks/useLocale";
import type {
    SlidedPanelProps,
    SlidedPanelHeaderProps,
    SlidedPanelTitleProps,
    SlidedPanelSubtitleProps,
    SlidedPanelContentProps,
    SlidedPanelFooterProps,
    SlidedPanelContextValue,
    SlidedPanelPlacement,
} from "./types";

const overlayPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s0,
    right: styles.s1,
    bottom: styles.s2,
    left: styles.s3,
};

const panelPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s4,
    right: styles.s5,
    bottom: styles.s6,
    left: styles.s7,
};

const closedPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s8,
    right: styles.s9,
    bottom: styles.s10,
    left: styles.s11,
};

const openPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s12,
    right: styles.s13,
    bottom: styles.s14,
    left: styles.s15,
};

const SlidedPanelContext = createContext<
    (SlidedPanelContextValue & {
        titleId: string;
        registerTitle: (registered: boolean) => void;
    })
    | null
>(null);

function useSlidedPanelContext() {
    const context = useContext(SlidedPanelContext);

    if (!context) {
        throw new Error(
            "SlidedPanel.Header, SlidedPanel.Title, SlidedPanel.Subtitle, SlidedPanel.Content and SlidedPanel.Footer must be used inside SlidedPanel.",
        );
    }

    return context;
}

function SlidedPanelRoot({
    open,
    onClose,
    children,
    className,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    label,
    ref,
    panelPlacement = "right",
}: SlidedPanelProps) {
    const portalContainer = usePortalContainer();
    const titleId = useId();
    const [hasTitle, setHasTitle] = useState(false);
    const panelRef = useDialog<HTMLElement>({
        open,
        onClose,
        closeOnEscape,
    });

    const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
            onClose();
        }
    };

    if (!portalContainer) {
        return null;
    }

    return createPortal(
        <SlidedPanelContext.Provider
            value={{ open, onClose, titleId, registerTitle: setHasTitle }}
        >
            <div
                className={cn(
                    styles.s16,
                    overlayPlacementClasses[panelPlacement],
                    open ? styles.s17 : styles.s18,
                )}
                onClick={onOverlayClick}
                inert={!open}
                aria-hidden={!open}
            >
                <section
                    ref={mergeRefs(panelRef, ref)}
                    role="dialog"
                    aria-modal
                    aria-label={hasTitle ? undefined : label}
                    aria-labelledby={hasTitle ? titleId : undefined}
                    tabIndex={-1}
                    className={cn(
                        styles.s19,
                        styles.s20,
                        panelPlacementClasses[panelPlacement],
                        open
                            ? cn(
                                  openPlacementClasses[panelPlacement],
                                  styles.s21,
                              )
                            : cn(
                                  closedPlacementClasses[panelPlacement],
                                  styles.s22,
                              ),
                        className,
                    )}
                >
                    {children}
                </section>
            </div>
        </SlidedPanelContext.Provider>,
        portalContainer,
    );
}

function SlidedPanelHeader({
    className,
    children,
    ...props
}: SlidedPanelHeaderProps) {
    const { onClose } = useSlidedPanelContext();
    const t = useLocale().slidedPanel;

    return (
        <header className={cn(styles.s23, className)} {...props}>
            <div className={styles.s24}>{children}</div>

            <button
                type="button"
                aria-label={t.close}
                className={styles.s25}
                onClick={onClose}
            >
                <Icon icon="close" width={18} height={18} />
            </button>
        </header>
    );
}

function SlidedPanelTitle({
    className,
    children,
    id,
    ...props
}: SlidedPanelTitleProps) {
    const { titleId, registerTitle } = useSlidedPanelContext();

    useEffect(() => {
        registerTitle(true);
        return () => registerTitle(false);
    }, [registerTitle]);

    return (
        <p id={id ?? titleId} className={cn(styles.s26, className)} {...props}>
            {children}
        </p>
    );
}

function SlidedPanelSubtitle({
    className,
    children,
    ...props
}: SlidedPanelSubtitleProps) {
    return (
        <p className={cn(styles.s27, className)} {...props}>
            {children}
        </p>
    );
}

function SlidedPanelContent({
    className,
    children,
    ...props
}: SlidedPanelContentProps) {
    return (
        <div className={cn(styles.s28, className)} {...props}>
            {children}
        </div>
    );
}

function SlidedPanelFooter({
    className,
    children,
    ...props
}: SlidedPanelFooterProps) {
    return (
        <footer className={cn(styles.s29, className)} {...props}>
            {children}
        </footer>
    );
}

export const SlidedPanel = Object.assign(SlidedPanelRoot, {
    Header: SlidedPanelHeader,
    Title: SlidedPanelTitle,
    Subtitle: SlidedPanelSubtitle,
    Content: SlidedPanelContent,
    Footer: SlidedPanelFooter,
});
