```tsx
"use client";
import { Pagination } from "@kiyotakkkka/zvs-uikit-lib";
export function PaginationExample() {
    return (
        <Pagination
            page={2}
            perPage={10}
            total={137}
            lastPage={14}
            from={11}
            to={20}
            onPageChange={() => {}}
        />
    );
}
```
