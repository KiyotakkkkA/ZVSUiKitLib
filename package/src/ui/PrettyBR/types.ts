import type {
    DivClassName,
    ParagraphClassName,
    SvgClassName,
} from "../_shared/types";
import type { ReactNode } from "react";

type IconClassName = SvgClassName;

export type PrettyBRClassNames = {
    /** The divider used by the component. */
    divider?: DivClassName;
    /** Content rendered for the icon. */
    icon?: IconClassName;
    /** Text used for the label. */
    label?: ParagraphClassName;
};

export type PrettyBRProps = {
    /** Content rendered for the icon. */
    icon?: ReactNode;
    /** Text used for the label. */
    label?: string;
    /** The rendered icon size in pixels. */
    size?: number;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: PrettyBRClassNames;
};
