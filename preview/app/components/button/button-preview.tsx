"use client";
import { Button } from "@kiyotakkkka/zvs-uikit-lib";
export function ButtonPreview() {
    return (
        <div className="min-w-150 p-4 space-y-2">
            <div className="space-x-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="success">Success</Button>
                <Button loading loadingText="Saving">
                    Save
                </Button>
            </div>
            <div className="space-x-2">
                <Button variant="primary-outline">Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger-outline">Danger</Button>
                <Button variant="warning-outline">Warning</Button>
                <Button variant="success-outline">Success</Button>
                <Button loading loadingText="Saving">
                    Save
                </Button>
            </div>
        </div>
    );
}
