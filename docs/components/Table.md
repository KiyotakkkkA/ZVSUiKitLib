# Table

## Purpose

Typed table with compound API and sortable columns.

## Main Component: Table

### Props

| Prop           | Type                                | Default | Description                                              |
| -------------- | ----------------------------------- | ------- | -------------------------------------------------------- |
| data           | `T[]`                               | -       | Row data.                                                |
| schema         | `TableSchemaItem<T>[]`              | -       | Column schema.                                           |
| children       | ReactNode                           | -       | `Table.Header`, `Table.Body`, and `Table.Footer` blocks. |
| rowKey         | `(row: T, index: number) => string` | `index` | Row key resolver.                                        |
| className      | string                              | -       | Outer wrapper classes.                                   |
| tableClassName | string                              | -       | `<table>` classes.                                       |
| compact        | boolean                             | -       | Smaller text mode.                                       |
| striped        | boolean                             | -       | Zebra row styles.                                        |
| hoverable      | boolean                             | -       | Hover row styles.                                        |

## Child Component: Table.Header

### Props

| Prop              | Type                                   | Default | Description               |
| ----------------- | -------------------------------------- | ------- | ------------------------- |
| className         | string                                 | -       | `thead` classes.          |
| sortModes         | `Record<string, { sortFn; sortIcon }>` | -       | Sorting mode map.         |
| defaultSortMode   | string                                 | -       | Initial sorting mode key. |
| defaultSortColumn | `Extract<keyof T, string>`             | -       | Initial sorting column.   |

## Child Component: Table.Body

### Props

| Prop       | Type      | Default     | Description                                        |
| ---------- | --------- | ----------- | -------------------------------------------------- |
| className  | string    | -           | `tbody` classes.                                   |
| emptyState | ReactNode | `"No data"` | Content when data is empty.                        |
| children   | ReactNode | -           | Row template using `Table.Row` and `Table.Column`. |

## Child Component: Table.Row

### Props

Extends `HTMLAttributes<HTMLTableRowElement>`.

| Prop      | Type   | Default | Description                                                 |
| --------- | ------ | ------- | ----------------------------------------------------------- |
| row       | T      | -       | Explicit row data (optional in `Table.Body` template mode). |
| className | string | -       | `tr` classes.                                               |

## Child Component: Table.Column

### Props

Extends `TdHTMLAttributes<HTMLTableCellElement>` (except `children`).

| Prop      | Type                                    | Default | Description                             |
| --------- | --------------------------------------- | ------- | --------------------------------------- |
| field     | `Extract<keyof T, string>`              | -       | Row field key.                          |
| children  | `ReactNode \| ((context) => ReactNode)` | -       | Static cell content or render function. |
| className | string                                  | -       | `td` classes.                           |

## Child Component: Table.Footer

### Props

| Prop      | Type      | Default | Description      |
| --------- | --------- | ------- | ---------------- |
| className | string    | -       | `tfoot` classes. |
| children  | ReactNode | -       | Footer content.  |

## Example

```tsx
import { Table } from "@kiyotakkkka/zvs-uikit-lib/ui";

type User = { id: string; name: string; age: number };

const schema = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age", align: "right" as const },
];

const rows: User[] = [
    { id: "1", name: "Anna", age: 24 },
    { id: "2", name: "Ivan", age: 31 },
];

export function DemoTable() {
    return (
        <Table data={rows} schema={schema} rowKey={(row) => row.id} striped hoverable>
            <Table.Header
                sortModes={{
                    asc: {
                        sortIcon: "↑",
                        sortFn: (a, b, key) => String(a[key]).localeCompare(String(b[key])),
                    },
                    desc: {
                        sortIcon: "↓",
                        sortFn: (a, b, key) => String(b[key]).localeCompare(String(a[key])),
                    },
                }}
            />
            <Table.Body>
                <Table.Row>
                    <Table.Column<User, "name">{({ row }) => row?.name}</Table.Column>
                    <Table.Column<User, "age">{({ row }) => row?.age}</Table.Column>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}
```
