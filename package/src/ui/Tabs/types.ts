import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, Ref } from "react";

import type {
    ButtonClassName,
    DivClassName,
    Orientation,
} from "../_shared/types";

export type TabOption = {
    /** The value used by the component. */
    value: string;
    /** Text used for the label. */
    label: string;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** Identifies the tab element so a panel can point back at it. */
    tabId?: string;
    /** The `id` of the panel this tab controls. */
    panelId?: string;
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
    /** Receives the underlying `HTMLDivElement` node. */
    ref?: Ref<HTMLDivElement>;
    /** The value used by the component. */
    value: string;
    /** Callback invoked when change occurs. */
    onChange: (value: string) => void;
    /** The options used by the component. */
    options: TabOption[];
    /** The axis the tab list is arranged along, driving arrow-key navigation. */
    orientation?: Orientation;
    /** Accessible name for the tab list. */
    label?: string;
    /** CSS classes applied to the component slots. */
    classNames?: TabsClassNames;
    /** The tab props used by the component. */
    tabProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
};
