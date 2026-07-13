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

