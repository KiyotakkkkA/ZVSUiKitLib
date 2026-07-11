import { SectionAPI } from "../../molecules";

type P = {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
    slots?: string[];
};
type G = { title: string; description?: string; props: P[] };
const p = (
    name: string,
    type: string,
    description: string,
    defaultValue?: string,
): P => ({ name, type, description, defaultValue });
const c = (type: string, values: string[]): P => ({
    name: "classNames",
    type,
    description: "Classes for internal slots.",
    slots: values,
});
const native = (element: string): P =>
    p(
        `...${element}Props`,
        `ComponentPropsWithoutRef<"${element}">`,
        `Remaining native ${element} attributes are forwarded.`,
    );

const groups: Record<string, G[]> = {
    AutoFillSelector: [
        {
            title: "AutoFillSelector",
            description: "Extends div attributes without native onChange.",
            props: [
                p("options", "AutoFillOption[]", "Available options."),
                p("value", "string[]", "Controlled selected values."),
                p(
                    "onChange",
                    "(value: string[]) => void",
                    "Selection callback.",
                ),
                p("disabled", "boolean", "Disables interaction.", "false"),
                p("menuWidth", "number | string", "Popup width."),
                p(
                    "onOpenChange",
                    "(open: boolean) => void",
                    "Open-state callback.",
                ),
                p("children", "ReactNode", "Compound parts."),
                native("div"),
            ],
        },
        {
            title: "AutoFillSelector.Trigger",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                p("children", "ReactNode", "Trigger content."),
                p("className", "string", "Trigger classes."),
            ],
        },
        {
            title: "AutoFillSelector.Tags",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                p("children", "ReactNode", "Selected tags."),
                p(
                    "tagClassName / tagRemoveClassName",
                    "string",
                    "Tag and remove-button classes.",
                ),
                p("className", "string", "Tags wrapper classes."),
            ],
        },
        {
            title: "AutoFillSelector.Input",
            description:
                "Extends supported InputHTMLAttributes<HTMLInputElement>.",
            props: [
                p("className", "string", "Search input classes."),
                native("input"),
            ],
        },
        {
            title: "AutoFillSelector.Menu",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                p("children", "ReactNode", "Menu content."),
                p("scrollClassName", "string", "Scrollable area classes."),
                p("className", "string", "Menu classes."),
            ],
        },
        {
            title: "AutoFillSelector.Options",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                p("children", "ReactNode", "Filtered options."),
                p(
                    "optionClassName / optionLabelClassName / optionDescriptionClassName / optionIconClassName",
                    "string",
                    "Option slot classes.",
                ),
                p("className", "string", "Options wrapper classes."),
            ],
        },
        {
            title: "AutoFillSelector.Empty",
            description: "Extends HTMLAttributes<HTMLDivElement>.",
            props: [
                p("children", "ReactNode", "Empty-state content."),
                p("className", "string", "Empty-state classes."),
            ],
        },
    ],
    Button: [
        {
            title: "Button",
            description: "Extends ButtonHTMLAttributes<HTMLButtonElement>.",
            props: [
                p("children", "ReactNode", "Button content."),
                p("label", "string", "Accessible label."),
                p(
                    "loading",
                    "boolean",
                    "Shows loader and disables interaction.",
                    "false",
                ),
                p("loadingText", "string", "Text shown while loading."),
                p(
                    "variant",
                    'ButtonVariants | ""',
                    "Visual variant.",
                    "secondary",
                ),
                p(
                    "shape",
                    'ButtonShape | ""',
                    "Border radius preset.",
                    "rounded-md",
                ),
                p("disabled", "boolean", "Disables the button.", "false"),
                p("className", "string", "Button classes."),
                c("ButtonClassNames", ["loaderIcon", "loaderText"]),
                native("button"),
            ],
        },
    ],
    Calendar: [
        {
            title: "Calendar",
            props: [
                p(
                    "value / defaultValue",
                    "Date | null",
                    "Controlled or initial selected date.",
                ),
                p(
                    "onChange",
                    "(date: Date | null) => void",
                    "Selection callback.",
                ),
                p(
                    "viewDate / defaultViewDate",
                    "Date",
                    "Controlled or initial visible month.",
                ),
                p(
                    "onViewDateChange",
                    "(date: Date) => void",
                    "Visible-month callback.",
                ),
                p("minDate / maxDate", "Date", "Selectable date bounds."),
                p(
                    "disabledDates",
                    "Date[] | ((date: Date) => boolean)",
                    "Disabled dates or predicate.",
                ),
                p(
                    "allowDeselect",
                    "boolean",
                    "Allows clearing by selecting the active day.",
                ),
                p("showOutsideDays", "boolean", "Shows adjacent-month days."),
                p("locale", "string", "Intl locale."),
                p(
                    "weekStartsOn",
                    "0 | 1 | 2 | 3 | 4 | 5 | 6",
                    "First weekday.",
                ),
                p(
                    "renderDay",
                    "(meta: DayMeta) => ReactNode",
                    "Custom day renderer.",
                ),
                p("className", "string", "Root classes."),
                c("CalendarClassNames", [
                    "header",
                    "navButton",
                    "selectors",
                    "monthSelect",
                    "yearSelect",
                    "weekdays",
                    "weekday",
                    "days",
                    "day",
                ]),
            ],
        },
    ],
    InputBig: [
        {
            title: "InputBig",
            description: "Extends TextareaHTMLAttributes<HTMLTextAreaElement>.",
            props: [
                p("className", "string", "Textarea classes."),
                p(
                    "value / defaultValue",
                    "string",
                    "Controlled or initial value.",
                ),
                p(
                    "onChange",
                    "ChangeEventHandler<HTMLTextAreaElement>",
                    "Native change callback.",
                ),
                p(
                    "disabled / readOnly",
                    "boolean",
                    "Native interaction states.",
                ),
                native("textarea"),
            ],
        },
    ],
    InputCheckBox: [
        {
            title: "InputCheckBox",
            description:
                "Forwards native input attributes except type, checked, onChange, and className.",
            props: [
                p("checked", "boolean", "Controlled checked state."),
                p(
                    "onChange",
                    "(checked: boolean) => void",
                    "Checked-state callback.",
                ),
                p("className", "string", "Outer label classes."),
                c("InputCheckBoxClassNames", ["input", "mark", "indicator"]),
                native("input"),
            ],
        },
    ],
    InputCheckSlided: [
        {
            title: "InputCheckSlided",
            props: [
                p("checked", "boolean", "Controlled checked state."),
                p(
                    "onChange",
                    "(checked: boolean) => void",
                    "Checked-state callback.",
                ),
                p("disabled", "boolean", "Disables interaction.", "false"),
                p("className", "string", "Button classes."),
                c("InputCheckSlidedClassNames", ["thumb"]),
            ],
        },
    ],
    InputColor: [
        {
            title: "InputColor",
            description: "Forwards supported native input attributes.",
            props: [
                p(
                    "value / defaultValue",
                    "string",
                    "Controlled or initial CSS color.",
                ),
                p("onChange", "(value: string) => void", "Color callback."),
                p("label", "ReactNode", "Field label."),
                p("showValue", "boolean", "Displays formatted value."),
                p("size", '"sm" | "md" | "lg"', "Control size."),
                p(
                    "palettePresets",
                    "string[] | null",
                    "Preset colors; null hides palette.",
                ),
                p(
                    "valueFormatter",
                    "(value: string) => ReactNode",
                    "Custom displayed value.",
                ),
                p("className", "string", "Root classes."),
                c("InputColorClassNames", [
                    "label",
                    "control",
                    "picker",
                    "preview",
                    "input",
                    "value",
                    "panel",
                    "colorArea",
                    "colorAreaThumb",
                    "hueTrack",
                    "hueThumb",
                    "alphaTrack",
                    "alphaThumb",
                    "eyeDropper",
                    "hexInput",
                    "palette",
                    "preset",
                ]),
            ],
        },
    ],
    InputDate: [
        {
            title: "InputDate",
            props: [
                p(
                    "value / defaultValue",
                    "Date | null",
                    "Controlled or initial date.",
                ),
                p("onChange", "(date: Date | null) => void", "Date callback."),
                p("placeholder", "string", "Empty-state label."),
                p(
                    "locale / weekStartsOn",
                    "Calendar locale options",
                    "Calendar localization.",
                ),
                p(
                    "minDate / maxDate / disabledDates",
                    "Calendar constraints",
                    "Selectable date constraints.",
                ),
                p(
                    "allowDeselect / showOutsideDays",
                    "boolean",
                    "Calendar behavior.",
                ),
                p("disabled", "boolean", "Disables trigger."),
                p("closeOnSelect", "boolean", "Closes popup after selection."),
                p("clearable", "boolean", "Shows clear control."),
                p("menuPlacement", "DropdownMenuPlacement", "Popup placement."),
                p("menuWidth", 'number | "auto"', "Popup width."),
                p(
                    "formatLabel",
                    "(date: Date) => string",
                    "Selected-date formatter.",
                ),
                p("className", "string", "Root classes."),
                c("InputDateClassNames", [
                    "trigger",
                    "menu",
                    "calendar",
                    "value",
                    "controls",
                    "clearButton",
                ]),
            ],
        },
    ],
    InputDropZone: [
        {
            title: "InputDropZone",
            props: [
                p(
                    "file / files",
                    "File | null / File[]",
                    "Selected file value for single or multiple mode.",
                ),
                p("previewUrls", "string[]", "Existing preview URLs."),
                p(
                    "onChange",
                    "(file, previewUrls) => void",
                    "Single-file callback.",
                ),
                p(
                    "onFilesChange",
                    "(files, previewUrls) => void",
                    "Multiple-file callback.",
                ),
                p("multiple", "boolean", "Enables multiple files."),
                p("disabled", "boolean", "Disables picker and drag/drop."),
                p("accept", "string", "Native accepted file types."),
                p(
                    "emptyIcon / selectedIcon / fileIcon",
                    "string",
                    "Iconify icon names.",
                ),
                p(
                    "emptyTitle / emptyDescription / selectedDescription",
                    "string",
                    "State labels.",
                ),
                p(
                    "clearLabel / clearAllLabel",
                    "string",
                    "Clear-action labels.",
                ),
                p(
                    "previewAlt / uploadedFileLabel / selectedMultipleDescription",
                    "string",
                    "Accessible and multiple-file labels.",
                ),
            ],
        },
    ],
    InputPins: [
        {
            title: "InputPins",
            description: "Forwards supported native input attributes.",
            props: [
                p("value", "string", "Controlled PIN value."),
                p("onChange", "(value: string) => void", "PIN callback."),
                p("length", "number", "Number of input cells."),
                p("label", "string", "Accessible group label."),
                p("disabled", "boolean", "Disables inputs."),
                p("mask", "boolean", "Masks entered characters."),
                p("className", "string", "Root classes."),
                c("InputPinsClassNames", ["group", "input"]),
                native("input"),
            ],
        },
    ],
    InputRadio: [
        {
            title: "InputRadio",
            description:
                "Forwards native radio attributes except controlled fields.",
            props: [
                p("checked", "boolean", "Controlled checked state."),
                p(
                    "onChange",
                    "(checked: boolean) => void",
                    "Checked callback.",
                ),
                p("className", "string", "Outer label classes."),
                c("InputRadioClassNames", ["input", "dot", "indicator"]),
                native("input"),
            ],
        },
    ],
    InputSlider: [
        {
            title: "InputSlider",
            description: "Forwards supported native range attributes.",
            props: [
                p("value", "number", "Controlled value."),
                p("onChange", "(value: number) => void", "Value callback."),
                p("min / max / step", "number", "Numeric range configuration."),
                p("disabled", "boolean", "Disables interaction."),
                p("showValue", "boolean", "Displays current value."),
                p(
                    "valueFormatter",
                    "(value: number) => string",
                    "Displayed-value formatter.",
                ),
                p("className", "string", "Root classes."),
                c("InputSliderClassNames", [
                    "track",
                    "fill",
                    "thumb",
                    "input",
                    "value",
                ]),
                native("input"),
            ],
        },
    ],
    InputSmall: [
        {
            title: "InputSmall",
            description: "Extends InputHTMLAttributes<HTMLInputElement>.",
            props: [
                p("className", "string", "Native input classes."),
                c("InputSmallClassNames", ["wrapper", "icon"]),
                p(
                    "type",
                    "HTMLInputTypeAttribute",
                    "Password enables visibility control.",
                    "text",
                ),
                p(
                    "value / defaultValue",
                    "string | number",
                    "Controlled or initial value.",
                ),
                p(
                    "onChange",
                    "ChangeEventHandler<HTMLInputElement>",
                    "Native change callback.",
                ),
                p(
                    "disabled / readOnly",
                    "boolean",
                    "Native interaction states.",
                ),
                native("input"),
            ],
        },
    ],
    Select: [
        {
            title: "Select",
            props: [
                p("value", "string", "Controlled selected value."),
                p("onChange", "(value: string) => void", "Selection callback."),
                p("options", "SelectOption[]", "Available options."),
                p(
                    "placeholder / searchPlaceholder / emptyMessage",
                    "string",
                    "UI labels.",
                ),
                p("searchable", "boolean", "Enables option search."),
                p("disabled", "boolean", "Disables selection."),
                p("menuWidth", "number | string", "Popup width."),
                p("menuPlacement", "DropdownMenuPlacement", "Popup placement."),
                p("closeOnSelect", "boolean", "Closes popup after selection."),
                p("className", "string", "Root classes."),
                c("SelectClassNames", [
                    "trigger",
                    "menu",
                    "search",
                    "option",
                    "optionLabel",
                ]),
            ],
        },
    ],
    SelectNative: [
        {
            title: "SelectNative",
            description:
                "Forwards native select attributes except onChange and className.",
            props: [
                p("options", "SelectNativeOption[]", "Native options."),
                p("onChange", "(value: string) => void", "Selection callback."),
                p("placeholder", "string", "Placeholder option."),
                p("className", "string", "Root classes."),
                c("SelectNativeClassNames", ["select"]),
                native("select"),
            ],
        },
    ],
    Switcher: [
        {
            title: "Switcher",
            props: [
                p("value", "string", "Controlled selected value."),
                p("options", "SwitcherOption[]", "Available tabs."),
                p("onChange", "(value: string) => void", "Selection callback."),
                p("className", "string", "Root classes."),
                c("SwitcherClassNames", ["tab"]),
            ],
        },
    ],
    Tabs: [
        {
            title: "Tabs",
            description:
                "Extends native div attributes without children and onChange.",
            props: [
                p("value", "string", "Controlled active tab."),
                p("onChange", "(value: string) => void", "Tab callback."),
                p("options", "TabOption[]", "Tabs and disabled states."),
                c("TabsClassNames", ["list", "tab", "activeTab"]),
                p(
                    "tabProps",
                    'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">',
                    "Attributes shared by tab buttons.",
                ),
                native("div"),
            ],
        },
    ],
};

function Item({ item }: { item: P }) {
    return (
        <SectionAPI.Prop
            name={item.name}
            type={item.type}
            description={item.description}
            defaultValue={item.defaultValue}
        >
            {item.slots && (
                <SectionAPI.Object
                    title={item.type}
                    description="Slot-level style overrides."
                >
                    {item.slots.map((x) => (
                        <SectionAPI.Prop
                            key={x}
                            name={x}
                            type="string"
                            description={`Classes applied to the ${x} slot.`}
                        />
                    ))}
                </SectionAPI.Object>
            )}
        </SectionAPI.Prop>
    );
}
export function InputAPI({ component }: { component: keyof typeof groups }) {
    return (
        <SectionAPI nav={{ id: "api", title: "API reference" }}>
            {groups[component].map((g) => (
                <SectionAPI.Group
                    key={g.title}
                    title={g.title}
                    description={g.description}
                >
                    <SectionAPI.Table>
                        {g.props.map((x) => (
                            <Item key={x.name} item={x} />
                        ))}
                    </SectionAPI.Table>
                </SectionAPI.Group>
            ))}
        </SectionAPI>
    );
}
