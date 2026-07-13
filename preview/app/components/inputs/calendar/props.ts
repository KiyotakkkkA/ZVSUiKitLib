import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    "root": {
        "name": "Calendar",
        "description": "Public Calendar component API.",
        "props": {
            "value": {
                "type": "Date / null",
                "description": "Controlled selected date."
            },
            "defaultValue": {
                "type": "Date / null",
                "description": "Initial selected date for uncontrolled mode.",
                "defaultValue": "null"
            },
            "onChange": {
                "type": "(date: Date / null) => void",
                "description": "Date change callback."
            },
            "viewDate": {
                "type": "Date",
                "description": "Controlled displayed month."
            },
            "defaultViewDate": {
                "type": "Date",
                "description": "Initial month for uncontrolled mode."
            },
            "onViewDateChange": {
                "type": "(date: Date) => void",
                "description": "Called when displayed month changes."
            },
            "minDate": {
                "type": "Date",
                "description": "Minimum allowed date."
            },
            "maxDate": {
                "type": "Date",
                "description": "Maximum allowed date."
            },
            "disabledDates": {
                "type": "Date[] / (date: Date) => boolean",
                "description": "Disabled dates list or predicate."
            },
            "allowDeselect": {
                "type": "boolean",
                "description": "Allows deselecting selected date on click."
            },
            "showOutsideDays": {
                "type": "boolean",
                "description": "Show days from adjacent months.",
                "defaultValue": "true"
            },
            "locale": {
                "type": "string",
                "description": "Locale for labels and formatting.",
                "defaultValue": "\"ru-RU\""
            },
            "weekStartsOn": {
                "type": "0 / 1 / 2 / 3 / 4 / 5 / 6",
                "description": "First day of week.",
                "defaultValue": "1"
            },
            "className": {
                "type": "string",
                "description": "Root classes."
            },
            "classNames": {
                "type": "object",
                "description": "Classes for internal slots.",
                "slots": {
                    "header": {
                        "type": "string",
                        "description": "Top row wrapper classes."
                    },
                    "navButton": {
                        "type": "string",
                        "description": "Previous/next month button classes."
                    },
                    "selectors": {
                        "type": "string",
                        "description": "Month/year selects wrapper classes."
                    },
                    "monthSelect": {
                        "type": "string",
                        "description": "Month select trigger classes."
                    },
                    "yearSelect": {
                        "type": "string",
                        "description": "Year select trigger classes."
                    },
                    "weekdays": {
                        "type": "string",
                        "description": "Weekday labels row classes."
                    },
                    "weekday": {
                        "type": "string",
                        "description": "Single weekday label classes."
                    },
                    "days": {
                        "type": "string",
                        "description": "Days grid classes."
                    },
                    "day": {
                        "type": "string",
                        "description": "Day button classes or (meta) => className function."
                    }
                }
            },
            "renderDay": {
                "type": "(meta) => ReactNode",
                "description": "Custom day content renderer."
            }
        }
    },
    "compound": []
};

