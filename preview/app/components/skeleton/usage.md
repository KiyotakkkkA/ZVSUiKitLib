```tsx
import { Skeleton } from "@kiyotakkkka/zvs-uikit-lib";
export function SkeletonExample() {
    return (
        <div className="w-96 space-y-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" tone="subtle" />
            <Skeleton className="h-4 w-2/3" tone="strong" />
        </div>
    );
}
```
