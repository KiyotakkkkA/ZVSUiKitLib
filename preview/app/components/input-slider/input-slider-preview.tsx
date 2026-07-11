"use client";
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";
export function InputSliderPreview() {
    const [v, setV] = useState(40);
    return <InputSlider value={v} onChange={setV} showValue />;
}
