```tsx
"use client";

import { useState } from "react";
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib";

export function MultipleInputDropZonePreview() {
    const [files, setFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    return (
        <div className="flex flex-wrap items-start gap-8">
            <InputDropZone
                multiple
                files={files}
                previewUrls={previewUrls}
                onFilesChange={(nextFiles, nextPreviewUrls) => {
                    setFiles(nextFiles);
                    setPreviewUrls(nextPreviewUrls);
                }}
            />
            <InputDropZone
                disabled
                files={[]}
                previewUrls={[]}
                onFilesChange={() => {}}
            />
        </div>
    );
}
```
