"use client";
import { Alert } from "@kiyotakkkka/zvs-uikit-lib";
export function AlertPreview() {
    return (
        <div style={{ display: "grid", gap: 12 }}>
            {(["neutral", "success", "warning", "danger", "info"] as const).map(
                (v) => (
                    <Alert
                        key={v}
                        variant={v}
                        title={`${v[0].toUpperCase()}${v.slice(1)} alert`}
                    >
                        This is a {v} notification.
                    </Alert>
                ),
            )}
        </div>
    );
}
