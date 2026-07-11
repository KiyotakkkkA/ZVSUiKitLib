# Table

## Purpose

Typed table with column-based rendering and per-column sorting modes.

## Import

```tsx
import { Table } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type                                           | Default | Description                             |
| ---------- | ---------------------------------------------- | ------- | --------------------------------------- |
| data       | `T[]`                                          | -       | Row data.                               |
| columns    | `TableColumn<T>[]`                             | -       | Column structure, rendering, and sorts. |
| rowKey     | `keyof T \| (item, index) => string \| number` | -       | Row key resolver.                       |
| classNames | `TableClassNames<T>`                           | -       | Slot classes for table parts.           |

## TableColumn fields

| Field           | Type                                    | Description                                      |
| --------------- | --------------------------------------- | ------------------------------------------------ |
| key             | string                                  | Unique column key. Also passed to `sortFn`.      |
| title           | ReactNode                               | Header content.                                  |
| accessor        | `keyof T`                               | Row field used when `render` is not provided.    |
| render          | `(item: T, index: number) => ReactNode` | Custom cell renderer.                            |
| headerClassName | string                                  | Additional header cell classes for this column.  |
| cellClassName   | `string \| (item, index) => string`     | Additional body cell classes for this column.    |
| className       | string                                  | Shared header/body cell classes for this column. |
| sortModes       | `TableSortMode<T>[]`                    | Sorting modes available for this column.         |

## TableSortMode fields

| Field  | Type                                 | Description                                 |
| ------ | ------------------------------------ | ------------------------------------------- |
| key    | string                               | Unique mode key inside the column.          |
| icon   | string                               | Header icon shown when this mode is active. |
| sortFn | `(left, right, columnKey) => number` | Compare function for this column and mode.  |

Only one column can be sorted at a time. Clicking a sortable column cycles through its `sortModes`; after the last mode the table returns to the original data order. Clicking another sortable column clears the previous column sort and enables the first mode of the new column.

## classNames slots

| Slot       | Description                                  |
| ---------- | -------------------------------------------- |
| root       | `table` classes.                             |
| header     | `thead` classes.                             |
| headerRow  | Header `tr` classes.                         |
| headerCell | Header `th` classes applied to every column. |
| sortButton | Sort button classes inside sortable headers. |
| body       | `tbody` classes.                             |
| row        | Static body `tr` classes.                    |
| rowDynamic | Dynamic body `tr` classes by row and index.  |
| cell       | Body `td` classes applied to every column.   |

## Example

```tsx
"use client";
import { Badge, Table, type TableColumn } from "@kiyotakkkka/zvs-uikit-lib";

type InvoiceRow = {
    id: string;
    name: string;
    status: "Paid" | "Review" | "Draft";
    amount: number;
    owner: string;
};

const rows: InvoiceRow[] = [
    {
        id: "1",
        name: "Aurora UI",
        status: "Paid",
        amount: 1240,
        owner: "Design",
    },
    {
        id: "2",
        name: "Atlas CRM",
        status: "Review",
        amount: 860,
        owner: "Product",
    },
    {
        id: "3",
        name: "Northwind",
        status: "Draft",
        amount: 430,
        owner: "Platform",
    },
];

const columns: TableColumn<InvoiceRow>[] = [
    {
        key: "name",
        title: "Project",
        accessor: "name",
        sortModes: [
            {
                key: "asc",
                icon: "↑",
                sortFn: (left, right) =>
                    left.name.localeCompare(right.name, "en"),
            },
            {
                key: "desc",
                icon: "↓",
                sortFn: (left, right) =>
                    right.name.localeCompare(left.name, "en"),
            },
        ],
    },
    {
        key: "status",
        title: "Status",
        render: (row) => (
            <Badge variant={row.status === "Paid" ? "success" : "warning"}>
                {row.status}
            </Badge>
        ),
    },
    { key: "owner", title: "Owner", accessor: "owner" },
    {
        key: "amount",
        title: "Amount",
        accessor: "amount",
        headerClassName: "text-right",
        cellClassName: "text-right",
        sortModes: [
            {
                key: "asc",
                icon: "↑",
                sortFn: (left, right) => left.amount - right.amount,
            },
            {
                key: "desc",
                icon: "↓",
                sortFn: (left, right) => right.amount - left.amount,
            },
        ],
    },
];

export function TablePreview() {
    return <Table data={rows} columns={columns} rowKey="id" />;
}
```
