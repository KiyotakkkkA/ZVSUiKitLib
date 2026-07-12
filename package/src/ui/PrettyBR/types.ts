import type {
    DivClassName,
    ParagraphClassName,
    SvgClassName,
} from "../_shared/types";

type IconClassName = SvgClassName;

export type PrettyBRClassNames = {
    divider?: DivClassName;
    icon?: IconClassName;
    label?: ParagraphClassName;
};

export type PrettyBRProps = {
    icon?: string;
    label?: string;
    size?: number;
    className?: DivClassName;
    classNames?: PrettyBRClassNames;
};
