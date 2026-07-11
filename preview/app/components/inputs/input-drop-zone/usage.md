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
