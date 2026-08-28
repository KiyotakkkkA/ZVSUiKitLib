```tsx
"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <div className="grid w-full max-w-md gap-6">
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
            <InputBig
                label="Причина отклонения"
                defaultValue="Слишком коротко"
                error="Минимум 40 символов."
                minRows={2}
            />
        </div>
    );
}
```
