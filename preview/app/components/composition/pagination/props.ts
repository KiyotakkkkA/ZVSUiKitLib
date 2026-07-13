import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Pagination",
        "description": "Controlled page navigation with range summary and page-size selection.",
        "props": {
            "page": {
                "type": "number",
                "description": "Current page."
            },
            "perPage": {
                "type": "number",
                "description": "Current page size."
            },
            "total": {
                "type": "number",
                "description": "Total item count."
            },
            "lastPage": {
                "type": "number",
                "description": "Last available page."
            },
            "from": {
                "type": "number | null",
                "description": "First visible item index."
            },
            "to": {
                "type": "number | null",
                "description": "Last visible item index."
            },
            "disabled": {
                "type": "boolean",
                "description": "Disables controls.",
                "defaultValue": "false"
            },
            "onPageChange": {
                "type": "(page: number) => void",
                "description": "Handles page selection."
            },
            "onPerPageChange": {
                "type": "(perPage: number) => void",
                "description": "Handles page-size selection."
            },
            "perPageOptions": {
                "type": "number[]",
                "description": "Available page sizes.",
                "defaultValue": "[10, 20, 50, 100]"
            }
        }
    },
    "compound": []
};

