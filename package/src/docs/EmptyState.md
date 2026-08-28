# EmptyState

## Table of contents

- [Import](#import)
- [API](#api)
    - [EmptyState](#emptystate)
        - [EmptyStateClassNames](#emptystateclassnames)
- [Example](#example)

## Import

```tsx
import { EmptyState } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### EmptyState

| Property      | Type                   | Default | Required | Description                                 |
| ------------- | ---------------------- | ------- | -------- | ------------------------------------------- |
| `ref`         | `Ref<HTMLDivElement>`  | -       | No       | Receives the empty-state root element.      |
| `icon`        | `ReactNode`            | -       | No       | Content rendered for the icon.              |
| `title`       | `ReactNode`            | -       | Yes      | Text used for the title.                    |
| `description` | `ReactNode`            | -       | No       | Text used for the description.              |
| `action`      | `ReactNode`            | -       | No       | The action used by the component.           |
| `className`   | `DivClassName`         | -       | No       | CSS classes applied to the root element.    |
| `classNames`  | `EmptyStateClassNames` | -       | No       | CSS classes applied to the component slots. |

### EmptyStateClassNames

| Property      | Description                       |
| ------------- | --------------------------------- |
| `icon`        | Content rendered for the icon.    |
| `title`       | Text used for the title.          |
| `description` | Text used for the description.    |
| `action`      | The action used by the component. |

```tsx
"use client";
import { Button, EmptyState } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoEmptyState() {
    return (
        <EmptyState
            title="No projects"
            description="Create a project to start working with this workspace."
            action={<Button>Create project</Button>}
        />
    );
}
```
