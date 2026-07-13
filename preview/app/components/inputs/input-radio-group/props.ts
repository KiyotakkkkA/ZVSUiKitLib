import type { ComponentAPIDoc } from "../../../../_shared/types";
import { enumValuesDirective } from "../../../../_shared/directives";

const orientationDirective = enumValuesDirective({ title: "Orientation", description: "Available child layout directions.", values: ["horizontal", "vertical"] });
export const componentProps: ComponentAPIDoc = { root: { name: "InputRadioGroup", description: "Controlled provider for InputRadio children identified by modelValue.", props: {
    model: { type: "T extends Record<string, boolean>", description: "Controlled exclusive selection model." },
    onModelChange: { type: "(model: T) => void", description: "Receives a model with only the selected key active." },
    default: { type: "Extract<keyof T, string>", description: "Fallback active key when the controlled model has no selection." },
    orientation: { type: "Orientation", defaultValue: '"horizontal"', description: "Controls the child layout direction.", directives: [orientationDirective] },
    disabled: { type: "boolean", defaultValue: "false", description: "Disables every radio in the group." },
    name: { type: "string", defaultValue: "generated", description: "Native name shared by every child radio input." },
    className: { type: "string", description: "Group wrapper classes." },
    children: { type: "ReactNode", description: "InputRadio controls with modelValue keys." },
} }, compound: [] };
