"use client";
import { Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoButton() {
    return (
        <Button variant="primary" onClick={() => alert("Clicked")}>
            Save
        </Button>
    );
}

