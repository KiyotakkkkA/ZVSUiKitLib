```tsx
"use client";
import { useState } from "react";
import { Pagination } from "@kiyotakkkka/zvs-uikit-lib";

export function PaginationPreview() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const total = 137;
    const lastPage = Math.ceil(total / perPage);
    const from = (page - 1) * perPage + 1;
    const to = Math.min(page * perPage, total);

    return (
        <Pagination
            page={page}
            perPage={perPage}
            total={total}
            lastPage={lastPage}
            from={from}
            to={to}
            onPageChange={setPage}
            onPerPageChange={(nextPerPage) => {
                setPerPage(nextPerPage);
                setPage(1);
            }}
            perPageOptions={[10, 20, 50, 100]}
        />
    );
}
```

