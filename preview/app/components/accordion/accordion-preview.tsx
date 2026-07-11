"use client";
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function AccordionPreview() {
    return (
        <Accordion defaultOpen>
            <Accordion.Summary>Project settings</Accordion.Summary>
            <Accordion.Content>
                Configure access, notifications, and integrations here.
            </Accordion.Content>
        </Accordion>
    );
}
