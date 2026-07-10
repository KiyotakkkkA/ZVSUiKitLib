# InputDropZone

## Purpose

File drop zone with click selection, drag-and-drop, preview rendering, and single or multiple file modes.

## Import

```tsx
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop                        | Type                                          | Default                                | Description                                      |
| --------------------------- | --------------------------------------------- | -------------------------------------- | ------------------------------------------------ |
| file                        | `File \| null`                                | `null`                                 | Selected file for single mode.                   |
| files                       | `File[]`                                      | `[]`                                   | Selected files for multiple mode.                |
| previewUrls                 | `string[]`                                    | `[]`                                   | Existing preview URLs. Single mode uses item `0`. |
| onChange                    | `(file, previewUrls) => void`                 | -                                      | Single mode change callback.                     |
| onFilesChange               | `(files, previewUrls) => void`                | -                                      | Multiple mode change callback.                   |
| multiple                    | boolean                                       | `false`                                | Enables multiple file selection.                 |
| disabled                    | boolean                                       | `false`                                | Disables click selection, drag-and-drop, and clearing files. |
| accept                      | string                                        | `"image/*"`                           | Accepted file types, same format as file input.  |
| emptyIcon                   | string                                        | `"mdi:image-plus-outline"`            | Icon shown when empty.                           |
| selectedIcon                | string                                        | `"mdi:image-check-outline"`           | Icon shown for multiple selected state.          |
| emptyTitle                  | string                                        | `"Перетащите картинку сюда"`          | Empty state title.                               |
| emptyDescription            | string                                        | `"или нажмите для выбора файла"`      | Empty state description.                         |
| selectedDescription         | string                                        | `"Файл будет загружен."`              | Single selected file description.                |
| clearLabel                  | string                                        | `"Удалить файл"`                      | Single clear button label.                       |
| previewAlt                  | string                                        | `"Предпросмотр изображения вопроса"`  | Image preview alt text.                          |
| selectedMultipleDescription | string                                        | -                                      | Multiple selected state description.             |
| clearAllLabel               | string                                        | `"Удалить все файлы"`                 | Multiple clear button label.                     |
| fileIcon                    | string                                        | `"mdi:file-outline"`                  | Fallback icon for non-image files.               |
| uploadedFileLabel           | string                                        | `"Загруженный файл"`                  | Label for existing preview URLs.                 |

`previewUrls` is always an array. For single-file usage pass one URL, for example `previewUrls={existingUrl ? [existingUrl] : []}`. The component renders URL values as-is and does not prefix or transform storage paths.

## Example

```tsx
import { useState } from "react";
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib/ui";

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

## Multiple Example

```tsx
import { useState } from "react";
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
