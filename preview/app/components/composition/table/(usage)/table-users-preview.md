```tsx
"use client";
import {
    Badge,
    Button,
    Dropdown,
    EmptyState,
    Icon,
    InputSmall,
    Table,
    type TableColumn,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useMemo, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    role: "Owner" | "Admin" | "Member";
    online: boolean;
    color: string;
};

const users: User[] = [
    { id: 1, name: "Alisa Kim", email: "alisa@acme.dev", role: "Owner", online: true, color: "bg-violet-500" },
    { id: 2, name: "Mark Ortiz", email: "mark@acme.dev", role: "Admin", online: true, color: "bg-sky-500" },
    { id: 3, name: "Lena Novak", email: "lena@acme.dev", role: "Member", online: false, color: "bg-emerald-500" },
    { id: 4, name: "Omar Haddad", email: "omar@acme.dev", role: "Member", online: false, color: "bg-amber-500" },
];

const initials = (name: string) =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("");

const columns: TableColumn<User>[] = [
    {
        key: "name",
        title: "Member",
        render: (user) => (
            <div className="flex items-center gap-3">
                <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold text-white ${user.color}`}
                >
                    {initials(user.name)}
                </span>
                <div className="min-w-0">
                    <p className="truncate text-main-100">{user.name}</p>
                    <p className="truncate text-xs text-main-400">
                        {user.email}
                    </p>
                </div>
            </div>
        ),
        sortModes: [
            {
                key: "asc",
                icon: <Icon icon="chevron-down" className="rotate-180" />,
                direction: "ascending",
                sortFn: (left, right) => left.name.localeCompare(right.name),
            },
            {
                key: "desc",
                icon: <Icon icon="chevron-down" />,
                direction: "descending",
                sortFn: (left, right) => right.name.localeCompare(left.name),
            },
        ],
    },
    {
        key: "role",
        title: "Role",
        render: (user) => (
            <Badge
                size="sm"
                variant={user.role === "Owner" ? "tertiary" : "secondary"}
            >
                {user.role}
            </Badge>
        ),
    },
    {
        key: "status",
        title: "Status",
        render: (user) => (
            <span className="inline-flex items-center gap-2 text-xs text-main-300">
                <span
                    className={`size-2 rounded-full ${user.online ? "bg-emerald-400" : "bg-main-600"}`}
                />
                {user.online ? "Online" : "Offline"}
            </span>
        ),
    },
    {
        key: "actions",
        title: <span className="sr-only">Actions</span>,
        headerClassName: "w-12",
        render: (user) => (
            <Dropdown menuWidth={180} menuPlacement="bottom-right">
                <Dropdown.Trigger
                    icon={<Icon icon="tune-variant" />}
                    className="h-8 w-8 justify-center gap-0 border-transparent bg-transparent px-0 hover:bg-main-800"
                >
                    <span className="sr-only">Actions for {user.name}</span>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item icon={<Icon icon="pencil-outline" />}>
                        Edit
                    </Dropdown.Item>
                    <Dropdown.Item icon={<Icon icon="email-outline" />}>
                        Send email
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Icon icon="trash-can-outline" />}
                        disabled={user.role === "Owner"}
                    >
                        Remove
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        ),
    },
];

export function DemoTableUsers() {
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(normalized) ||
                user.email.toLowerCase().includes(normalized),
        );
    }, [query]);

    return (
        <div className="w-full max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="w-64">
                    <InputSmall
                        preset="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onClear={() => setQuery("")}
                        placeholder="Search members"
                    />
                </div>
                <Button>
                    <Icon icon="account" />
                    Invite member
                </Button>
            </div>
            <Table
                data={filtered}
                columns={columns}
                rowKey="id"
                caption="Team members"
                emptyMessage={
                    <EmptyState
                        icon={<Icon icon="magnify" />}
                        title="No members found"
                        description={`Nothing matches “${query}”. Try another name or email.`}
                        className="min-h-40 border-0 bg-transparent"
                    />
                }
            />
        </div>
    );
}
```
