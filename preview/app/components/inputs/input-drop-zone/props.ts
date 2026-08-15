import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "InputDropZone",
        description: "Public InputDropZone component API.",
        props: {
            file: {
                type: "File / null",
                description: "Selected file for single mode.",
                defaultValue: "null",
            },
            files: {
                type: "File[]",
                description: "Selected files for multiple mode.",
                defaultValue: "[]",
            },
            previewUrls: {
                type: "string[]",
                description: "Existing preview URLs. Single mode uses item 0.",
                defaultValue: "[]",
            },
            onChange: {
                type: "(file, previewUrls) => void",
                description: "Single mode change callback.",
            },
            onFilesChange: {
                type: "(files, previewUrls) => void",
                description: "Multiple mode change callback.",
            },
            multiple: {
                type: "boolean",
                description: "Enables multiple file selection.",
                defaultValue: "false",
            },
            disabled: {
                type: "boolean",
                description:
                    "Disables click selection, drag-and-drop, and clearing files.",
                defaultValue: "false",
            },
            accept: {
                type: "string",
                description: "Accepted file types, same format as file input.",
                defaultValue: '"image/*"',
            },
            emptyIcon: {
                type: "ReactNode",
                description: "Icon content shown when no files are selected.",
                defaultValue: '<Icon icon="image-plus-outline" />',
            },
            selectedIcon: {
                type: "ReactNode",
                description: "Icon content shown for a multiple-file selection.",
                defaultValue: '<Icon icon="image-check-outline" />',
            },
            emptyTitle: {
                type: "string",
                description: "Empty state title.",
                defaultValue: '"Перетащите картинку сюда"',
            },
            emptyDescription: {
                type: "string",
                description: "Empty state description.",
                defaultValue: '"или нажмите для выбора файла"',
            },
            selectedDescription: {
                type: "string",
                description: "Single selected file description.",
                defaultValue: '"Файл будет загружен."',
            },
            clearLabel: {
                type: "string",
                description: "Single clear button label.",
                defaultValue: '"Удалить файл"',
            },
            previewAlt: {
                type: "string",
                description: "Image preview alt text.",
                defaultValue: '"Предпросмотр изображения вопроса"',
            },
            selectedMultipleDescription: {
                type: "string",
                description: "Multiple selected state description.",
            },
            clearAllLabel: {
                type: "string",
                description: "Multiple clear button label.",
                defaultValue: '"Удалить все файлы"',
            },
            fileIcon: {
                type: "ReactNode",
                description: "Fallback icon for non-image files.",
                defaultValue: '<Icon icon="file-outline" />',
            },
            uploadedFileLabel: {
                type: "string",
                description: "Label for existing preview URLs.",
                defaultValue: '"Загруженный файл"',
            },
        },
    },
    compound: [],
};
