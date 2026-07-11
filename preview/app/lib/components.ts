export type ComponentDoc = {
    slug: string;
    name: string;
    summary: string;
    status?: "new";
};

export const inputComponents: ComponentDoc[] = [
    {
        slug: "input-small",
        name: "InputSmall",
        summary: "Compact single-line input with password visibility support.",
    },
    {
        slug: "input-date",
        name: "InputDate",
        summary: "Date input paired with a calendar popup.",
    },
    {
        slug: "accordion",
        name: "Accordion",
        summary: "Collapsible content section.",
    },
    {
        slug: "alert",
        name: "Alert",
        summary: "Status message with optional icon and title.",
    },
    {
        slug: "auto-fill-selector",
        name: "AutoFillSelector",
        summary: "Searchable multi-select.",
    },
    {
        slug: "badge",
        name: "Badge",
        summary: "Small status indicator.",
    },
    {
        slug: "breadcrumbs",
        name: "Breadcrumbs",
        summary: "Navigation aid showing the current page's location.",
    },
    {
        slug: "button",
        name: "Button",
        summary: "Action control with variants and loading state.",
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
        slug: "context-menu",
        name: "ContextMenu",
        summary: "Contextual actions with nested menus.",
    },
    {
        slug: "data-display",
        name: "DataDisplay",
        summary: "Structured labeled values and metadata.",
    },
    {
        slug: "dropdown",
        name: "Dropdown",
        summary: "Composable anchored menu and selectable items.",
    },
    {
        slug: "empty-state",
        name: "EmptyState",
        summary: "Empty-content message with optional action.",
    },
    {
        slug: "floating",
        name: "Floating",
        summary: "Hover and focus anchored floating content.",
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
        slug: "input-slider",
        name: "InputSlider",
        summary: "Pointer-driven numeric slider.",
    },
    { slug: "loader", name: "Loader", summary: "Compact loading spinner." },
    { slug: "modal", name: "Modal", summary: "Compound modal dialog." },
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
        slug: "progress-bar",
        name: "ProgressBar",
        summary: "Labeled progress indicator.",
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
        slug: "separator",
        name: "Separator",
        summary: "Horizontal or vertical divider.",
    },
    {
        slug: "skeleton",
        name: "Skeleton",
        summary: "Animated loading placeholder.",
    },
    {
        slug: "slided-panel",
        name: "SlidedPanel",
        summary: "Compound edge drawer.",
    },
    {
        slug: "switcher",
        name: "Switcher",
        summary: "Compact segmented switcher.",
    },
    { slug: "table", name: "Table", summary: "Typed sortable data table." },
    { slug: "tabs", name: "Tabs", summary: "Controlled tab navigation." },
    {
        slug: "timeline",
        name: "Timeline",
        summary: "Compound chronological content.",
    },
    { slug: "tooltip", name: "Tooltip", summary: "Hover and focus hint." },
    {
        slug: "tree-view",
        name: "TreeView",
        summary: "Hierarchical and virtualized tree.",
    },
];
