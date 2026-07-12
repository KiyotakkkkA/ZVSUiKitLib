"use client";
import { Alert } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAlert() {
    return (
        <div className="space-y-2 p-2">
            <Alert variant="primary" title="Primary">
                Some text with primary styling.
            </Alert>
            <Alert variant="secondary" title="Secondary">
                Some text with secondary styling.
            </Alert>
            <Alert variant="tertiary" title="Highlighted update">
                Some text with tertiary styling.
            </Alert>
            <Alert variant="success" title="Success">
                Some text with success styling.
            </Alert>
            <Alert variant="warning" title="Warning">
                Some text with warning styling.
            </Alert>
            <Alert variant="danger" title="Danger">
                Some text with danger styling.
            </Alert>
            <Alert variant="info" title="Information">
                Some text with info styling.
            </Alert>
        </div>
    );
}
