"use client";
import { InputDropZone } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function InputDropZonePreview() {
    const [file, setFile] = useState<File | null>(null);
    return (
        <InputDropZone
            file={file}
            onChange={(next) => setFile(next)}
            accept="image/*"
        />
    );
}
