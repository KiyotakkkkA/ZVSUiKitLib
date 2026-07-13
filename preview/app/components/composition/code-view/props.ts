import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "CodeView",
        "description": "Highlights code and provides configurable file actions.",
        "props": {
            "code": {
                "type": "string",
                "description": "Source code to render."
            },
            "language": {
                "type": "BundledLanguage | string",
                "description": "Syntax language.",
                "defaultValue": "\"typescript\""
            },
            "theme": {
                "type": "BundledTheme",
                "description": "Shiki theme."
            },
            "fileName": {
                "type": "string",
                "description": "Displayed and downloaded file name."
            },
            "copyable": {
                "type": "boolean",
                "description": "Enables copying.",
                "defaultValue": "true"
            },
            "downloadable": {
                "type": "boolean",
                "description": "Enables downloading.",
                "defaultValue": "false"
            },
            "defaultActions": {
                "type": "boolean",
                "description": "Shows built-in actions.",
                "defaultValue": "true"
            },
            "maxContentHeight": {
                "type": "CSSProperties['maxHeight']",
                "description": "Maximum code viewport height."
            },
            "onCopy": {
                "type": "(code: string) => void | Promise<void>",
                "description": "Called after copy."
            },
            "onDownload": {
                "type": "(code: string) => void",
                "description": "Handles download."
            },
            "children": {
                "type": "ReactNode",
                "description": "Custom compound sections."
            }
        }
    },
    "compound": [
        {
            "name": "Header",
            "description": "Header for filename, language, and actions.",
            "props": {
                "children": {
                    "type": "ReactNode",
                    "description": "Rendered content."
                },
                "showLanguage": {
                    "type": "boolean",
                    "description": "Shows the language label.",
                    "defaultValue": "true"
                },
                "showFileName": {
                    "type": "boolean",
                    "description": "Shows the file name.",
                    "defaultValue": "true"
                },
                "actions": {
                    "type": "ReactNode",
                    "description": "Custom header actions."
                },
                "className": {
                    "type": "string",
                    "description": "Additional classes."
                }
            }
        },
        {
            "name": "Content",
            "description": "Highlighted scrollable code content.",
            "props": {
                "loadingFallback": {
                    "type": "ReactNode",
                    "description": "Content displayed while highlighting."
                },
                "maxHeight": {
                    "type": "CSSProperties['maxHeight']",
                    "description": "Content height override."
                },
                "className": {
                    "type": "string",
                    "description": "Additional classes."
                }
            }
        }
    ]
};

