import type { ComponentAPIDoc } from "../../../../_shared/types";
import { enumValuesDirective } from "../../../../_shared/directives";

const showModeDirective = enumValuesDirective({
    title: "Show mode",
    description: "How many accordions can be open at the same time.",
    values: ["only-one", "multiple"],
});
export const componentProps: ComponentAPIDoc = {
    root: {
        name: "AccordionGroup",
        description:
            "Groups Accordion children and controls how many of them stay open.",
        props: {
            showMode: {
                type: '"only-one" | "multiple"',
                defaultValue: '"multiple"',
                description:
                    "only-one closes the other accordions when one opens.",
                directives: [showModeDirective],
            },
            className: {
                type: "string",
                description: "Group wrapper classes.",
            },
            children: {
                type: "ReactNode",
                description: "Accordion elements.",
            },
        },
    },
    compound: [],
};
