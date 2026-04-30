# EmptyState

## Purpose

Centered placeholder for empty lists, missing content, or first-run states.

## Props

| Prop        | Type      | Default | Description                 |
| ----------- | --------- | ------- | --------------------------- |
| icon        | ReactNode | -       | Optional icon area.         |
| title       | ReactNode | -       | Main empty state title.     |
| description | ReactNode | -       | Supporting text.            |
| action      | ReactNode | -       | Optional action control.    |
| className   | string    | -       | Root classes.               |
| classNames  | object    | -       | Classes for internal slots. |

### classNames slots

| Slot        | Description              |
| ----------- | ------------------------ |
| icon        | Icon wrapper classes.    |
| title       | Title classes.           |
| description | Description classes.     |
| action      | Action wrapper classes.  |

## Example

```tsx
import { Button, EmptyState } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
