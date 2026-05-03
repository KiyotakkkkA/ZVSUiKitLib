import type { ComponentPropsWithoutRef, InputHTMLAttributes } from "react";

export type InputSmallClassNames = {
    wrapper?: ComponentPropsWithoutRef<"div">["className"];
    icon?: ComponentPropsWithoutRef<"svg">["className"];
};

export type InputSmallProps = InputHTMLAttributes<HTMLInputElement> & {
    classNames?: InputSmallClassNames;
};
