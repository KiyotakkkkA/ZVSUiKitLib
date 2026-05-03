# Table

## Purpose

Typed table with compound API and sortable columns.

## Import

```tsx
import { Table } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## API

### `Table`


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

### `Table.Header`


| Prop              | Type                                   | Default | Description               |
| ----------------- | -------------------------------------- | ------- | ------------------------- |
| className         | string                                 | -       | `thead` classes.          |
| classNames        | object                                 | -       | Header slot classes.      |
| sortModes         | `Record<string, { sortFn; sortIcon }>` | -       | Sorting mode map.         |
| defaultSortMode   | string                                 | -       | Initial sorting mode key. |
| defaultSortColumn | `Extract<keyof T, string>`             | -       | Initial sorting column.   |

### `Table.Header` `classNames` slots

| Slot       | Description               |
| ---------- | ------------------------- |
| root       | `thead` classes.          |
| row        | Header row classes.       |
| cell       | Header cell classes.      |
| sortButton | Header sort button class. |

### `Table.Body`


| Prop       | Type      | Default        | Description                                        |
| ---------- | --------- | -------------- | -------------------------------------------------- |
| className  | string    | -              | `tbody` classes.                                   |
| classNames | object    | -              | Body slot classes.                                 |
| emptyState | ReactNode | `"Нет данных"` | Content when data is empty.                        |
| children   | ReactNode | -              | Row template using `Table.Row` and `Table.Column`. |

### `Table.Body` `classNames` slots

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

### `Table.Footer`


| Prop       | Type      | Default | Description          |
| ---------- | --------- | ------- | -------------------- |
| className  | string    | -       | `tfoot` classes.     |
| classNames | object    | -       | Footer slot classes. |
| children   | ReactNode | -       | Footer content.      |

### `Table.Footer` `classNames` slots

| Slot | Description          |
| ---- | -------------------- |
| root | `tfoot` classes.     |
| row  | Footer row classes.  |
| cell | Footer cell classes. |

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
