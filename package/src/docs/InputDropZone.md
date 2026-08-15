# InputDropZone

## Table of contents

- [Import](#import)
- [API](#api)
    - [InputDropZone](#inputdropzone)
    - [SelectedFileItem](#selectedfileitem)
- [Example](#example)

## Import

```tsx
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputDropZone

| Property                      | Type                                                  | Default                                               | Required | Description                                       |
| ----------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | -------- | ------------------------------------------------- |
| `file`                        | `File \| null`                                        | `null`                                                | No       | The file used by the component.                   |
| `files`                       | `File[]`                                              | `[]`                                                  | No       | The files used by the component.                  |
| `previewUrls`                 | `string[]`                                            | `[]`                                                  | No       | The preview urls used by the component.           |
| `onChange`                    | `(file: File \| null, previewUrls: string[]) => void` | -                                                     | No       | Callback invoked when change occurs.              |
| `onFilesChange`               | `(files: File[], previewUrls: string[]) => void`      | -                                                     | No       | Callback invoked when files change occurs.        |
| `multiple`                    | `boolean`                                             | `false`                                               | No       | Whether multiple is enabled.                      |
| `disabled`                    | `boolean`                                             | `false`                                               | No       | Whether disabled is enabled.                      |
| `accept`                      | `string`                                              | `"image/*"`                                           | No       | The accept used by the component.                 |
| `emptyIcon`                   | `ReactNode`                                           | `<Icon icon="image-plus-outline" />`                  | No       | Content rendered for the empty icon.              |
| `selectedIcon`                | `ReactNode`                                           | `<Icon icon="image-check-outline" />`                 | No       | Whether selected icon is enabled.                 |
| `emptyTitle`                  | `string`                                              | `"Перетащите картинку сюда"`                          | No       | Text used for the empty title.                    |
| `emptyDescription`            | `string`                                              | `"или нажмите для выбора файла"`                      | No       | Text used for the empty description.              |
| `selectedDescription`         | `string`                                              | `"Файл будет загружен."`                              | No       | Whether selected description is enabled.          |
| `clearLabel`                  | `string`                                              | `"Удалить файл"`                                      | No       | Function used to clear label.                     |
| `previewAlt`                  | `string`                                              | `"Предпросмотр изображения вопроса"`                  | No       | Text used for the preview alt.                    |
| `selectedMultipleDescription` | `string`                                              | `"Нажмите или перетащите файлы, чтобы добавить еще."` | No       | Whether selected multiple description is enabled. |
| `clearAllLabel`               | `string`                                              | `"Удалить все файлы"`                                 | No       | Function used to clear all label.                 |
| `fileIcon`                    | `ReactNode`                                           | `<Icon icon="file-outline" />`                        | No       | Content rendered for the file icon.               |
| `uploadedFileLabel`           | `string`                                              | `"Загруженный файл"`                                  | No       | Text used for the uploaded file label.            |

### SelectedFileItem

| Property     | Type                  | Default | Required | Description                            |
| ------------ | --------------------- | ------- | -------- | -------------------------------------- |
| `id`         | `string`              | -       | Yes      | The id identifier.                     |
| `name`       | `string`              | -       | Yes      | The name identifier.                   |
| `previewSrc` | `string \| null`      | -       | Yes      | The preview src used by the component. |
| `icon`       | `ReactNode`           | -       | Yes      | Content rendered for the icon.         |
| `source`     | `"file" \| "preview"` | -       | Yes      | The source used by the component.      |
| `index`      | `number`              | -       | Yes      | The index identifier.                  |

## Example

```tsx
"use client";
import { useState } from "react";
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib";

export function InputDropZonePreview() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    return (
        <InputDropZone
            file={file}
            previewUrls={previewUrls}
            onChange={(nextFile, nextPreviewUrls) => {
                setFile(nextFile);
                setPreviewUrls(nextPreviewUrls);
            }}
        />
    );
}
```

### Multiple Example

```tsx
import { useState } from "react";
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib";

export function MultipleInputDropZonePreview() {
    const [files, setFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    return (
        <InputDropZone
            multiple
            files={files}
            previewUrls={previewUrls}
            onFilesChange={(nextFiles, nextPreviewUrls) => {
                setFiles(nextFiles);
                setPreviewUrls(nextPreviewUrls);
            }}
        />
    );
}
```
