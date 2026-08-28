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
        <div className="w-full space-y-6">
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
            <Pagination
                page={1}
                perPage={10}
                total={137}
                lastPage={14}
                from={1}
                to={10}
                onPageChange={() => {}}
                onPerPageChange={() => {}}
                disabled
            />
        </div>
    );
}
```
