import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "SelectNative",
        "description": "Public SelectNative component API.",
        "props": {
            "options": {
                "type": "SelectNativeOption[]",
                "description": "Select options."
            },
            "onChange": {
                "type": "(value) => void",
                "description": "Called with selected value."
            },
            "placeholder": {
                "type": "string",
                "description": "Disabled placeholder option."
            },
            "rounded": {
                "type": "RoundVariants",
                "description": "Border radius shape.",
                "defaultValue": "\"rounded-full\""
            },
            "className": {
                "type": "string",
                "description": "Wrapper classes."
            },
            "classNames": {
                "type": "object",
                "description": "Internal slot classes."
            }
        }
    },
    "compound": []
};

