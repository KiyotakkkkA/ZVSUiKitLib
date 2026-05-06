import type { ComponentPropsWithoutRef } from "react";

export type InputCheckSlidedClassNames = {
    thumb?: ComponentPropsWithoutRef<"span">["className"];
};

export type InputCheckSlidedProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    type?: "slided";
    className?: ComponentPropsWithoutRef<"button">["className"];
    classNames?: InputCheckSlidedClassNames;
};
