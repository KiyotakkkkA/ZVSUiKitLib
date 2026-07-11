import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import formatLabelCode from "./format-label.md";
import { InputDatePreview } from "./input-date-preview";
import usageCode from "./usage.md";

export const metadata: Metadata = {
    title: "InputDate",
    description: "Date input with a calendar popup and date constraints.",
};

export default function InputDatePage() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Input &amp; form control
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>InputDate</SectionOverview.Title>
                <SectionOverview.Description>
                    A date field paired with a calendar popup, clear action,
                    locale formatting, placement control, and selection
                    constraints.
                </SectionOverview.Description>
                <SectionOverview.Tags>
                    <span>Stable</span>
                    <span>Controlled or uncontrolled</span>
                    <span>Locale aware</span>
                </SectionOverview.Tags>
            </SectionOverview>

            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <InputDatePreview />
            </SectionPreview>

            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="DeliveryDateField.tsx"
            >
                {usageCode}
            </SectionCode>

            <SectionCode
                nav={{ id: "formatting", title: "Custom formatting" }}
                label="FormattedDate.tsx"
            >
                {formatLabelCode}
            </SectionCode>

            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group
                    title="InputDate"
                    description="Date state, calendar behavior, popup placement, and visual slots."
                >
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="value"
                            type="Date | null"
                            description="Controlled selected date."
                        />
                        <SectionAPI.Prop
                            name="defaultValue"
                            type="Date | null"
                            defaultValue="null"
                            description="Initial uncontrolled date."
                        />
                        <SectionAPI.Prop
                            name="onChange"
                            type="(date: Date | null) => void"
                            description="Selection and clear callback."
                        />
                        <SectionAPI.Prop
                            name="placeholder"
                            type="string"
                            defaultValue="Выберите дату"
                            description="Text displayed without a value."
                        />
                        <SectionAPI.Prop
                            name="locale"
                            type="string"
                            defaultValue="ru-RU"
                            description="Locale used for labels and formatting."
                        />
                        <SectionAPI.Prop
                            name="weekStartsOn"
                            type="0 | 1 | 2 | 3 | 4 | 5 | 6"
                            defaultValue="1"
                            description="First weekday index."
                        />
                        <SectionAPI.Prop
                            name="minDate"
                            type="Date"
                            description="Earliest selectable date."
                        />
                        <SectionAPI.Prop
                            name="maxDate"
                            type="Date"
                            description="Latest selectable date."
                        />
                        <SectionAPI.Prop
                            name="disabledDates"
                            type="Date[] | ((date: Date) => boolean)"
                            description="Explicit dates or predicate that disables selection."
                        />
                        <SectionAPI.Prop
                            name="allowDeselect"
                            type="boolean"
                            description="Allows clicking the selected date to clear it."
                        />
                        <SectionAPI.Prop
                            name="showOutsideDays"
                            type="boolean"
                            defaultValue="true"
                            description="Shows adjacent-month days."
                        />
                        <SectionAPI.Prop
                            name="disabled"
                            type="boolean"
                            defaultValue="false"
                            description="Disables trigger and calendar interaction."
                        />
                        <SectionAPI.Prop
                            name="closeOnSelect"
                            type="boolean"
                            defaultValue="false"
                            description="Closes the popup after a date is chosen."
                        />
                        <SectionAPI.Prop
                            name="clearable"
                            type="boolean"
                            defaultValue="false"
                            description="Shows a clear action for the current value."
                        />
                        <SectionAPI.Prop
                            name="menuPlacement"
                            type="DropdownMenuPlacement"
                            defaultValue="bottom-left"
                            description="Popup placement relative to the trigger."
                        />
                        <SectionAPI.Prop
                            name="menuWidth"
                            type="number | auto"
                            defaultValue="300"
                            description="Calendar popup width."
                        />
                        <SectionAPI.Prop
                            name="className"
                            type="string"
                            description="Root wrapper classes."
                        />
                        <SectionAPI.Prop
                            name="classNames"
                            type="InputDateClassNames"
                            description="Classes for internal component slots."
                        >
                            <SectionAPI.Object
                                title="InputDateClassNames"
                                description="Nested styling contract for complex props."
                            >
                                <SectionAPI.Prop
                                    name="trigger"
                                    type="string"
                                    description="Date trigger button."
                                />
                                <SectionAPI.Prop
                                    name="menu"
                                    type="string"
                                    description="Dropdown menu wrapper."
                                />
                                <SectionAPI.Prop
                                    name="calendar"
                                    type="string"
                                    description="Calendar root."
                                />
                                <SectionAPI.Prop
                                    name="value"
                                    type="string"
                                    description="Formatted value text."
                                />
                                <SectionAPI.Prop
                                    name="controls"
                                    type="string"
                                    description="Value and clear controls wrapper."
                                />
                                <SectionAPI.Prop
                                    name="clearButton"
                                    type="string"
                                    description="Clear action."
                                />
                            </SectionAPI.Object>
                        </SectionAPI.Prop>
                        <SectionAPI.Prop
                            name="formatLabel"
                            type="(date: Date) => string"
                            description="Overrides visible date formatting."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
