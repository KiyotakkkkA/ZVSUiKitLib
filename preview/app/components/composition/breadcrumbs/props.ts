import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Breadcrumbs",
        "description": "Navigation trail with a shared separator.",
        "props": {
            "separator": {
                "type": "ReactNode",
                "description": "Content rendered between items.",
                "defaultValue": "\"/\""
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
    "compound": [
        {
            "name": "Nav",
            "description": "Button breadcrumb item.",
            "props": {
                "label": {
                    "type": "ReactNode",
                    "description": "Visible breadcrumb label."
                },
                "active": {
                    "type": "boolean",
                    "description": "Marks the current non-interactive item.",
                    "defaultValue": "false"
                },
                "onClick": {
                    "type": "MouseEventHandler<HTMLButtonElement>",
                    "description": "Handles navigation."
                },
                "className": {
                    "type": "string",
                    "description": "Additional classes."
                }
            }
        },
        {
            "name": "Separator",
            "description": "Explicit separator element accepting native span attributes.",
            "props": {
                "children": {
                    "type": "ReactNode",
                    "description": "Separator content; falls back to the root separator."
                },
                "className": {
                    "type": "string",
                    "description": "Additional separator classes."
                }
            }
        }
    ]
};
