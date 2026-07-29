import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";

import type { ButtonClassName, DivClassName } from "../_shared/types";

export type TabOption = {
    /** The value used by the component. */
    value: string;
    /** Text used for the label. */
    label: string;
    /** Whether disabled is enabled. */
    disabled?: boolean;
};

export type TabsClassNames = {
    /** The list used by the component. */
    list?: DivClassName;
    /** The tab used by the component. */
    tab?: ButtonClassName;
    /** Whether active tab is enabled. */
    activeTab?: ButtonClassName;
};

export type TabsProps = Omit<
    ComponentPropsWithoutRef<"div">,
    "onChange" | "children"
> & {
    /** The value used by the component. */
    value: string;
    /** Callback invoked when change occurs. */
    onChange: (value: string) => void;
    /** The options used by the component. */
    options: TabOption[];
    /** CSS classes applied to the component slots. */
    classNames?: TabsClassNames;
    /** The tab props used by the component. */
    tabProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
};
