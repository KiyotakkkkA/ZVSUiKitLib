"use client";
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAccordion() {
    return (
        <Accordion defaultOpen>
            <Accordion.Summary className="text-main-100">
                <span className="text-xs font-semibold">Настройки</span>
            </Accordion.Summary>

            <Accordion.Content>Содержимое секции</Accordion.Content>
        </Accordion>
    );
}
