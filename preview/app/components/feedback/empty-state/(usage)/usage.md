```tsx
import { Button, EmptyState, Icon } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoEmptyState() {
    return (
        <EmptyState
            icon={<Icon icon="folder-open-outline" width={24} height={24} />}
            title="No projects"
            description="Create a project to start working with this workspace."
            action={<Button>Create project</Button>}
        />
    );
}
```
