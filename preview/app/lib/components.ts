export type ComponentDoc = {
    slug: string;
    name: string;
    summary: string;
    status?: "new";
};

export type ComponentDocSection = {
    title: string;
    prefix: string;
    components: ComponentDoc[];
};

export const overlayComponents: ComponentDocSection = {
    title: "Overlays",
    prefix: "overlays",
    components: [
        {
            slug: "context-menu",
            name: "ContextMenu",
            summary: "Contextual actions with nested menus.",
        },
        {
            slug: "dropdown",
            name: "Dropdown",
            summary: "Composable anchored menu and selectable items.",
        },
        {
            slug: "floating",
            name: "Floating",
            summary: "Hover and focus anchored floating content.",
        },
        { slug: "modal", name: "Modal", summary: "Compound modal dialog." },
        {
            slug: "slided-panel",
            name: "SlidedPanel",
            summary: "Compound edge drawer.",
        },
        { slug: "tooltip", name: "Tooltip", summary: "Hover and focus hint." },
    ],
};

export const compositionComponents: ComponentDocSection = {
    title: "Composition",
    prefix: "composition",
    components: [
        {
            slug: "accordion",
            name: "Accordion",
            summary: "Collapsible content section.",
        },
        {
            slug: "breadcrumbs",
            name: "Breadcrumbs",
            summary: "Navigation trail for the current location.",
        },
        {
            slug: "card",
            name: "Card",
            summary: "Structured compound content surface.",
        },
        {
            slug: "carousel",
            name: "Carousel",
            summary: "Slide viewport with navigation controls.",
        },
        {
            slug: "chart",
            name: "Chart",
            summary: "Responsive line, area, and bar charts.",
        },
        {
            slug: "code-view",
            name: "CodeView",
            summary: "Syntax-highlighted code viewer.",
        },
        {
            slug: "data-display",
            name: "DataDisplay",
            summary: "Structured labeled values and metadata.",
        },
        {
            slug: "pagination",
            name: "Pagination",
            summary: "Page and page-size navigation.",
        },
        {
            slug: "pretty-br",
            name: "PrettyBR",
            summary: "Labeled visual section divider.",
        },
        {
            slug: "resizable-panel",
            name: "ResizablePanel",
            summary: "Resizable sidebar and content layout.",
        },
        {
            slug: "scroll-area",
            name: "ScrollArea",
            summary: "Styled overflow container.",
        },
        {
            slug: "separator",
            name: "Separator",
            summary: "Horizontal or vertical divider.",
        },
        { slug: "table", name: "Table", summary: "Typed sortable data table." },
        {
            slug: "timeline",
            name: "Timeline",
            summary: "Compound chronological content.",
        },
        {
            slug: "tree-view",
            name: "TreeView",
            summary: "Hierarchical and virtualized tree.",
        },
    ],
};

export const inputComponents: ComponentDocSection = {
    title: "Inputs",
    prefix: "inputs",
    components: [
        {
            slug: "auto-fill-selector",
            name: "AutoFillSelector",
            summary: "Searchable multi-select.",
        },
        {
            slug: "button",
            name: "Button",
            summary: "Action control with variants and loading state.",
        },
        {
            slug: "calendar",
            name: "Calendar",
            summary: "Date calendar with constraints and custom rendering.",
        },
        {
            slug: "input-big",
            name: "InputBig",
            summary: "Large multiline text input.",
        },
        {
            slug: "input-checkbox",
            name: "InputCheckBox",
            summary: "Controlled checkbox input.",
        },
        {
            slug: "input-checkbox-group",
            name: "InputCheckBoxGroup",
            summary: "Boolean-record checkbox selection group.",
        },
        {
            slug: "input-check-slided",
            name: "InputCheckSlided",
            summary: "Controlled sliding switch.",
        },
        {
            slug: "input-color",
            name: "InputColor",
            summary: "Color picker with hue, alpha, and presets.",
        },
        {
            slug: "input-date",
            name: "InputDate",
            summary: "Date input paired with a calendar popup.",
        },
        {
            slug: "input-drop-zone",
            name: "InputDropZone",
            summary: "Drag-and-drop file input with previews.",
        },
        {
            slug: "input-pins",
            name: "InputPins",
            summary: "Segmented PIN and one-time-code input.",
        },
        {
            slug: "input-radio",
            name: "InputRadio",
            summary: "Controlled radio input.",
        },
        {
            slug: "input-radio-group",
            name: "InputRadioGroup",
            summary: "Exclusive boolean-record radio group.",
        },
        {
            slug: "input-range",
            name: "InputRange",
            summary: "Two-thumb numeric range input.",
        },
        {
            slug: "input-slider",
            name: "InputSlider",
            summary: "Pointer-driven numeric slider.",
        },
        {
            slug: "input-small",
            name: "InputSmall",
            summary: "Compact native input with coordinated behavior presets.",
        },
        {
            slug: "select",
            name: "Select",
            summary: "Searchable dropdown selection.",
        },
        {
            slug: "select-native",
            name: "SelectNative",
            summary: "Styled native select.",
        },
        {
            slug: "switcher",
            name: "Switcher",
            summary: "Compact segmented switcher.",
        },
        {
            slug: "tabs",
            name: "Tabs",
            summary: "Controlled tab navigation.",
        },
    ],
};

export const feedbackComponents: ComponentDocSection = {
    title: "Feedback",
    prefix: "feedback",
    components: [
        {
            slug: "alert",
            name: "Alert",
            summary: "Status message with optional icon and title.",
        },
        { slug: "badge", name: "Badge", summary: "Small status indicator." },
        {
            slug: "empty-state",
            name: "EmptyState",
            summary: "Empty-content message with optional action.",
        },
        { slug: "loader", name: "Loader", summary: "Compact loading spinner." },
        {
            slug: "progress-bar",
            name: "ProgressBar",
            summary: "Labeled progress indicator.",
        },
        {
            slug: "skeleton",
            name: "Skeleton",
            summary: "Animated loading placeholder.",
        },
    ],
};
