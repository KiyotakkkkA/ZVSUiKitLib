import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";

import type { ButtonClassName, DivClassName } from "../_shared/types";

export type TabOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export type TabsClassNames = {
    list?: DivClassName;
    tab?: ButtonClassName;
    activeTab?: ButtonClassName;
};

export type TabsProps = Omit<
    ComponentPropsWithoutRef<"div">,
    "onChange" | "children"
> & {
    value: string;
    onChange: (value: string) => void;
    options: TabOption[];
    classNames?: TabsClassNames;
    tabProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
};
