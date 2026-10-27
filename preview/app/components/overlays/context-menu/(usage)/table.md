```tsx
"use client";
import { Badge, ContextMenu, Icon } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type Role = "Owner" | "Editor" | "Viewer";

type Member = {
    id: number;
    name: string;
    email: string;
    role: Role;
};

const roles: Role[] = ["Owner", "Editor", "Viewer"];

const initialMembers: Member[] = [
    { id: 1, name: "Alisa Kim", email: "alisa@acme.dev", role: "Owner" },
    { id: 2, name: "Mark Ortiz", email: "mark@acme.dev", role: "Editor" },
    { id: 3, name: "Lena Novak", email: "lena@acme.dev", role: "Viewer" },
];

export function DemoContextMenuTable() {
    const [members, setMembers] = useState(initialMembers);

    const setRole = (id: number, role: Role) =>
        setMembers((current) =>
            current.map((member) =>
                member.id === id ? { ...member, role } : member,
            ),
        );

    const remove = (id: number) =>
        setMembers((current) => current.filter((member) => member.id !== id));

    return (
        <div className="w-full max-w-xl space-y-3">
            <div className="overflow-hidden rounded-xl border border-main-700/70">
                <div className="grid grid-cols-[1fr_1fr_6rem] bg-main-800/60 px-4 py-2 text-xs font-medium text-main-400">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Role</span>
                </div>
                {members.map((member) => (
                    <ContextMenu key={member.id}>
                        <ContextMenu.Trigger className="grid cursor-default select-none grid-cols-[1fr_1fr_6rem] items-center border-t border-main-700/70 px-4 py-2.5 text-sm transition-colors hover:bg-main-800/40">
                            <span className="truncate text-main-100">
                                {member.name}
                            </span>
                            <span className="truncate text-main-400">
                                {member.email}
                            </span>
                            <span>
                                <Badge
                                    size="sm"
                                    variant={
                                        member.role === "Owner"
                                            ? "tertiary"
                                            : "secondary"
                                    }
                                >
                                    {member.role}
                                </Badge>
                            </span>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Label>{member.name}</ContextMenu.Label>
                            <ContextMenu.Item
                                leftSlot={<Icon icon="account" />}
                            >
                                View profile
                            </ContextMenu.Item>
                            <ContextMenu.Item
                                leftSlot={<Icon icon="content-copy" />}
                                onClick={() =>
                                    navigator.clipboard?.writeText(member.email)
                                }
                            >
                                Copy email
                            </ContextMenu.Item>
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger
                                    leftSlot={<Icon icon="shield-account" />}
                                >
                                    Change role
                                </ContextMenu.SubTrigger>
                                <ContextMenu.SubContent sideOffset={4}>
                                    {roles.map((role) => (
                                        <ContextMenu.Item
                                            key={role}
                                            inset={member.role !== role}
                                            leftSlot={
                                                member.role === role ? (
                                                    <Icon icon="check" />
                                                ) : undefined
                                            }
                                            onClick={() =>
                                                setRole(member.id, role)
                                            }
                                        >
                                            {role}
                                        </ContextMenu.Item>
                                    ))}
                                </ContextMenu.SubContent>
                            </ContextMenu.Sub>
                            <ContextMenu.Separator />
                            <ContextMenu.ItemDanger
                                leftSlot={<Icon icon="trash-can-outline" />}
                                disabled={member.role === "Owner"}
                                onClick={() => remove(member.id)}
                            >
                                Remove from team
                            </ContextMenu.ItemDanger>
                        </ContextMenu.Content>
                    </ContextMenu>
                ))}
            </div>
            <p className="font-mono text-xs text-main-500">
                Right-click a row. The owner cannot be removed.
            </p>
        </div>
    );
}
```
