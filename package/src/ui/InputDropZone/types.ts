import type { ReactNode, Ref } from "react";

export type InputDropZoneProps = {
    /** Receives the drop zone root element. */
    ref?: Ref<HTMLDivElement>;
    /** The file used by the component. */
    file?: File | null;
    /** The files used by the component. */
    files?: File[];
    /** The preview urls used by the component. */
    previewUrls?: string[];
    /** Callback invoked when change occurs. */
    onChange?: (file: File | null, previewUrls: string[]) => void;
    /** Callback invoked when files change occurs. */
    onFilesChange?: (files: File[], previewUrls: string[]) => void;
    /** Whether multiple is enabled. */
    multiple?: boolean;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** The accept used by the component. */
    accept?: string;
    /** Content rendered for the empty icon. */
    emptyIcon?: ReactNode;
    /** Whether selected icon is enabled. */
    selectedIcon?: ReactNode;
    /** Text used for the empty title. */
    emptyTitle?: string;
    /** Text used for the empty description. */
    emptyDescription?: string;
    /** Whether selected description is enabled. */
    selectedDescription?: string;
    /** Function used to clear label. */
    clearLabel?: string;
    /** Text used for the preview alt. */
    previewAlt?: string;
    /** Whether selected multiple description is enabled. */
    selectedMultipleDescription?: string;
    /** Function used to clear all label. */
    clearAllLabel?: string;
    /** Content rendered for the file icon. */
    fileIcon?: ReactNode;
    /** Text used for the uploaded file label. */
    uploadedFileLabel?: string;
};

export type SelectedFileItem = {
    /** The id identifier. */
    id: string;
    /** The name identifier. */
    name: string;
    /** The preview src used by the component. */
    previewSrc: string | null;
    /** Content rendered for the icon. */
    icon: ReactNode;
    /** The source used by the component. */
    source: "file" | "preview";
    /** The index identifier. */
    index: number;
};
