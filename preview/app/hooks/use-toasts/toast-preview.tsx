"use client";

import { Button, useToasts } from "@kiyotakkkka/zvs-uikit-lib";

const toastExamples = [
    ["primary", "New version available", "Refresh when you are ready."],
    ["secondary", "Storage almost full", "Only 10% of storage remains."],
    ["tertiary", "Changes saved", "Your settings were updated."],
    ["info", "New version available", "Refresh when you are ready."],
    ["warning", "Storage almost full", "Only 10% of storage remains."],
    ["success", "Changes saved", "Your settings were updated."],
    ["danger", "Could not save", "Check the connection and try again."],
] as const;

export function ToastPreview() {
    const toasts = useToasts();

    return (
        <div className="flex flex-wrap justify-center gap-3 p-8">
            {toastExamples.map(([type, title, description]) => (
                <Button
                    key={type}
                    variant={type}
                    onClick={() => toasts[type]({ title, description })}
                >
                    Show {type}
                </Button>
            ))}
        </div>
    );
}
