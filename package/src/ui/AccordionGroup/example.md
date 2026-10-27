```tsx
"use client";
import { Accordion, AccordionGroup } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAccordionGroup() {
    return (
        <AccordionGroup showMode="only-one">
            <Accordion defaultOpen>
                <Accordion.Summary>Account</Accordion.Summary>
                <Accordion.Content>Profile details and sign-in email.</Accordion.Content>
            </Accordion>
            <Accordion>
                <Accordion.Summary>Billing</Accordion.Summary>
                <Accordion.Content>Current plan and invoices.</Accordion.Content>
            </Accordion>
        </AccordionGroup>
    );
}
```
