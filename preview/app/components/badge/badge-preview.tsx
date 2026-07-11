"use client";
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";
export function BadgePreview() {
    return (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["neutral", "success", "warning", "danger", "info"] as const).map(
                (v) => (
                    <Badge key={v} variant={v}>
                        {v}
                    </Badge>
                ),
            )}
        </div>
    );
}
