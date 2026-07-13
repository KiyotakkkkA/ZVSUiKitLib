"use client";
import { useState } from "react";
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputRange() {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return <InputRange value={value} onChange={setValue} />;
}

