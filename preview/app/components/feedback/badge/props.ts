import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Badge",
        "description": "Public Badge component API.",
        "props": {
            "variant": {
                "type": "ColorVariantsBase",
                "description": "Badge color style.",
                "defaultValue": "\"secondary\""
            },
            "rounded": {
                "type": "RoundVariants",
                "description": "Border radius shape.",
                "defaultValue": "\"rounded-lg\""
            },
            "className": {
                "type": "string",
                "description": "Extra classes."
            },
            "children": {
                "type": "ReactNode",
                "description": "Badge content."
            }
        }
    },
    "compound": []
};

