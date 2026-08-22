```tsx
"use client";
import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type NotificationModel = {
    email: boolean;
    sms: boolean;
};

export function DemoInputCheckBoxGroup() {
    const [model, setModel] = useState<NotificationModel>({
        email: false,
        sms: false,
    });

    return (
        <InputCheckBoxGroup
            model={model}
            onModelChange={setModel}
            default="email"
            multiple
        >
            <InputCheckBox modelValue="email" />
            <InputCheckBox modelValue="sms" />
        </InputCheckBoxGroup>
    );
}
```

`multiple={false}` makes the group exclusive. `default` is used only as the
initial fallback and does not prevent the last active checkbox from being
cleared.
