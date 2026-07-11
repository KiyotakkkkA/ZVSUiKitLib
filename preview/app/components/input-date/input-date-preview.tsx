"use client";

import { InputDate } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function InputDatePreview() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="preview-field">
            <span className="preview-label">Delivery date</span>
            <InputDate
                value={date}
                onChange={setDate}
                clearable
                closeOnSelect
                placeholder="Choose a date"
                menuPlacement="bottom-left"
            />
            <p>
                {date
                    ? `Selected: ${date.toLocaleDateString("en-US")}`
                    : "No date selected."}
            </p>
        </div>
    );
}
