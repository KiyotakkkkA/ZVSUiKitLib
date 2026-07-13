import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "ScrollArea",
        "description": "Scrollable container with UI-kit scrollbar styling.",
        "props": {
            "orientation": {
                "type": "Orientation | \"both\"",
                "description": "Allowed scroll directions.",
                "defaultValue": "\"vertical\""
            },
            "showScrollbar": {
                "type": "boolean",
                "description": "Controls scrollbar chrome.",
                "defaultValue": "true"
            },
            "className": {
                "type": "string",
                "description": "Additional classes."
            },
            "children": {
                "type": "ReactNode",
                "description": "Rendered content."
            }
        }
    },
    "compound": []
};

