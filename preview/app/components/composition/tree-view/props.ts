import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "TreeView",
        "description": "Hierarchical list with optional root or nested virtualization.",
        "props": {
            "children": {
                "type": "ReactNode",
                "description": "Rendered content."
            },
            "className": {
                "type": "string",
                "description": "Additional classes."
            },
            "virtualized": {
                "type": "boolean",
                "description": "Virtualizes direct children.",
                "defaultValue": "false"
            },
            "height": {
                "type": "number",
                "description": "Virtual viewport height.",
                "defaultValue": "360"
            },
            "estimateSize": {
                "type": "number",
                "description": "Estimated row height.",
                "defaultValue": "34"
            },
            "overscan": {
                "type": "number",
                "description": "Rows rendered beyond the viewport.",
                "defaultValue": "8"
            }
        }
    },
    "compound": [
        {
            "name": "Catalog",
            "description": "Expandable branch with optional controlled state and virtualization.",
            "props": {
                "title": {
                    "type": "ReactNode",
                    "description": "Branch title."
                },
                "children": {
                    "type": "ReactNode",
                    "description": "Rendered content."
                },
                "open": {
                    "type": "boolean",
                    "description": "Controlled expanded state."
                },
                "defaultOpen": {
                    "type": "boolean",
                    "description": "Initial expanded state.",
                    "defaultValue": "false"
                },
                "onOpenChange": {
                    "type": "(open: boolean) => void",
                    "description": "Reports expanded state changes."
                },
                "virtualized": {
                    "type": "boolean",
                    "description": "Virtualizes nested children.",
                    "defaultValue": "false"
                },
                "height": {
                    "type": "number",
                    "description": "Nested viewport height.",
                    "defaultValue": "360"
                },
                "estimateSize": {
                    "type": "number",
                    "description": "Estimated row height.",
                    "defaultValue": "34"
                },
                "overscan": {
                    "type": "number",
                    "description": "Overscan rows.",
                    "defaultValue": "8"
                },
                "classNames": {
                    "type": "TreeViewCatalogClassNames",
                    "description": "Classes for branch slots.",
                    "slots": {
                        "trigger": {
                            "type": "string",
                            "description": "Trigger classes."
                        },
                        "title": {
                            "type": "string",
                            "description": "Title classes."
                        },
                        "nested": {
                            "type": "string",
                            "description": "Nested wrapper classes."
                        },
                        "chevronIcon": {
                            "type": "string",
                            "description": "Chevron classes."
                        },
                        "folderIcon": {
                            "type": "string",
                            "description": "Folder icon classes."
                        },
                        "rightSlot": {
                            "type": "string",
                            "description": "Trailing slot classes."
                        },
                        "virtualContent": {
                            "type": "string",
                            "description": "Virtual content classes."
                        },
                        "virtualItem": {
                            "type": "string",
                            "description": "Virtual item classes."
                        }
                    }
                }
            }
        },
        {
            "name": "Element",
            "description": "Selectable leaf button.",
            "props": {
                "label": {
                    "type": "ReactNode",
                    "description": "Primary label."
                },
                "description": {
                    "type": "ReactNode",
                    "description": "Supporting text."
                },
                "children": {
                    "type": "ReactNode",
                    "description": "Rendered content."
                },
                "selected": {
                    "type": "boolean",
                    "description": "Applies selected styling.",
                    "defaultValue": "false"
                },
                "disabled": {
                    "type": "boolean",
                    "description": "Disables interaction.",
                    "defaultValue": "false"
                },
                "icon": {
                    "type": "ReactNode",
                    "description": "Leading icon."
                },
                "rightSlot": {
                    "type": "ReactNode",
                    "description": "Trailing content."
                },
                "classNames": {
                    "type": "TreeViewElementClassNames",
                    "description": "Classes for leaf slots.",
                    "slots": {
                        "icon": {
                            "type": "string",
                            "description": "Icon classes."
                        },
                        "content": {
                            "type": "string",
                            "description": "Content wrapper classes."
                        },
                        "label": {
                            "type": "string",
                            "description": "Label classes."
                        },
                        "description": {
                            "type": "string",
                            "description": "Description classes."
                        },
                        "rightSlot": {
                            "type": "string",
                            "description": "Trailing slot classes."
                        }
                    }
                }
            }
        }
    ]
};

