"use client";
import {
    Badge,
    Pagination,
    Table,
    type TableColumn,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type Invoice = {
    id: string;
    customer: string;
    amount: number;
    status: "Paid" | "Pending";
};

const customers = ["Northwind", "Atlas", "Kitsune", "Aurora", "Orbit", "Nimbus"];

const invoices: Invoice[] = Array.from({ length: 47 }, (_, index) => ({
    id: `INV-${String(1001 + index)}`,
    customer: customers[index % customers.length],
    amount: 120 + ((index * 73) % 900),
    status: index % 4 === 0 ? "Pending" : "Paid",
}));

const columns: TableColumn<Invoice>[] = [
    { key: "id", title: "Invoice", accessor: "id" },
    { key: "customer", title: "Customer", accessor: "customer" },
    {
        key: "amount",
        title: "Amount",
        render: (row) => `$${row.amount.toLocaleString("en-US")}`,
        cellClassName: "tabular-nums",
    },
    {
        key: "status",
        title: "Status",
        render: (row) => (
            <Badge
                size="sm"
                variant={row.status === "Paid" ? "success" : "warning"}
            >
                {row.status}
            </Badge>
        ),
    },
];

export function DemoPaginationTable() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const lastPage = Math.max(1, Math.ceil(invoices.length / perPage));
    const from = (page - 1) * perPage;
    const visible = invoices.slice(from, from + perPage);

    return (
        <div className="w-full max-w-2xl space-y-3">
            <Table data={visible} columns={columns} rowKey="id" />
            <Pagination
                page={page}
                perPage={perPage}
                total={invoices.length}
                lastPage={lastPage}
                from={from + 1}
                to={from + visible.length}
                onPageChange={setPage}
                onPerPageChange={(next) => {
                    setPerPage(next);
                    setPage(1);
                }}
                perPageOptions={[5, 10, 20]}
            />
        </div>
    );
}
