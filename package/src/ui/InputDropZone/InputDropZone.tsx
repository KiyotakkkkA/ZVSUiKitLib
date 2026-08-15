import styles from "./InputDropZone.module.css";
import { Icon } from "../_shared/icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import type { InputDropZoneProps, SelectedFileItem } from "./types";

const imageFileIcon = "file-image-outline";
const genericFileIcon = "file-outline";

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
    emptyIcon = "image-plus-outline",
    selectedIcon = "image-check-outline",
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
        <div className={styles.s0}>
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
                    styles.s1,
                    disabled
                        ? styles.s2
                        : isActiveDragging
                          ? styles.s3
                          : styles.s4,
                )}
            >
                {hasSelection && !multiple && selectedItems[0].previewSrc ? (
                    <span className={styles.s5}>
                        <span className={styles.s6}>
                            <img
                                src={selectedItems[0].previewSrc}
                                alt={previewAlt}
                                className={styles.s7}
                            />
                        </span>
                        <span className={styles.s8}>
                            <span className={styles.s9}>
                                {selectedItems[0].name}
                            </span>
                            <span className={styles.s10}>
                                Нажмите или перетащите новый файл, чтобы
                                заменить текущий.
                            </span>
                        </span>
                    </span>
                ) : hasSelection && !multiple ? (
                    <span className={styles.s11}>
                        <span className={styles.s12}>
                            <Icon
                                icon={selectedItems[0].icon}
                                width={26}
                                height={26}
                            />
                        </span>
                        <span className={styles.s13}>
                            {selectedItems[0].name}
                        </span>
                        <span className={styles.s14}>
                            {selectedDescription}
                        </span>
                    </span>
                ) : hasSelection ? (
                    <span className={styles.s15}>
                        <span className={styles.s16}>
                            <Icon icon={selectedIcon} width={26} height={26} />
                        </span>
                        <span className={styles.s17}>
                            Выбрано файлов: {selectedItems.length}
                        </span>
                        <span className={styles.s18}>
                            {selectedMultipleDescription}
                        </span>
                    </span>
                ) : (
                    <span className={styles.s19}>
                        <span className={styles.s20}>
                            <Icon icon={emptyIcon} width={26} height={26} />
                        </span>
                        <span className={styles.s21}>{emptyTitle}</span>
                        <span className={styles.s22}>{emptyDescription}</span>
                    </span>
                )}
            </button>

            {multiple && hasSelection && (
                <div className={styles.s23}>
                    {selectedItems.map((item) => (
                        <div key={item.id} className={styles.s24}>
                            {item.previewSrc ? (
                                <span className={styles.s25}>
                                    <img
                                        src={item.previewSrc}
                                        alt={`${previewAlt} ${item.index + 1}`}
                                        className={styles.s26}
                                    />
                                </span>
                            ) : (
                                <span className={styles.s27}>
                                    <Icon
                                        icon={item.icon}
                                        width={22}
                                        height={22}
                                    />
                                </span>
                            )}
                            <span className={styles.s28}>{item.name}</span>
                            <button
                                type="button"
                                disabled={disabled}
                                onClick={() => removeItem(item)}
                                className={styles.s29}
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
                    className={styles.s30}
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
                className={styles.s31}
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
