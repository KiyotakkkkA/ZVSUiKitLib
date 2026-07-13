import type { ComponentAPIDoc } from "../../../../_shared/types";
import { roundVariantsDirective } from "../../../../_shared/directives";
const sectionProps = {
    className: { type: "string", description: "Section classes." },
    children: { type: "ReactNode", description: "Section content." },
};
export const modalProps: ComponentAPIDoc = {
    root: {
        name: "Modal",
        description:
            "Portal-based dialog with overlay and Escape-key dismissal.",
        props: {
            open: {
                type: "boolean",
                description: "Controls dialog visibility.",
            },
            onClose: {
                type: "() => void",
                description: "Handles all dismissal paths.",
            },
            rounded: {
                type: "RoundVariants",
                defaultValue: '"rounded-lg"',
                description: "Dialog border radius.",
                directives: [roundVariantsDirective],
            },
            className: {
                type: "string",
                description: "Dialog container classes.",
            },
            overlayClassName: {
                type: "string",
                description: "Overlay classes.",
            },
            closeOnOverlayClick: {
                type: "boolean",
                defaultValue: "true",
                description:
                    "Allows pointer and keyboard dismissal from the overlay.",
            },
            children: { type: "ReactNode", description: "Dialog sections." },
        },
    },
    compound: [
        {
            name: "Header",
            description: "Header with an optional built-in close button.",
            props: {
                className: sectionProps.className,
                closeButtonClassName: {
                    type: "string",
                    description: "Close button classes.",
                },
                closeButtonAriaLabel: {
                    type: "string",
                    defaultValue: '"Закрыть окно"',
                    description: "Accessible close button label.",
                },
                showCloseButton: {
                    type: "boolean",
                    defaultValue: "true",
                    description: "Controls close button visibility.",
                },
                children: sectionProps.children,
            },
        },
        {
            name: "Content",
            description: "Scrollable main dialog content.",
            props: sectionProps,
        },
        {
            name: "Footer",
            description: "Footer area for dialog actions.",
            props: sectionProps,
        },
    ],
};
