# CodeView

## Purpose

Code viewer with syntax highlighting, optional copy/download actions, and scrollable content.

## Props

### `CodeView` (root)

| Prop             | Type                              | Default     | Description                                      |
| ---------------- | --------------------------------- | ----------- | ------------------------------------------------ |
| code             | string                            | -           | Source code to render.                           |
| language         | string                            | `plaintext` | Language for syntax highlighting.                |
| theme            | string                            | `dark-plus` | Shiki theme name.                                |
| fileName         | string                            | -           | File name shown in header and used for download. |
| children         | ReactNode                         | -           | Custom layout using `CodeView.Header/Content`.   |
| copyable         | boolean                           | `true`      | Enable copy action.                              |
| downloadable     | boolean                           | `true`      | Enable download action.                          |
| defaultActions   | boolean                           | `true`      | Show default actions in header.                  |
| maxContentHeight | CSSProperties["maxHeight"]        | -           | Max height for the scroll area.                  |
| onCopy           | `(code) => void \| Promise<void>` | -           | Copy callback after clipboard write.             |
| onDownload       | `(code) => void`                  | -           | Custom download handler.                         |
| className        | string                            | -           | Root wrapper classes.                            |
| classNames       | object                            | -           | Slot class overrides.                            |

### `CodeView` classNames slots

| Slot     | Description          |
| -------- | -------------------- |
| header   | Header wrapper.      |
| content  | Content wrapper.     |
| loading  | Loading placeholder. |
| action   | Action button.       |
| language | Language badge.      |
| fileName | File name label.     |

### `CodeView.Header`

| Prop         | Type      | Default | Description                                 |
| ------------ | --------- | ------- | ------------------------------------------- |
| showLanguage | boolean   | `true`  | Show language badge.                        |
| showFileName | boolean   | `true`  | Show file name label.                       |
| actions      | ReactNode | -       | Custom actions (overrides default actions). |
| className    | string    | -       | Header wrapper classes.                     |
| children     | ReactNode | -       | Extra content placed near labels.           |

### `CodeView.Content`

| Prop            | Type      | Default | Description              |
| --------------- | --------- | ------- | ------------------------ |
| loadingFallback | ReactNode | -       | Custom loader content.   |
| maxHeight       | string    | -       | Max height override.     |
| className       | string    | -       | Content wrapper classes. |

## Example

```tsx
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/ui";

const code = `function sum(a, b) {\n  return a + b;\n}`;

export function DemoCodeView() {
    return (
        <CodeView
            code={code}
            language="javascript"
            fileName="sum.js"
            maxContentHeight={260}
            onCopy={() => console.log("Code copied!")}
        />
    );
}
```
