import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Timeline",
        "description": "Ordered event list with icon markers.",
        "props": {
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
            "name": "Item",
            "description": "Timeline event row.",
            "props": {
                "icon": {
                    "type": "string",
                    "description": "Iconify marker name."
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
        {
            "name": "ItemTitle",
            "description": "Event heading.",
            "props": {
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
        {
            "name": "ItemSubTitle",
            "description": "Event date or supporting text.",
            "props": {
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
        {
            "name": "ItemContent",
            "description": "Event body.",
            "props": {
                "className": {
                    "type": "string",
                    "description": "Additional classes."
                },
                "children": {
                    "type": "ReactNode",
                    "description": "Rendered content."
                }
            }
        }
    ]
};

