```tsx
import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoProgressBar() {
    return (
        <div className="flex flex-col gap-4 p-2">
            <ProgressBar
                variant="primary"
                value={30}
                label="Primary"
                showValue
            />
            <ProgressBar
                variant="secondary"
                value={50}
                label="Secondary"
                showValue
            />
            <ProgressBar
                variant="tertiary"
                value={70}
                label="Tertiary"
                showValue
            />
            <ProgressBar
                variant="success"
                value={90}
                label="Success"
                showValue
            />
            <ProgressBar
                variant="warning"
                value={40}
                label="Warning"
                showValue
            />
            <ProgressBar variant="danger" value={60} label="Danger" showValue />
            <ProgressBar variant="info" value={80} label="Info" showValue />
        </div>
    );
}
```
