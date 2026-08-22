```tsx
"use client";
import { useState } from "react";
import { Field, InputSmall } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoField() {
    const [email, setEmail] = useState("");
    const error = email && !email.includes("@") ? "Enter a valid email" : "";

    return (
        <Field
            label="Email"
            description="We only use this to send the receipt."
            error={error}
            required
        >
            {(field) => (
                <InputSmall
                    {...field}
                    preset="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            )}
        </Field>
    );
}
```
