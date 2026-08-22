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
