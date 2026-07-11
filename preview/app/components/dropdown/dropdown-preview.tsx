"use client";
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function DropdownPreview() {
    return (
        <Dropdown>
            <Dropdown.Trigger>Actions</Dropdown.Trigger>
            <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Duplicate</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
