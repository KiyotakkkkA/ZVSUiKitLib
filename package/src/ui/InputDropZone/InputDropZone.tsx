import { Icon } from "@iconify/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import type { InputDropZoneProps, SelectedFileItem } from "./types";

const imageFileIcon = "mdi:file-image-outline";
const genericFileIcon = "mdi:file-outline";

const getAcceptRules = (accept: string) => {
    return accept
        .split(",")
        .map((rule) => rule.trim().toLowerCase())
        .filter(Boolean);
};

const isAcceptedFile = (file: File, accept: string) => {
    const rules = getAcceptRules(accept);

    if (rules.length === 0) {
        return true;
    }

    const fileName = file.name.toLowerCase();
    const fileType = file.type.toLowerCase();

    return rules.some((rule) => {
        if (rule === "*/*") {
            return true;
        }

        if (rule.startsWith(".")) {
            return fileName.endsWith(rule);
        }

        if (rule.endsWith("/*")) {
            return fileType.startsWith(rule.slice(0, -1));
        }

        return fileType === rule;
    });
};

const getFirstAcceptedFile = (files: FileList | null, accept: string) => {
    const file = files?.[0];

    if (!file) {
        return null;
    }

    return isAcceptedFile(file, accept) ? file : null;
};

const getAcceptedFiles = (files: FileList | null, accept: string) => {
    return Array.from(files ?? []).filter((file) =>
        isAcceptedFile(file, accept),
    );
};

const isImageFile = (file: File) => file.type.startsWith("image/");

const getFileIcon = (file: File, fallbackIcon: string) => {
    return isImageFile(file) ? imageFileIcon : fallbackIcon;
};

export const InputDropZone = ({
    file = null,
    files = [],
    previewUrls = [],
    onChange,
    onFilesChange,
    multiple = false,
    disabled = false,
    accept = "image/*",
    emptyIcon = "mdi:image-plus-outline",
    selectedIcon = "mdi:image-check-outline",
    emptyTitle = "Перетащите картинку сюда",
    emptyDescription = "или нажмите для выбора файла",
    selectedDescription = "Файл будет загружен.",
    clearLabel = "Удалить файл",
    previewAlt = "Предпросмотр изображения вопроса",
    selectedMultipleDescription = "Нажмите или перетащите файлы, чтобы добавить еще.",
    clearAllLabel = "Удалить все файлы",
    fileIcon = genericFileIcon,
    uploadedFileLabel = "Загруженный файл",
}: InputDropZoneProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const selectedFiles = useMemo(() => {
        return multiple ? files : file ? [file] : [];
    }, [file, files, multiple]);
    const selectedPreviewUrls = useMemo(() => {
        return multiple ? previewUrls : previewUrls.slice(0, 1);
    }, [multiple, previewUrls]);

    const filePreviewUrls = useMemo(() => {
        return selectedFiles.map((selectedFile) =>
            isImageFile(selectedFile)
                ? URL.createObjectURL(selectedFile)
                : null,
        );
    }, [selectedFiles]);

    const selectedItems = useMemo<SelectedFileItem[]>(() => {
        const previewItems = selectedPreviewUrls.map((url, index) => ({
            id: `preview-${url}-${index}`,
            name:
                selectedPreviewUrls.length > 1
                    ? `${uploadedFileLabel} ${index + 1}`
                    : uploadedFileLabel,
            previewSrc: url,
            icon: imageFileIcon,
            source: "preview" as const,
            index,
        }));
        const fileItems = selectedFiles.map((selectedFile, index) => ({
            id: `${selectedFile.name}-${selectedFile.lastModified}-${index}`,
            name: selectedFile.name,
            previewSrc: filePreviewUrls[index],
            icon: getFileIcon(selectedFile, fileIcon),
            source: "file" as const,
            index,
        }));

        return [...previewItems, ...fileItems];
    }, [
        fileIcon,
        filePreviewUrls,
        selectedFiles,
        selectedPreviewUrls,
        uploadedFileLabel,
    ]);
    const hasSelection = selectedItems.length > 0;
    const isActiveDragging = isDragging && !disabled;

    useEffect(() => {
        return () => {
            filePreviewUrls.forEach((url) => {
                if (url) {
                    URL.revokeObjectURL(url);
                }
            });
        };
    }, [filePreviewUrls]);

    const handleFile = (nextFile: File | null) => {
        if (disabled) {
            return;
        }

        onChange?.(nextFile, []);
    };

    const handleFiles = (nextFiles: File[]) => {
        if (disabled) {
            return;
        }

        onFilesChange?.([...files, ...nextFiles], previewUrls);
    };

    const removeItem = (item: SelectedFileItem) => {
        if (disabled) {
            return;
        }

        if (!multiple) {
            handleFile(null);
            return;
        }

        if (item.source === "preview") {
            onFilesChange?.(
                files,
                previewUrls.filter(
                    (_, previewIndex) => previewIndex !== item.index,
                ),
            );
            return;
        }

        onFilesChange?.(
            files.filter((_, fileIndex) => fileIndex !== item.index),
            previewUrls,
        );
    };

    const clearFiles = () => {
        if (disabled) {
            return;
        }

        if (multiple) {
            onFilesChange?.([], []);
            return;
        }

        handleFile(null);
    };

    return (
        <div className="space-y-3">
            <button
                type="button"
                disabled={disabled}
                onClick={() => {
                    if (!disabled) {
                        inputRef.current?.click();
                    }
                }}
                onDragOver={(event) => {
                    event.preventDefault();
                    if (disabled) {
                        return;
                    }

                    setIsDragging(true);
                }}
                onDragLeave={() => {
                    if (!disabled) {
                        setIsDragging(false);
                    }
                }}
                onDrop={(event) => {
                    event.preventDefault();
                    setIsDragging(false);
                    if (disabled) {
                        return;
                    }

                    if (multiple) {
                        handleFiles(
                            getAcceptedFiles(event.dataTransfer.files, accept),
                        );
                    } else {
                        handleFile(
                            getFirstAcceptedFile(
                                event.dataTransfer.files,
                                accept,
                            ),
                        );
                    }
                }}
                className={cn(
                    "flex min-h-32 w-full items-center justify-center rounded-md border border-dashed p-4 text-left transition",
                    disabled
                        ? "cursor-not-allowed border-main-700/60 bg-main-900/25 opacity-60"
                        : isActiveDragging
                          ? "border-main-300 bg-main-800/70"
                          : "border-main-700/80 bg-transparent hover:border-main-500 hover:bg-main-800/35",
                )}
            >
                {hasSelection && !multiple && selectedItems[0].previewSrc ? (
                    <span className="grid w-full gap-3 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-center">
                        <span className="h-28 overflow-hidden rounded-md border border-main-700/80">
                            <img
                                src={selectedItems[0].previewSrc}
                                alt={previewAlt}
                                className="h-full w-full object-cover"
                            />
                        </span>
                        <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold text-main-50">
                                {selectedItems[0].name}
                            </span>
                            <span className="mt-1 block text-sm leading-6 text-main-400">
                                Нажмите или перетащите новый файл, чтобы
                                заменить текущий.
                            </span>
                        </span>
                    </span>
                ) : hasSelection && !multiple ? (
                    <span className="flex w-full flex-col items-center text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-main-700/65 text-main-100">
                            <Icon
                                icon={selectedItems[0].icon}
                                width={26}
                                height={26}
                            />
                        </span>
                        <span className="mt-3 max-w-full truncate text-sm font-semibold text-main-100">
                            {selectedItems[0].name}
                        </span>
                        <span className="mt-1 text-xs text-main-400">
                            {selectedDescription}
                        </span>
                    </span>
                ) : hasSelection ? (
                    <span className="flex w-full flex-col items-center text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-main-700/65 text-main-100">
                            <Icon icon={selectedIcon} width={26} height={26} />
                        </span>
                        <span className="mt-3 text-sm font-semibold text-main-100">
                            Выбрано файлов: {selectedItems.length}
                        </span>
                        <span className="mt-1 text-xs text-main-400">
                            {selectedMultipleDescription}
                        </span>
                    </span>
                ) : (
                    <span className="flex flex-col items-center text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-main-700/65 text-main-100">
                            <Icon icon={emptyIcon} width={26} height={26} />
                        </span>
                        <span className="mt-3 text-sm font-semibold text-main-100">
                            {emptyTitle}
                        </span>
                        <span className="mt-1 text-xs text-main-400">
                            {emptyDescription}
                        </span>
                    </span>
                )}
            </button>

            {multiple && hasSelection && (
                <div className="grid gap-2">
                    {selectedItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 rounded-md border border-main-700 bg-main-800/40 p-2"
                        >
                            {item.previewSrc ? (
                                <span className="h-12 w-12 overflow-hidden rounded border border-main-700">
                                    <img
                                        src={item.previewSrc}
                                        alt={`${previewAlt} ${item.index + 1}`}
                                        className="h-full w-full object-cover"
                                    />
                                </span>
                            ) : (
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-main-700 text-main-300">
                                    <Icon
                                        icon={item.icon}
                                        width={22}
                                        height={22}
                                    />
                                </span>
                            )}
                            <span className="min-w-0 flex-1 truncate text-sm font-semibold text-main-100">
                                {item.name}
                            </span>
                            <button
                                type="button"
                                disabled={disabled}
                                onClick={() => removeItem(item)}
                                className="text-sm font-semibold text-danger-light transition hover:text-danger-medium disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {hasSelection && (
                <button
                    type="button"
                    disabled={disabled}
                    onClick={clearFiles}
                    className="text-sm font-semibold text-danger-light transition hover:text-danger-medium disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {multiple ? clearAllLabel : clearLabel}
                </button>
            )}

            <input
                ref={inputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                disabled={disabled}
                className="hidden"
                onChange={(event) => {
                    if (disabled) {
                        event.target.value = "";
                        return;
                    }

                    if (multiple) {
                        handleFiles(
                            getAcceptedFiles(event.target.files, accept),
                        );
                    } else {
                        handleFile(
                            getFirstAcceptedFile(event.target.files, accept),
                        );
                    }
                    event.target.value = "";
                }}
            />
        </div>
    );
};
