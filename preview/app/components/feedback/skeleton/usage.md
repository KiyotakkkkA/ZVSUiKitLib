```tsx
"use client";
import { Skeleton } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSkeleton() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-full" tone="subtle" rounded="sm" />
            <Skeleton className="h-4 w-2/3" tone="strong" />
        </div>
    );
}
```
