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

| Property                      | Type                                                  | Default                               | Required | Description                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------- | ------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                         | `Ref<HTMLDivElement>`                                 | -                                     | No       | Receives the drop zone root element.                                                                                                                      |
| `file`                        | `File \| null`                                        | `null`                                | No       | The file used by the component.                                                                                                                           |
| `files`                       | `File[]`                                              | `[]`                                  | No       | The files used by the component.                                                                                                                          |
| `previewUrls`                 | `string[]`                                            | `[]`                                  | No       | The preview urls used by the component.                                                                                                                   |
| `onChange`                    | `(file: File \| null, previewUrls: string[]) => void` | -                                     | No       | Callback invoked when change occurs.                                                                                                                      |
| `onFilesChange`               | `(files: File[], previewUrls: string[]) => void`      | -                                     | No       | Callback invoked when files change occurs.                                                                                                                |
| `multiple`                    | `boolean`                                             | `false`                               | No       | Whether multiple is enabled.                                                                                                                              |
| `disabled`                    | `boolean`                                             | `false`                               | No       | Whether disabled is enabled.                                                                                                                              |
| `accept`                      | `string`                                              | `"image/*"`                           | No       | The accept used by the component.                                                                                                                         |
| `emptyIcon`                   | `ReactNode`                                           | `<Icon icon="image-plus-outline" />`  | No       | Content rendered for the empty icon.                                                                                                                      |
| `selectedIcon`                | `ReactNode`                                           | `<Icon icon="image-check-outline" />` | No       | Whether selected icon is enabled.                                                                                                                         |
| `emptyTitle`                  | `string`                                              | -                                     | No       | Text used for the empty title. Defaults to the \`inputDropZone.emptyTitle\` string from the active locale dictionary.                                     |
| `emptyDescription`            | `string`                                              | -                                     | No       | Text used for the empty description. Defaults to the \`inputDropZone.emptyDescription\` string from the active locale dictionary.                         |
| `selectedDescription`         | `string`                                              | -                                     | No       | Whether selected description is enabled. Defaults to the \`inputDropZone.selectedDescription\` string from the active locale dictionary.                  |
| `clearLabel`                  | `string`                                              | -                                     | No       | Function used to clear label. Defaults to the \`inputDropZone.clearLabel\` string from the active locale dictionary.                                      |
| `previewAlt`                  | `string`                                              | -                                     | No       | Text used for the preview alt. Defaults to the \`inputDropZone.previewAlt\` string from the active locale dictionary.                                     |
| `selectedMultipleDescription` | `string`                                              | -                                     | No       | Whether selected multiple description is enabled. Defaults to the \`inputDropZone.selectedMultipleDescription\` string from the active locale dictionary. |
| `clearAllLabel`               | `string`                                              | -                                     | No       | Function used to clear all label. Defaults to the \`inputDropZone.clearAllLabel\` string from the active locale dictionary.                               |
| `fileIcon`                    | `ReactNode`                                           | `<Icon icon="file-outline" />`        | No       | Content rendered for the file icon.                                                                                                                       |
| `uploadedFileLabel`           | `string`                                              | -                                     | No       | Text used for the uploaded file label. Defaults to the \`inputDropZone.uploadedFileLabel\` string from the active locale dictionary.                      |

### SelectedFileItem

| Property     | Type                  | Default | Required | Description                            |
| ------------ | --------------------- | ------- | -------- | -------------------------------------- |
| `id`         | `string`              | -       | Yes      | The id identifier.                     |
| `name`       | `string`              | -       | Yes      | The name identifier.                   |
| `previewSrc` | `string \| null`      | -       | Yes      | The preview src used by the component. |
| `icon`       | `ReactNode`           | -       | Yes      | Content rendered for the icon.         |
| `source`     | `"file" \| "preview"` | -       | Yes      | The source used by the component.      |
| `index`      | `number`              | -       | Yes      | The index identifier.                  |

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
