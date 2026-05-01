# Dropdown

## Purpose

Generic dropdown popup container with positioning, outside-click handling, Escape closing, optional custom trigger, and controllable width/placement.

`Dropdown` does not render options or search by itself. Use `Select` when you need a single-value selector with searchable options.

## Props

| Prop          | Type                                          | Default     | Description                                                     |
| ------------- | --------------------------------------------- | ----------- | --------------------------------------------------------------- |
| children      | `ReactNode \| ({ open, close }) => ReactNode` | -           | Popup content. Render function receives state and close helper. |
| label         | ReactNode                                     | -           | Default trigger label.                                          |
| placeholder   | string                                        | `"Открыть"` | Default trigger text when `label` is empty.                     |
| className     | string                                        | -           | Outer wrapper classes.                                          |
| menuWidth     | number \| string                              | `220`       | Popup width.                                                    |
| classNames    | object                                        | -           | Classes for internal slots.                                     |
| disabled      | boolean                                       | `false`     | Disables trigger.                                               |
| ariaLabel     | string                                        | -           | `aria-label` value for the trigger.                             |
| menuPlacement | `"bottom" \| "top"`                           | `"bottom"`  | Popup placement relative to the trigger.                        |
| menuRole      | `"menu" \| "listbox"`                         | `"menu"`    | ARIA role for the popup and `aria-haspopup`.                    |
| onOpenChange  | `(open: boolean) => void`                     | -           | Called when open state changes.                                 |
| renderTrigger | custom render fn                              | -           | Full custom trigger rendering.                                  |

### classNames slots

| Slot    | Description             |
| ------- | ----------------------- |
| trigger | Trigger button classes. |
| menu    | Popup menu classes.     |

## Render trigger args

| Field      | Type                     | Description                               |
| ---------- | ------------------------ | ----------------------------------------- |
| open       | boolean                  | Current popup state.                      |
| toggleOpen | `() => void`             | Opens or closes the popup.                |
| triggerRef | `Ref<HTMLButtonElement>` | Ref that must be attached to the trigger. |
| disabled   | boolean                  | Current disabled state.                   |
| ariaProps  | object                   | ARIA props for the trigger.               |

## Example

```tsx
import { Dropdown, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoDropdown() {
    return (
        <Dropdown label="Actions" menuWidth={180}>
            {({ close }) => (
                <div className="flex flex-col gap-1">
                    <Button
                        className="justify-start bg-transparent text-main-300 hover:bg-main-700"
                        onClick={close}
                    >
                        Rename
                    </Button>
                    <Button
                        className="justify-start bg-transparent text-main-300 hover:bg-main-700"
                        onClick={close}
                    >
                        Duplicate
                    </Button>
                </div>
            )}
        </Dropdown>
    );
}
```
