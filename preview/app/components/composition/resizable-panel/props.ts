import type { ComponentAPIDoc } from "../../../../_shared/types";
import { enumValuesDirective } from "../../../../_shared/directives";

const orientationDirective = enumValuesDirective({
    title: "ResizablePanelOrientation",
    description: "Available layout and resize axes.",
    values: ["horizontal", "vertical"],
});

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "ResizablePanel",
        description: "Split layout that owns the constrained size and resize lifecycle of its primary panel.",
        props: {
            children: { type: "ReactNode", description: "Sidebar, handle, and content compound parts." },
            size: { type: "number", description: "Controlled primary panel size in pixels." },
            defaultSize: { type: "number", description: "Initial uncontrolled size and double-click reset target.", defaultValue: "280" },
            minSize: { type: "number", description: "Smallest allowed primary panel size.", defaultValue: "180" },
            maxSize: { type: "number", description: "Largest allowed primary panel size.", defaultValue: "520" },
            orientation: { type: "ResizablePanelOrientation", description: "Selects the layout and resize axis.", defaultValue: '"horizontal"', directives: [orientationDirective] },
            keyboardStep: { type: "number", description: "Pixel increment applied by arrow keys.", defaultValue: "10" },
            disabled: { type: "boolean", description: "Disables pointer, touch, keyboard, and reset interactions.", defaultValue: "false" },
            onSizeChange: { type: "(size: number) => void", description: "Runs whenever resizing requests a new effective size." },
            onResizeStart: { type: "(size: number) => void", description: "Runs when a pointer or keyboard resize interaction begins." },
            onResizeEnd: { type: "(size: number) => void", description: "Runs when the active resize interaction finishes." },
            className: { type: "string", description: "Root layout classes." },
        },
    },
    compound: [
        {
            name: "Sidebar",
            description: "Primary panel whose width or height is managed by the root.",
            props: {
                children: { type: "ReactNode", description: "Primary panel content." },
                className: { type: "string", description: "Primary panel classes." },
            },
        },
        {
            name: "Handle",
            description: "Accessible separator supporting pointer capture, touch, arrows, Home, End, and double-click reset.",
            props: {
                "aria-label": { type: "string", description: "Accessible separator name.", defaultValue: '"Resize panel"' },
                "aria-controls": { type: "string", description: "Id of a custom-controlled primary panel; generated automatically by default." },
                resetOnDoubleClick: { type: "boolean", description: "Restores defaultSize on double-click.", defaultValue: "true" },
                className: { type: "string", description: "Resize handle classes." },
            },
        },
        {
            name: "Content",
            description: "Flexible secondary panel that consumes the remaining space.",
            props: {
                children: { type: "ReactNode", description: "Secondary panel content." },
                className: { type: "string", description: "Secondary panel classes." },
            },
        },
    ],
};
