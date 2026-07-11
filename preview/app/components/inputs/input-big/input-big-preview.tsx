"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <InputBig
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Comment"
            rows={4}
        />
    );
}
