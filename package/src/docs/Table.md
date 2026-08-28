# Table

## Table of contents

- [Import](#import)
- [API](#api)
    - [TableRecord](#tablerecord)
    - [TableClassNameResolver](#tableclassnameresolver)
    - [TableSortMode](#tablesortmode)
    - [TableColumn](#tablecolumn)
    - [Table](#table)
        - [TableClassNames](#tableclassnames)
- [Example](#example)

## Import

```tsx
import { Table } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### TableRecord

```ts
type TableRecord = Record<string, unknown>;
```

### TableClassNameResolver

```ts
type TableClassNameResolver = string | ((item: T, index: number) => string);
```

### TableSortMode

| Property    | Type                                               | Default | Required | Description                                                           |
| ----------- | -------------------------------------------------- | ------- | -------- | --------------------------------------------------------------------- |
| `icon`      | `string`                                           | -       | Yes      | Content rendered for the icon.                                        |
| `key`       | `string`                                           | -       | Yes      | The key identifier.                                                   |
| `sortFn`    | `(left: T, right: T, columnKey: string) => number` | -       | Yes      | The sort fn used by the component.                                    |
| `direction` | `"ascending" \| "descending" \| "other"`           | -       | No       | The direction reported to assistive technology through \`aria-sort\`. |

### TableColumn

| Property          | Type                                    | Default | Required | Description                                |
| ----------------- | --------------------------------------- | ------- | -------- | ------------------------------------------ |
| `key`             | `string`                                | -       | Yes      | The key identifier.                        |
| `title`           | `ReactNode`                             | -       | Yes      | Text used for the title.                   |
| `accessor`        | `keyof T`                               | -       | No       | The accessor used by the component.        |
| `render`          | `(item: T, index: number) => ReactNode` | -       | No       | The render used by the component.          |
| `headerClassName` | `string`                                | -       | No       | CSS classes applied to the header element. |
| `cellClassName`   | `TableClassNameResolver<T>`             | -       | No       | CSS classes applied to the cell element.   |
| `className`       | `string`                                | -       | No       | CSS classes applied to the root element.   |
| `sortModes`       | `Array<TableSortMode<T>>`               | -       | No       | The sort modes used by the component.      |

### Table

| Property         | Type                                                        | Default | Required | Description                                                             |
| ---------------- | ----------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `ref`            | `Ref<HTMLTableElement>`                                     | -       | No       | Receives the \`<table>\` element.                                       |
| `data`           | `T[]`                                                       | -       | Yes      | The data used by the component.                                         |
| `columns`        | `Array<TableColumn<T>>`                                     | -       | Yes      | The columns used by the component.                                      |
| `rowKey`         | `keyof T \| ((item: T, index: number) => string \| number)` | -       | Yes      | The row key identifier.                                                 |
| `caption`        | `ReactNode`                                                 | -       | No       | Describes the table for assistive technology.                           |
| `captionVisible` | `boolean`                                                   | `false` | No       | Whether the caption is visible or exposed to assistive technology only. |
| `emptyMessage`   | `ReactNode`                                                 | -       | No       | Rendered in place of the body when \`data\` is empty.                   |
| `classNames`     | `TableClassNames<T>`                                        | -       | No       | CSS classes applied to the component slots.                             |

### TableClassNames

| Property     | Description                                 |
| ------------ | ------------------------------------------- |
| `root`       | The root used by the component.             |
| `header`     | Content rendered for the header.            |
| `headerRow`  | The header row used by the component.       |
| `headerCell` | The header cell used by the component.      |
| `sortButton` | The sort button used by the component.      |
| `body`       | The body used by the component.             |
| `row`        | The row used by the component.              |
| `rowDynamic` | The row dynamic used by the component.      |
| `cell`       | The cell used by the component.             |
| `caption`    | The caption used by the component.          |
| `empty`      | The empty state cell used by the component. |

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
