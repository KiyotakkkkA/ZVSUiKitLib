"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <InputBig
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Comment"
            description="Some description about the input field."
            placeholder="Enter a comment…"
            maxLength={500}
            showCount
            autoResize
        />
    );
}
