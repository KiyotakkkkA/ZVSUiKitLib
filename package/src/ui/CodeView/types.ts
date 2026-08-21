import type { CSSProperties, ComponentPropsWithoutRef, ReactNode, Ref } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";

export type CodeViewProps = Omit<
    ComponentPropsWithoutRef<"div">,
    "children"
> & {
    /** Receives the code view root element. */
    ref?: Ref<HTMLDivElement>;
    /** The code used by the component. */
    code: string;
    /** The language used by the component. */
    language?: BundledLanguage | string;
    /** The theme used by the component. */
    theme?: BundledTheme;
    /** The file name identifier. */
    fileName?: string;
    /** The content rendered inside the component. */
    children?: ReactNode;
    /** The copyable used by the component. */
    copyable?: boolean;
    /** The downloadable used by the component. */
    downloadable?: boolean;
    /** The default actions used by the component. */
    defaultActions?: boolean;
    /** The maximum height of the code content area. */
    maxContentHeight?: CSSProperties["maxHeight"];
    /** Callback invoked when copy occurs. */
    onCopy?: (code: string) => void | Promise<void>;
    /** Callback invoked when download occurs. */
    onDownload?: (code: string) => void;
};

export type CodeViewHeaderProps = ComponentPropsWithoutRef<"div"> & {
    /** The content rendered inside the component. */
    children?: ReactNode;
    /** Whether show language is enabled. */
    showLanguage?: boolean;
    /** Whether show file name is enabled. */
    showFileName?: boolean;
    /** The actions used by the component. */
    actions?: ReactNode;
};

export type CodeViewContentProps = ComponentPropsWithoutRef<"div"> & {
    /** Function used to loading fallback. */
    loadingFallback?: ReactNode;
    /** The maximum height of the component content. */
    maxHeight?: CSSProperties["maxHeight"];
};

export type CodeViewContextValue = {
    /** The code used by the component. */
    code: string;
    /** The language used by the component. */
    language: string;
    /** The file name identifier. */
    fileName?: string;
    /** The html used by the component. */
    html: string;
    /** Whether is loading is enabled. */
    isLoading: boolean;
    /** The copyable used by the component. */
    copyable: boolean;
    /** The downloadable used by the component. */
    downloadable: boolean;
    /** The default actions used by the component. */
    defaultActions: boolean;
    /** The maximum height of the code content area. */
    maxContentHeight?: CSSProperties["maxHeight"];
    /** The copy code used by the component. */
    copyCode: () => Promise<void>;
    /** The download code used by the component. */
    downloadCode: () => void;
};
