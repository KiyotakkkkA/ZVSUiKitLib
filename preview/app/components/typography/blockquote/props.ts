import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Blockquote",
        "description": "Server-compatible semantic Blockquote typography component.",
        "props": {
            "cite": {
                "type": "ReactNode",
                "description": "Optional attribution rendered below the quotation."
            },
            "className": {
                "type": "string",
                "description": "Additional blockquote classes."
            },
            "children": {
                "type": "ReactNode",
                "description": "Blockquote content."
            }
        }
    },
    "compound": []
};

