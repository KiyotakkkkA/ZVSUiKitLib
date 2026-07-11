import { SectionAPI } from "../../molecules";
type P = {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
    slots?: string[];
};
const p = (
    name: string,
    type: string,
    description: string,
    defaultValue?: string,
): P => ({ name, type, description, defaultValue });
const c = (type: string, slots: string[]): P => ({
    name: "classNames",
    type,
    description: "Classes for internal slots.",
    slots,
});
const groups: Record<string, P[]> = {
    Alert: [
        p(
            "variant",
            '"neutral" | "success" | "warning" | "danger" | "info"',
            "Visual status variant.",
            "neutral",
        ),
        p("title", "ReactNode", "Optional heading."),
        p("icon", "ReactNode", "Custom leading icon."),
        p("children", "ReactNode", "Message body."),
        p("className", "string", "Root classes."),
        c("AlertClassNames", ["icon", "content", "title", "body"]),
        p(
            "...divProps",
            "HTMLAttributes<HTMLDivElement>",
            "Native div attributes are forwarded.",
        ),
    ],
    Badge: [
        p("variant", "BadgeVariant", "Visual status variant.", "neutral"),
        p("children", "ReactNode", "Badge content."),
        p("className", "string", "Badge classes."),
        p(
            "...spanProps",
            "HTMLAttributes<HTMLSpanElement>",
            "Native span attributes are forwarded.",
        ),
    ],
    EmptyState: [
        p("icon", "ReactNode", "Leading illustration or icon."),
        p("title", "ReactNode", "Required heading."),
        p("description", "ReactNode", "Supporting message."),
        p("action", "ReactNode", "Action area."),
        p("className", "string", "Root classes."),
        c("EmptyStateClassNames", ["icon", "title", "description", "action"]),
    ],
    Loader: [
        p(
            "className",
            "string",
            "Loader classes, including dimensions and color.",
        ),
    ],
    ProgressBar: [
        p("value", "number", "Current progress."),
        p("max", "number", "Maximum progress.", "100"),
        p("label", "string", "Progress label."),
        p("showValue", "boolean", "Displays percentage value.", "false"),
        p("className", "string", "Root classes."),
        c("ProgressBarClassNames", [
            "header",
            "label",
            "value",
            "track",
            "indicator",
        ]),
    ],
    Skeleton: [
        p("animated", "boolean", "Enables shimmer animation.", "true"),
        p(
            "rounded",
            '"none" | "sm" | "md" | "lg" | "xl" | "full"',
            "Border radius preset.",
            "md",
        ),
        p(
            "tone",
            '"default" | "subtle" | "strong"',
            "Contrast level.",
            "default",
        ),
        p("className", "string", "Skeleton dimensions and classes."),
        p(
            "...divProps",
            "HTMLAttributes<HTMLDivElement>",
            "Native div attributes are forwarded.",
        ),
    ],
};
export function FeedbackAPI({ component }: { component: keyof typeof groups }) {
    return (
        <SectionAPI nav={{ id: "api", title: "API reference" }}>
            <SectionAPI.Group title={component}>
                <SectionAPI.Table>
                    {groups[component].map((x) => (
                        <SectionAPI.Prop
                            key={x.name}
                            name={x.name}
                            type={x.type}
                            description={x.description}
                            defaultValue={x.defaultValue}
                        >
                            {x.slots && (
                                <SectionAPI.Object
                                    title={x.type}
                                    description="Slot-level style overrides."
                                >
                                    {x.slots.map((s) => (
                                        <SectionAPI.Prop
                                            key={s}
                                            name={s}
                                            type="string"
                                            description={`Classes applied to the ${s} slot.`}
                                        />
                                    ))}
                                </SectionAPI.Object>
                            )}
                        </SectionAPI.Prop>
                    ))}
                </SectionAPI.Table>
            </SectionAPI.Group>
        </SectionAPI>
    );
}
