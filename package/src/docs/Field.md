# Field

## Table of contents

- [Import](#import)
- [API](#api)
    - [FieldControlProps](#fieldcontrolprops)
    - [FieldState](#fieldstate)
    - [Field](#field)
        - [FieldClassNames](#fieldclassnames)
- [Example](#example)

## Import

```tsx
import { Field } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### FieldControlProps

| Property           | Type                   | Default | Required | Description                                                           |
| ------------------ | ---------------------- | ------- | -------- | --------------------------------------------------------------------- |
| `id`               | `string`               | -       | Yes      | The \`id\` to put on the control, matched by the label's \`htmlFor\`. |
| `aria-describedby` | `string \| undefined`  | -       | Yes      | The value for the control's \`aria-describedby\`, or \`undefined\`.   |
| `aria-invalid`     | `boolean \| undefined` | -       | Yes      | The value for the control's \`aria-invalid\`.                         |
| `required`         | `boolean \| undefined` | -       | Yes      | The value for the control's \`required\`.                             |

### FieldState

| Property  | Type      | Default | Required | Description                                   |
| --------- | --------- | ------- | -------- | --------------------------------------------- |
| `invalid` | `boolean` | -       | Yes      | Whether the field currently carries an error. |

### Field

| Property         | Type                                                         | Default | Required | Description                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------ | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | `(props: FieldControlProps, state: FieldState) => ReactNode` | -       | Yes      | Renders the control. Spread the first argument onto it so the label, description and error are wired to it for assistive technology; the second argument carries the field state. |
| `label`          | `ReactNode`                                                  | -       | No       | Labels the control.                                                                                                                                                               |
| `description`    | `ReactNode`                                                  | -       | No       | Explains the control below the label.                                                                                                                                             |
| `error`          | `ReactNode`                                                  | -       | No       | Marks the field invalid and renders the message below the control.                                                                                                                |
| `required`       | `boolean`                                                    | -       | No       | Marks the control as required.                                                                                                                                                    |
| `id`             | `string`                                                     | -       | No       | Overrides the generated control \`id\`.                                                                                                                                           |
| `requiredMarker` | `ReactNode`                                                  | `"*"`   | No       | Text of the marker rendered next to a required label.                                                                                                                             |
| `className`      | `DivClassName`                                               | -       | No       | CSS classes applied to the root element.                                                                                                                                          |
| `classNames`     | `FieldClassNames`                                            | -       | No       | CSS classes applied to the component slots.                                                                                                                                       |
| `ref`            | `Ref<HTMLDivElement>`                                        | -       | No       | Receives the field root element.                                                                                                                                                  |

### FieldClassNames

| Property         | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `label`          | Applies CSS classes to the field label.                       |
| `requiredMarker` | Applies CSS classes to the required marker next to the label. |
| `description`    | Applies CSS classes to the helper description.                |
| `error`          | Applies CSS classes to the error message.                     |
| `control`        | Applies CSS classes to the control wrapper.                   |

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
