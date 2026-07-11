"use client";
import { Calendar } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoCalendar() {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar value={date} onChange={setDate} />;
}
