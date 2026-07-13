import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Skeleton",
        "description": "Public Skeleton component API.",
        "props": {
            "animated": {
                "type": "boolean",
                "description": "Enables shimmer animation.",
                "defaultValue": "true"
            },
            "rounded": {
                "type": "SkeletonRadius",
                "description": "Border radius preset.",
                "defaultValue": "\"md\""
            },
            "tone": {
                "type": "SkeletonTone",
                "description": "Background intensity preset.",
                "defaultValue": "\"default\""
            },
            "className": {
                "type": "string",
                "description": "Extra classes for size and layout."
            }
        }
    },
    "compound": []
};

