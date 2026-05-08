# Table

## Purpose

Typed table with compound API and sortable columns.

## Import

```tsx
import { Table } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop      | Type                                | Default | Description                                              |
| --------- | ----------------------------------- | ------- | -------------------------------------------------------- |
| data      | `T[]`                               | -       | Row data.                                                |
| schema    | `TableSchemaItem<T>[]`              | -       | Column schema.                                           |
| children  | ReactNode                           | -       | `Table.Header`, `Table.Body`, and `Table.Footer` blocks. |
| rowKey    | `(row: T, index: number) => string` | `index` | Row key resolver.                                        |
| className | string                              | -       | Outer scroll wrapper classes.                            |
| striped   | boolean                             | -       | Zebra row styles.                                        |
| hoverable | boolean                             | -       | Hover row styles.                                        |

### TableSchemaItem fields

| Field      | Type                                  | Description                           |
| ---------- | ------------------------------------- | ------------------------------------- |
| key        | `Extract<keyof T, string>`            | Column key.                           |
| label      | ReactNode                             | Header label.                         |
| align      | `"left" \| "center" \| "right"`       | Text alignment for header/body cells. |
| width      | number \| string                      | Column width.                         |
| classNames | `{ cell?: string; header?: string }`  | Per-column classes for cell/header.   |
| render     | `(value, row, rowIndex) => ReactNode` | Custom cell renderer.                 |

## Compound parts

| Component      | Extends                                                      | Description                        |
| -------------- | ------------------------------------------------------------ | ---------------------------------- |
| `Table.Header` | `HTMLAttributes<HTMLTableSectionElement>`                    | Table header section.              |
| `Table.Body`   | `HTMLAttributes<HTMLTableSectionElement>`                    | Table body section.                |
| `Table.Row`    | `HTMLAttributes<HTMLTableRowElement>`                        | Table row, used in body template.  |
| `Table.Column` | `TdHTMLAttributes<HTMLTableCellElement>` (except `children`) | Table cell, used in body template. |
| `Table.Footer` | `HTMLAttributes<HTMLTableSectionElement>`                    | Table footer section.              |

### `Table.Header` props

| Prop              | Type                                   | Default | Description               |
| ----------------- | -------------------------------------- | ------- | ------------------------- |
| className         | string                                 | -       | `thead` classes.          |
| classNames        | object                                 | -       | Header slot classes.      |
| sortModes         | `Record<string, { sortFn; sortIcon }>` | -       | Sorting mode map.         |
| defaultSortMode   | string                                 | -       | Initial sorting mode key. |
| defaultSortColumn | `Extract<keyof T, string>`             | -       | Initial sorting column.   |

#### `Table.Header` `classNames` slots

| Slot       | Description               |
| ---------- | ------------------------- |
| root       | `thead` classes.          |
| row        | Header row classes.       |
| cell       | Header cell classes.      |
| sortButton | Header sort button class. |

### `Table.Body` props

| Prop       | Type      | Default        | Description                                        |
| ---------- | --------- | -------------- | -------------------------------------------------- |
| className  | string    | -              | `tbody` classes.                                   |
| classNames | object    | -              | Body slot classes.                                 |
| emptyState | ReactNode | `"Нет данных"` | Content when data is empty.                        |
| children   | ReactNode | -              | Row template using `Table.Row` and `Table.Column`. |

#### `Table.Body` `classNames` slots

| Slot  | Description               |
| ----- | ------------------------- |
| root  | `tbody` classes.          |
| row   | Row classes in body.      |
| empty | Empty-state cell classes. |

### `Table.Row`

Extends `HTMLAttributes<HTMLTableRowElement>`.

| Prop      | Type   | Default | Description                                                 |
| --------- | ------ | ------- | ----------------------------------------------------------- |
| row       | T      | -       | Explicit row data (optional in `Table.Body` template mode). |
| className | string | -       | `tr` classes.                                               |

### `Table.Column`

Extends `TdHTMLAttributes<HTMLTableCellElement>` (except `children`).

| Prop      | Type                                    | Default | Description                             |
| --------- | --------------------------------------- | ------- | --------------------------------------- |
| field     | `Extract<keyof T, string>`              | -       | Row field key.                          |
| children  | `ReactNode \| ((context) => ReactNode)` | -       | Static cell content or render function. |
| className | string                                  | -       | `td` classes.                           |

### `Table.Footer` props

| Prop       | Type      | Default | Description          |
| ---------- | --------- | ------- | -------------------- |
| className  | string    | -       | `tfoot` classes.     |
| classNames | object    | -       | Footer slot classes. |
| children   | ReactNode | -       | Footer content.      |

#### `Table.Footer` `classNames` slots

| Slot | Description          |
| ---- | -------------------- |
| root | `tfoot` classes.     |
| row  | Footer row classes.  |
| cell | Footer cell classes. |

## Example

```tsx
import {
    Badge,
    Table,
    type TableSchemaItem,
} from "@kiyotakkkka/zvs-uikit-lib/ui";

type InvoiceRow = {
    name: string;
    status: "Paid" | "Review" | "Draft";
    amount: number;
    owner: string;
};

const rows: InvoiceRow[] = [
    { name: "Aurora UI", status: "Paid", amount: 1240, owner: "Design" },
    { name: "Atlas CRM", status: "Review", amount: 860, owner: "Product" },
    { name: "Northwind", status: "Draft", amount: 430, owner: "Platform" },
];

const schema: TableSchemaItem<InvoiceRow>[] = [
    { key: "name" as const, label: "Project" },
    {
        key: "status" as const,
        label: "Status",
    },
    { key: "owner" as const, label: "Owner" },
    {
        key: "amount" as const,
        label: "Amount",
        align: "right" as const,
    },
];

const compareColumn = (
    left: InvoiceRow,
    right: InvoiceRow,
    key: Extract<keyof InvoiceRow, string>,
) => {
    if (key === "amount") {
        return Number(left[key]) - Number(right[key]);
    }

    return String(left[key]).localeCompare(String(right[key]), "en");
};

type TablePreviewProps = {
    striped?: boolean;
    hoverable?: boolean;
};

export function TablePreview({
    striped = true,
    hoverable = true,
}: TablePreviewProps) {
    return (
        <div className="w-full">
            <Table
                data={rows}
                schema={schema}
                striped={striped}
                hoverable={hoverable}
            >
                <Table.Header<InvoiceRow>
                    defaultSortColumn="name"
                    defaultSortMode="asc"
                    sortModes={{
                        asc: {
                            sortIcon: "↑",
                            sortFn: (left, right, key) =>
                                compareColumn(left, right, key),
                        },
                        desc: {
                            sortIcon: "↓",
                            sortFn: (left, right, key) =>
                                compareColumn(right, left, key),
                        },
                    }}
                />
                <Table.Body emptyState="No invoices">
                    <Table.Row<InvoiceRow>>
                        <Table.Column<InvoiceRow> field="name">
                            {(context) => (
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-main-100">
                                        {context.row?.name}
                                    </p>
                                </div>
                            )}
                        </Table.Column>
                        <Table.Column<InvoiceRow> field="status">
                            {(context) => (
                                <Badge
                                    variant={
                                        context.row?.status === "Paid"
                                            ? "success"
                                            : "warning"
                                    }
                                >
                                    {context.row?.status}
                                </Badge>
                            )}
                        </Table.Column>
                        <Table.Column<InvoiceRow> field="owner">
                            {(context) => (
                                <span className="rounded-md border border-main-600/70 bg-main-800/80 px-2 py-0.5 text-xs text-main-200">
                                    {context.row?.owner}
                                </span>
                            )}
                        </Table.Column>
                        <Table.Column<InvoiceRow> field="amount" align="right">
                            {(context) => (
                                <code className="rounded-md bg-main-800/90 px-2 py-1 text-xs text-main-200">
                                    $
                                    {context.row?.amount.toLocaleString(
                                        "en-US",
                                    )}
                                </code>
                            )}
                        </Table.Column>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}
```
