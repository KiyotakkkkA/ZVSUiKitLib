import type { ComponentAPIDoc } from "../../../../_shared/types";
import { enumValuesDirective } from "../../../../_shared/directives";

const orientationDirective = enumValuesDirective({ title: "Orientation", description: "Available child layout directions.", values: ["horizontal", "vertical"] });
export const componentProps: ComponentAPIDoc = { root: { name: "InputCheckBoxGroup", description: "Controlled provider for InputCheckBox children identified by modelValue.", props: {
    model: { type: "T extends Record<string, boolean>", description: "Controlled boolean selection model." },
    onModelChange: { type: "(model: T) => void", description: "Receives the next immutable model after a child toggles." },
    default: { type: "Extract<keyof T, string>", description: "Fallback active key before the user interacts when the model has no selection." },
    multiple: { type: "boolean", defaultValue: "true", description: "Allows more than one active key." },
    orientation: { type: "Orientation", defaultValue: '"horizontal"', description: "Controls the child layout direction.", directives: [orientationDirective] },
    disabled: { type: "boolean", defaultValue: "false", description: "Disables every checkbox in the group." },
    className: { type: "string", description: "Group wrapper classes." },
    children: { type: "ReactNode", description: "InputCheckBox controls with modelValue keys." },
} }, compound: [] };
