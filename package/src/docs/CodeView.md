# CodeView

## Table of contents

- [Import](#import)
- [API](#api)
    - [CodeView](#codeview)
    - [CodeView.Header](#codeviewheader)
    - [CodeView.Content](#codeviewcontent)
    - [CodeViewContextValue](#codeviewcontextvalue)
- [Example](#example)

## Import

```tsx
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### CodeView

Extends: `Omit< ComponentPropsWithoutRef<"div">, "children" >`.

| Property           | Type                                      | Default         | Required | Description                                  |
| ------------------ | ----------------------------------------- | --------------- | -------- | -------------------------------------------- |
| `code`             | `string`                                  | -               | Yes      | The code used by the component.              |
| `language`         | `BundledLanguage \| string`               | -               | No       | The language used by the component.          |
| `theme`            | `BundledTheme`                            | `DEFAULT_THEME` | No       | The theme used by the component.             |
| `fileName`         | `string`                                  | -               | No       | The file name identifier.                    |
| `children`         | `ReactNode`                               | -               | No       | The content rendered inside the component.   |
| `copyable`         | `boolean`                                 | `true`          | No       | The copyable used by the component.          |
| `downloadable`     | `boolean`                                 | `true`          | No       | The downloadable used by the component.      |
| `defaultActions`   | `boolean`                                 | `true`          | No       | The default actions used by the component.   |
| `maxContentHeight` | `CSSProperties["maxHeight"]`              | -               | No       | The maximum height of the code content area. |
| `onCopy`           | `(code: string) => void \| Promise<void>` | -               | No       | Callback invoked when copy occurs.           |
| `onDownload`       | `(code: string) => void`                  | -               | No       | Callback invoked when download occurs.       |

### CodeView.Header

Extends: `ComponentPropsWithoutRef<"div">`.

| Property       | Type        | Default | Required | Description                                |
| -------------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children`     | `ReactNode` | -       | No       | The content rendered inside the component. |
| `showLanguage` | `boolean`   | `true`  | No       | Whether show language is enabled.          |
| `showFileName` | `boolean`   | `true`  | No       | Whether show file name is enabled.         |
| `actions`      | `ReactNode` | -       | No       | The actions used by the component.         |

### CodeView.Content

Extends: `ComponentPropsWithoutRef<"div">`.

| Property          | Type                         | Default | Required | Description                                  |
| ----------------- | ---------------------------- | ------- | -------- | -------------------------------------------- |
| `loadingFallback` | `ReactNode`                  | -       | No       | Function used to loading fallback.           |
| `maxHeight`       | `CSSProperties["maxHeight"]` | -       | No       | The maximum height of the component content. |

### CodeViewContextValue

| Property           | Type                         | Default | Required | Description                                  |
| ------------------ | ---------------------------- | ------- | -------- | -------------------------------------------- |
| `code`             | `string`                     | -       | Yes      | The code used by the component.              |
| `language`         | `string`                     | -       | Yes      | The language used by the component.          |
| `fileName`         | `string`                     | -       | No       | The file name identifier.                    |
| `html`             | `string`                     | -       | Yes      | The html used by the component.              |
| `isLoading`        | `boolean`                    | -       | Yes      | Whether is loading is enabled.               |
| `copyable`         | `boolean`                    | -       | Yes      | The copyable used by the component.          |
| `downloadable`     | `boolean`                    | -       | Yes      | The downloadable used by the component.      |
| `defaultActions`   | `boolean`                    | -       | Yes      | The default actions used by the component.   |
| `maxContentHeight` | `CSSProperties["maxHeight"]` | -       | No       | The maximum height of the code content area. |
| `copyCode`         | `() => Promise<void>`        | -       | Yes      | The copy code used by the component.         |
| `downloadCode`     | `() => void`                 | -       | Yes      | The download code used by the component.     |

## Example

```tsx
"use client";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib";

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
