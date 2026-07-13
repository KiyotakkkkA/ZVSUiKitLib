"use client";
import { Icon } from "@iconify/react";
import { Select, type SelectOption } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const options: SelectOption[] = [
    {
        value: "user",
        label: "User",
        icon: <Icon icon="mdi:account" />,
    },
    {
        value: "admin",
        label: "Admin",
        icon: <Icon icon="mdi:shield-account" />,
        onClick: () => console.log("Admin selected"),
    },
];

export function DemoSelect() {
    const [role, setRole] = useState("user");

    return (
        <Select
            value={role}
            onChange={setRole}
            options={options}
            searchable
            placeholder="Select role"
        >
            <Select.Trigger />
            <Select.Menu>
                {options.map((option) => (
                    <Select.Option key={option.value} {...option} />
                ))}
            </Select.Menu>
        </Select>
    );
}
