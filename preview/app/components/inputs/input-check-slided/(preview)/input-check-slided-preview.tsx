"use client";
import { InputCheckSlided } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckSlided() {
    const [enabled, setEnabled] = useState(true);

    return <InputCheckSlided checked={enabled} onChange={setEnabled} />;
}

