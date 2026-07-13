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

export const inputComponents: ComponentDocSection = {
    title: "Inputs",
    prefix: "inputs",
    components: [
        {
            slug: "auto-fill-selector",
            name: "AutoFillSelector",
            summary: "Searchable multi-select.",
        },
    ],
};

export const overlayComponents: ComponentDocSection = {
    title: "Overlays",
    prefix: "overlays",
    components: [
        {
            slug: "context-menu",
            name: "ContextMenu",
            summary: "Right-click menu with items and submenus.",
        },
        {
            slug: "dropdown",
            name: "Dropdown",
            summary: "Generic dropdown popup container.",
        },
        {
            slug: "floating",
            name: "Floating",
            summary: "Hover and focus floating panel.",
        },
        { slug: "modal", name: "Modal", summary: "Modal dialog window." },
        {
            slug: "slided-panel",
            name: "SlidedPanel",
            summary: "Slide-in edge panel.",
        },
        { slug: "tooltip", name: "Tooltip", summary: "Hover and focus label." },
    ],
};

export const typographyComponents: ComponentDocSection = {
    title: "Typography",
    prefix: "typography",
    components: [
        { slug: "text", name: "Text", summary: "Body and supporting text." },
        {
            slug: "heading",
            name: "Heading",
            summary: "Semantic heading scale.",
        },
        {
            slug: "blockquote",
            name: "Blockquote",
            summary: "Quoted block content.",
        },
        { slug: "code", name: "Code", summary: "Inline and block code." },
        { slug: "em", name: "Em", summary: "Semantic stress emphasis." },
        { slug: "kbd", name: "Kbd", summary: "Keyboard input notation." },
        { slug: "link", name: "Link", summary: "Inline navigation link." },
        { slug: "quote", name: "Quote", summary: "Inline quotation." },
        { slug: "strong", name: "Strong", summary: "Strong importance text." },
    ],
};
