"use client";
import { useState } from "react";
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputSlider() {
    const [value, setValue] = useState(40);

    return (
        <InputSlider
            value={value}
            onChange={setValue}
            min={0}
            max={100}
            step={5}
            showValue
            valueFormatter={(next) => `${next}%`}
        />
    );
}
