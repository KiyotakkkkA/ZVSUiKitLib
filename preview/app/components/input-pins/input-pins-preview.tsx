"use client";
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function InputPinsPreview() {
    const [v, setV] = useState("");
    return (
        <InputPins
            value={v}
            onChange={setV}
            length={6}
            label="Verification code"
        />
    );
}
