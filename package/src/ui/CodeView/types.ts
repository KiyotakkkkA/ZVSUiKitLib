import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";

export type CodeViewProps = Omit<
    ComponentPropsWithoutRef<"div">,
    "children"
> & {
    code: string;
    language?: BundledLanguage | string;
    theme?: BundledTheme;
    fileName?: string;
    children?: ReactNode;
    copyable?: boolean;
    downloadable?: boolean;
    defaultActions?: boolean;
    maxContentHeight?: CSSProperties["maxHeight"];
    onCopy?: (code: string) => void | Promise<void>;
    onDownload?: (code: string) => void;
};

export type CodeViewHeaderProps = ComponentPropsWithoutRef<"div"> & {
    children?: ReactNode;
    showLanguage?: boolean;
    showFileName?: boolean;
    actions?: ReactNode;
};

export type CodeViewContentProps = ComponentPropsWithoutRef<"div"> & {
    loadingFallback?: ReactNode;
    maxHeight?: CSSProperties["maxHeight"];
};

export type CodeViewContextValue = {
    code: string;
    language: string;
    fileName?: string;
    html: string;
    isLoading: boolean;
    copyable: boolean;
    downloadable: boolean;
    defaultActions: boolean;
    maxContentHeight?: CSSProperties["maxHeight"];
    copyCode: () => Promise<void>;
    downloadCode: () => void;
};
