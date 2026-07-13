```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoButton() {
    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-fit p-2">
            <Button variant="primary">Primary</Button>
            <Button variant="primary" rounded="rounded-md">
                Primary Rounded
            </Button>
            <Button variant="primary-outline">Primary Outline</Button>

            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" rounded="rounded-md">
                Secondary Rounded
            </Button>
            <Button variant="ghost">Ghost</Button>

            <Button variant="tertiary">Tertiary</Button>
            <Button variant="tertiary" rounded="rounded-md">
                Tertiary Rounded
            </Button>
            <Button variant="tertiary-outline">Tertiary Outline</Button>

            <Button variant="success">Success</Button>
            <Button variant="success" rounded="rounded-md">
                Success Rounded
            </Button>
            <Button variant="success-outline">Success Outline</Button>

            <Button variant="warning">Warning</Button>
            <Button variant="warning" rounded="rounded-md">
                Warning Rounded
            </Button>
            <Button variant="warning-outline">Warning Outline</Button>

            <Button variant="danger">Danger</Button>
            <Button variant="danger" rounded="rounded-md">
                Danger Rounded
            </Button>
            <Button variant="danger-outline">Danger Outline</Button>

            <Button variant="info">Info</Button>
            <Button variant="info" rounded="rounded-md">
                Info Rounded
            </Button>
            <Button variant="info-outline">Info Outline</Button>
        </div>
    );
}
```
