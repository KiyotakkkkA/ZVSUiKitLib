export type InputDropZoneProps = {
    file?: File | null;
    files?: File[];
    previewUrls?: string[];
    onChange?: (file: File | null, previewUrls: string[]) => void;
    onFilesChange?: (files: File[], previewUrls: string[]) => void;
    multiple?: boolean;
    disabled?: boolean;
    accept?: string;
    emptyIcon?: string;
    selectedIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
    selectedDescription?: string;
    clearLabel?: string;
    previewAlt?: string;
    selectedMultipleDescription?: string;
    clearAllLabel?: string;
    fileIcon?: string;
    uploadedFileLabel?: string;
};

export type SelectedFileItem = {
    id: string;
    name: string;
    previewSrc: string | null;
    icon: string;
    source: "file" | "preview";
    index: number;
};
