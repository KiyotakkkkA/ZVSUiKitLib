import type { Ref } from "react";
import type { PositionAnchor } from "../_shared/types";

import type {
    ButtonClassName,
    DivClassName,
    SpanClassName,
} from "../_shared/types";

/** Time in the 24-hour `"HH:mm"` format, or `null` when nothing is selected. */
export type TimeValue = string | null;

export type InputTimeClassNames = {
    /** Content rendered for the trigger. */
    trigger?: ButtonClassName;
    /** The menu used by the component. */
    menu?: DivClassName;
    /** The hours and minutes columns. */
    columns?: DivClassName;
    /** The value used by the component. */
    value?: SpanClassName;
    /** The controls used by the component. */
    controls?: SpanClassName;
    /** Function used to clear button. */
    clearButton?: SpanClassName;
};

export type InputTimeProps = {
    /** Receives the time field root element. */
    ref?: Ref<HTMLDivElement>;
    /** The selected time in the `"HH:mm"` format. */
    value?: TimeValue;
    /** The initial time of the uncontrolled field. */
    defaultValue?: TimeValue;
    /** Callback invoked with the new `"HH:mm"` time, or `null` after clearing. */
    onChange?: (time: TimeValue) => void;
    /** Text used for the placeholder. Defaults to the `inputTime.placeholder` string from the active locale dictionary. */
    placeholder?: string;
    /** The minutes interval offered in the minutes column. */
    minuteStep?: number;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** Closes the menu after a minute is picked. */
    closeOnSelect?: boolean;
    /** Shows a button that clears the selected time. */
    clearable?: boolean;
    /** The popup menu position relative to its trigger. */
    menuPlacement?: PositionAnchor;
    /** The width of the popup menu. */
    menuWidth?: number | "auto";
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: InputTimeClassNames;
};
