import type { ButtonClassName, SpanClassName } from "../_shared/types";

export type InputCheckSlidedClassNames = {
    thumb?: SpanClassName;
};

export type InputCheckSlidedProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    type?: "slided";
    className?: ButtonClassName;
    classNames?: InputCheckSlidedClassNames;
};
