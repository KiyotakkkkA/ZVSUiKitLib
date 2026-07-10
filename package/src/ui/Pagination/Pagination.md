# Pagination

## Purpose

Pagination control for server-side or externally managed lists, with page navigation, item range summary, and optional page-size selector.

## Import

```tsx
import { Pagination } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop            | Type                       | Default        | Description                                     |
| --------------- | -------------------------- | -------------- | ----------------------------------------------- |
| page            | number                     | -              | Current page number, starting from `1`.         |
| perPage         | number                     | -              | Current number of items per page.               |
| total           | number                     | -              | Total number of items.                          |
| lastPage        | number                     | -              | Last available page number.                     |
| from            | number \| null             | `1`            | First visible item number in the current page.  |
| to              | number \| null             | `total`        | Last visible item number in the current page.   |
| disabled        | boolean                    | `false`        | Disables page and page-size controls.           |
| onPageChange    | `(page: number) => void`   | -              | Called when the user selects another page.      |
| onPerPageChange | `(perPage: number) => void` | -              | Enables page-size selector and handles changes. |
| perPageOptions  | `number[]`                 | `[10, 20, 50]` | Page-size selector options.                     |

## Example

```tsx
import { useState } from "react";
import { Pagination } from "@kiyotakkkka/zvs-uikit-lib/ui";

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