import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Heading",
        "description": "Server-compatible semantic Heading typography component.",
        "props": {
            "level": {
                "type": "HeadingLevel",
                "description": "Semantic heading level and matching visual scale.",
                "defaultValue": "2"
            },
            "className": {
                "type": "string",
                "description": "Additional heading classes."
            },
            "children": {
                "type": "ReactNode",
                "description": "Heading content."
            }
        }
    },
    "compound": []
};

