# Pagination

## Table of contents

- [Import](#import)
- [API](#api)
  - [PaginationPageItem](#paginationpageitem)
  - [Pagination](#pagination)
- [Example](#example)

## Import

```tsx
import { Pagination } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### PaginationPageItem

```ts
type PaginationPageItem = number | "dots";
```

### Pagination

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLDivElement>` | - | No | Receives the pagination root element. |
| `page` | `number` | - | Yes | The page used by the component. |
| `perPage` | `number` | - | Yes | The per page used by the component. |
| `total` | `number` | - | Yes | The total used by the component. |
| `lastPage` | `number` | - | Yes | The last page used by the component. |
| `from` | `number \| null` | - | No | The from used by the component. |
| `to` | `number \| null` | - | No | The to used by the component. |
| `disabled` | `boolean` | `false` | No | Whether disabled is enabled. |
| `onPageChange` | `(page: number) => void` | - | Yes | Callback invoked when page change occurs. |
| `onPerPageChange` | `(perPage: number) => void` | - | No | Callback invoked when per page change occurs. |
| `perPageOptions` | `number[]` | `[10, 20, 50]` | No | The per page options used by the component. |


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
