import { SectionAPI } from "../../molecules";

type PropDoc = {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
    slots?: PropDoc[];
};
type GroupDoc = { title: string; description?: string; props: PropDoc[] };

const prop = (
    name: string,
    type: string,
    description: string,
    defaultValue?: string,
): PropDoc => ({ name, type, description, defaultValue });
const native = (element: string): PropDoc =>
    prop(
        `...${element}Props`,
        `ComponentPropsWithoutRef<"${element}">`,
        `All remaining native ${element} attributes are forwarded.`,
    );
const slots = (name: string, values: string[]): PropDoc => ({
    name: "classNames",
    type: name,
    description: "Classes for internal slots.",
    slots: values.map((value) =>
        prop(value, "string", `Classes applied to the ${value} slot.`),
    ),
});

const groups: Record<string, GroupDoc[]> = {
    Accordion: [
        {
            title: "Accordion",
            props: [
                prop("children", "ReactNode", "Summary and Content parts."),
                prop(
                    "defaultOpen",
                    "boolean",
                    "Initial uncontrolled open state.",
                    "false",
                ),
                prop("className", "string", "Root classes."),
            ],
        },
        {
            title: "Accordion.Summary",
            description: "Extends native button attributes.",
            props: [
                prop("children", "ReactNode", "Clickable summary content."),
                prop("className", "string", "Summary button classes."),
                native("button"),
            ],
        },
        {
            title: "Accordion.Content",
            description: "Extends native div attributes.",
            props: [
                prop("children", "ReactNode", "Collapsible content."),
                prop("className", "string", "Content classes."),
                native("div"),
            ],
        },
    ],
    Breadcrumbs: [
        {
            title: "Breadcrumbs",
            description: "Extends native nav attributes.",
            props: [
                prop("children", "ReactNode", "Breadcrumb navigation parts."),
                prop(
                    "separator",
                    "ReactNode",
                    "Default separator between items.",
                ),
                prop("className", "string", "Navigation classes."),
                native("nav"),
            ],
        },
        {
            title: "Breadcrumbs.Nav",
            description: "Extends native button attributes without children.",
            props: [
                prop("label", "ReactNode", "Breadcrumb label."),
                prop("active", "boolean", "Marks the current item.", "false"),
                prop("className", "string", "Navigation item classes."),
                native("button"),
            ],
        },
        {
            title: "Breadcrumbs.Separator",
            description: "Extends native span attributes.",
            props: [
                prop(
                    "children",
                    "ReactNode",
                    "Custom separator; otherwise uses the root separator.",
                ),
                prop("className", "string", "Separator classes."),
                native("span"),
            ],
        },
    ],
    Card: [
        {
            title: "Card",
            description: "Extends HTMLAttributes<HTMLElement>.",
            props: [
                prop("children", "ReactNode", "Card sections."),
                prop("className", "string", "Root card classes."),
                native("article"),
            ],
        },
        ...["Header", "Title", "Subtitle", "Content", "Footer"].map((part) => ({
            title: `Card.${part}`,
            description:
                "Forwards the corresponding native element attributes.",
            props: [
                prop("children", "ReactNode", `${part} content.`),
                prop("className", "string", `${part} classes.`),
                native(
                    part === "Title" ? "h3" : part === "Subtitle" ? "p" : "div",
                ),
            ],
        })),
    ],
    Carousel: [
        {
            title: "Carousel",
            props: [
                prop("children", "ReactNode", "Carousel.Image slides."),
                prop("className", "string", "Root classes."),
                slots("CarouselClassNames", ["nav", "links"]),
                prop(
                    "loop",
                    "boolean",
                    "Wraps navigation at the ends.",
                    "false",
                ),
                prop(
                    "autoScroll",
                    "boolean",
                    "Automatically advances slides.",
                    "false",
                ),
                prop(
                    "autoScrollTimeout",
                    "number",
                    "Delay between automatic transitions.",
                    "5000",
                ),
            ],
        },
        {
            title: "Carousel.Image",
            props: [
                prop("children", "ReactNode", "Image or custom slide content."),
                prop("className", "string", "Slide classes."),
            ],
        },
    ],
    Chart: [
        {
            title: "Chart",
            description: "Extends native div attributes without children.",
            props: [
                prop(
                    "data",
                    "ChartDataItem[]",
                    "Records rendered by the chart.",
                ),
                prop(
                    "series",
                    "ChartSeries[]",
                    "Series definitions and colors.",
                ),
                prop("xKey", "string", "Data key used by the horizontal axis."),
                prop(
                    "type",
                    '"line" | "area" | "bar"',
                    "Chart visualization type.",
                    "line",
                ),
                prop("height", "number", "Chart height in pixels."),
                prop(
                    "showGrid / showXAxis / showYAxis / showTooltip",
                    "boolean",
                    "Toggles individual chart features.",
                ),
                prop("margin", "ChartMargin", "Recharts plot margins."),
                prop(
                    "xTickFormatter / yTickFormatter",
                    "(value) => string",
                    "Axis label formatters.",
                ),
                prop(
                    "renderTooltip",
                    "(props: ChartTooltipProps) => ReactNode",
                    "Custom tooltip renderer.",
                ),
                prop(
                    "emptyState",
                    "ReactNode",
                    "Content shown when data is empty.",
                ),
                prop(
                    "title / description",
                    "ReactNode",
                    "Optional chart header content.",
                ),
                slots("ChartClassNames", [
                    "root",
                    "header",
                    "title",
                    "description",
                    "body",
                    "empty",
                    "tooltip",
                    "tooltipLabel",
                    "tooltipRow",
                    "tooltipKey",
                    "tooltipValue",
                ]),
                prop("colorVars", "string[]", "Fallback CSS color variables."),
                native("div"),
            ],
        },
    ],
    CodeView: [
        {
            title: "CodeView",
            description: "Extends native div attributes without children.",
            props: [
                prop("code", "string", "Source code to highlight."),
                prop(
                    "language",
                    "BundledLanguage | string",
                    "Syntax language.",
                ),
                prop("theme", "BundledTheme", "Shiki theme."),
                prop(
                    "fileName",
                    "string",
                    "Displayed and downloaded file name.",
                ),
                prop("copyable", "boolean", "Shows copy action."),
                prop("downloadable", "boolean", "Shows download action."),
                prop("defaultActions", "boolean", "Enables built-in actions."),
                prop(
                    "maxContentHeight",
                    'CSSProperties["maxHeight"]',
                    "Maximum scrollable content height.",
                ),
                prop(
                    "onCopy",
                    "(code: string) => void | Promise<void>",
                    "Copy callback.",
                ),
                prop(
                    "onDownload",
                    "(code: string) => void",
                    "Download callback.",
                ),
                prop("children", "ReactNode", "Header and Content parts."),
                native("div"),
            ],
        },
        {
            title: "CodeView.Header",
            description: "Extends native div attributes.",
            props: [
                prop("children", "ReactNode", "Custom header content."),
                prop("showLanguage", "boolean", "Displays language label."),
                prop("showFileName", "boolean", "Displays file name."),
                prop("actions", "ReactNode", "Custom header actions."),
                native("div"),
            ],
        },
        {
            title: "CodeView.Content",
            description: "Extends native div attributes.",
            props: [
                prop(
                    "loadingFallback",
                    "ReactNode",
                    "Content displayed while highlighting.",
                ),
                prop(
                    "maxHeight",
                    'CSSProperties["maxHeight"]',
                    "Content height override.",
                ),
                native("div"),
            ],
        },
    ],
    DataDisplay: [
        {
            title: "DataDisplay",
            description: "Extends native div attributes.",
            props: [
                prop("children", "ReactNode", "DataDisplay.Item rows."),
                prop("bordered", "boolean", "Adds row borders.", "false"),
                prop("className", "string", "Root classes."),
                native("div"),
            ],
        },
        {
            title: "DataDisplay.Item",
            description: "Extends native div attributes.",
            props: [
                prop("label", "ReactNode", "Item label."),
                prop("value", "ReactNode", "Primary value."),
                prop("description", "ReactNode", "Supporting text."),
                prop("icon", "ReactNode", "Leading icon."),
                prop("rightSlot", "ReactNode", "Trailing content."),
                prop("className", "string", "Item classes."),
                native("div"),
            ],
        },
    ],
    Pagination: [
        {
            title: "Pagination",
            props: [
                prop("page", "number", "Current page."),
                prop("perPage", "number", "Items per page."),
                prop("total", "number", "Total item count."),
                prop("lastPage", "number", "Last available page."),
                prop("from / to", "number | null", "Visible item range."),
                prop(
                    "disabled",
                    "boolean",
                    "Disables pagination controls.",
                    "false",
                ),
                prop(
                    "onPageChange",
                    "(page: number) => void",
                    "Page selection callback.",
                ),
                prop(
                    "onPerPageChange",
                    "(perPage: number) => void",
                    "Page-size callback.",
                ),
                prop("perPageOptions", "number[]", "Available page sizes."),
            ],
        },
    ],
    PrettyBR: [
        {
            title: "PrettyBR",
            props: [
                prop("icon", "string", "Iconify icon name."),
                prop("label", "string", "Divider label."),
                prop("size", "number", "Icon size."),
                prop("className", "string", "Root classes."),
                slots("PrettyBRClassNames", ["divider", "icon", "label"]),
            ],
        },
    ],
    ResizablePanel: [
        {
            title: "ResizablePanel",
            description: "Extends native div attributes.",
            props: [
                prop("children", "ReactNode", "Sidebar, Handle, and Content."),
                prop("defaultSize", "number", "Initial sidebar width."),
                prop("minSize", "number", "Minimum sidebar width."),
                prop("maxSize", "number", "Maximum sidebar width."),
                prop("className", "string", "Root classes."),
                native("div"),
            ],
        },
        {
            title: "ResizablePanel.Sidebar",
            description: "Extends native aside attributes.",
            props: [
                prop("children", "ReactNode", "Sidebar content."),
                prop("className", "string", "Sidebar classes."),
                native("aside"),
            ],
        },
        {
            title: "ResizablePanel.Handle",
            description: "Extends native div attributes.",
            props: [
                prop("className", "string", "Resize handle classes."),
                native("div"),
            ],
        },
        {
            title: "ResizablePanel.Content",
            description: "Extends native main attributes.",
            props: [
                prop("children", "ReactNode", "Main panel content."),
                prop("className", "string", "Content classes."),
                native("main"),
            ],
        },
    ],
    ScrollArea: [
        {
            title: "ScrollArea",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                prop("children", "ReactNode", "Scrollable content."),
                prop(
                    "orientation",
                    '"horizontal" | "vertical" | "both"',
                    "Enabled overflow axes.",
                    "vertical",
                ),
                prop(
                    "showScrollbar",
                    "boolean",
                    "Controls scrollbar visibility.",
                    "true",
                ),
                prop("className", "string", "Container classes."),
                native("div"),
            ],
        },
    ],
    Separator: [
        {
            title: "Separator",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                prop(
                    "orientation",
                    '"horizontal" | "vertical"',
                    "Separator direction.",
                    "horizontal",
                ),
                prop("className", "string", "Separator classes."),
                native("div"),
            ],
        },
    ],
    Table: [
        {
            title: "Table",
            props: [
                prop("data", "T[]", "Rows rendered by the table."),
                prop(
                    "columns",
                    "TableColumn<T>[]",
                    "Column definitions, renderers, and sort modes.",
                ),
                prop(
                    "rowKey",
                    "keyof T | ((item, index) => string | number)",
                    "Stable identifier for each row.",
                ),
                slots("TableClassNames<T>", [
                    "root",
                    "header",
                    "headerRow",
                    "headerCell",
                    "sortButton",
                    "body",
                    "row",
                    "rowDynamic",
                    "cell",
                ]),
            ],
        },
    ],
    Timeline: [
        {
            title: "Timeline",
            props: [
                prop("children", "ReactNode", "Timeline.Item entries."),
                prop("className", "string", "Root classes."),
            ],
        },
        {
            title: "Timeline.Item",
            props: [
                prop("children", "ReactNode", "Item sections."),
                prop("icon", "string", "Iconify icon name."),
                prop("className", "string", "Item classes."),
            ],
        },
        ...["ItemTitle", "ItemSubTitle", "ItemContent"].map((part) => ({
            title: `Timeline.${part}`,
            props: [
                prop("children", "ReactNode", `${part} content.`),
                prop("className", "string", `${part} classes.`),
            ],
        })),
    ],
    TreeView: [
        {
            title: "TreeView",
            description: "Extends native div attributes.",
            props: [
                prop("children", "ReactNode", "Catalog and Element nodes."),
                prop("virtualized", "boolean", "Enables virtualization."),
                prop("height", "number", "Virtual viewport height."),
                prop("estimateSize", "number", "Estimated row height."),
                prop(
                    "overscan",
                    "number",
                    "Extra rows rendered outside the viewport.",
                ),
                prop("className", "string", "Root classes."),
                native("div"),
            ],
        },
        {
            title: "TreeView.Catalog",
            description: "Extends native div attributes without title.",
            props: [
                prop("title", "ReactNode", "Folder label."),
                prop("children", "ReactNode", "Nested nodes."),
                prop("open", "boolean", "Controlled open state."),
                prop(
                    "defaultOpen",
                    "boolean",
                    "Initial uncontrolled open state.",
                ),
                prop(
                    "onOpenChange",
                    "(open: boolean) => void",
                    "Open-state callback.",
                ),
                prop(
                    "icon / openIcon",
                    "ReactNode",
                    "Closed and open folder icons.",
                ),
                prop("rightSlot", "ReactNode", "Trailing content."),
                prop(
                    "virtualized / height / estimateSize / overscan",
                    "TreeViewVirtualizationProps",
                    "Nested virtualization settings.",
                ),
                slots("TreeViewCatalogClassNames", [
                    "trigger",
                    "title",
                    "nested",
                    "chevronIcon",
                    "folderIcon",
                    "rightSlot",
                    "virtualContent",
                    "virtualItem",
                ]),
                native("div"),
            ],
        },
        {
            title: "TreeView.Element",
            description: "Extends native button attributes without children.",
            props: [
                prop("label", "ReactNode", "Primary node label."),
                prop("description", "ReactNode", "Supporting text."),
                prop("children", "ReactNode", "Custom element content."),
                prop("selected", "boolean", "Applies selected state."),
                prop("disabled", "boolean", "Disables interaction."),
                prop("icon", "ReactNode", "Leading icon."),
                prop("rightSlot", "ReactNode", "Trailing content."),
                slots("TreeViewElementClassNames", [
                    "icon",
                    "content",
                    "label",
                    "description",
                    "rightSlot",
                ]),
                native("button"),
            ],
        },
    ],
};

function APIProp({ item }: { item: PropDoc }) {
    return (
        <SectionAPI.Prop
            name={item.name}
            type={item.type}
            description={item.description}
            defaultValue={item.defaultValue}
        >
            {item.slots && (
                <SectionAPI.Object
                    title={item.type}
                    description="Slot-level style overrides."
                >
                    {item.slots.map((slot) => (
                        <SectionAPI.Prop
                            key={slot.name}
                            name={slot.name}
                            type={slot.type}
                            description={slot.description}
                        />
                    ))}
                </SectionAPI.Object>
            )}
        </SectionAPI.Prop>
    );
}

export function CompositionAPI({
    component,
}: {
    component: keyof typeof groups;
}) {
    return (
        <SectionAPI nav={{ id: "api", title: "API reference" }}>
            {groups[component].map((group) => (
                <SectionAPI.Group
                    key={group.title}
                    title={group.title}
                    description={group.description}
                >
                    <SectionAPI.Table>
                        {group.props.map((item) => (
                            <APIProp key={item.name} item={item} />
                        ))}
                    </SectionAPI.Table>
                </SectionAPI.Group>
            ))}
        </SectionAPI>
    );
}
