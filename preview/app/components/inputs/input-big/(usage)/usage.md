```tsx
"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <InputBig
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Комментарий"
            description="Добавьте контекст, который поможет быстрее разобраться."
            placeholder="Введите комментарий…"
            maxLength={500}
            showCount
            autoResize
        />
    );
}
```

