```tsx
"use client";
import { Accordion, AccordionGroup } from "@kiyotakkkka/zvs-uikit-lib";

const sections = [
    {
        title: "Account",
        content: "Profile details, avatar and the email used for sign-in.",
    },
    {
        title: "Billing",
        content: "Current plan, payment method and invoice history.",
    },
    {
        title: "Integrations",
        content: "Connected services and personal access tokens.",
    },
];

export function DemoAccordionGroup() {
    return (
        <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-main-500">
                    solid · only-one
                </span>
                <AccordionGroup showMode="only-one" className="gap-3">
                    {sections.map((section, index) => (
                        <Accordion
                            key={section.title}
                            preset="solid"
                            defaultOpen={index === 0}
                        >
                            <Accordion.Summary className="text-main-100">
                                <span className="text-sm font-semibold">
                                    {section.title}
                                </span>
                            </Accordion.Summary>
                            <Accordion.Content>{section.content}</Accordion.Content>
                        </Accordion>
                    ))}
                </AccordionGroup>
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-main-500">
                    ghost · multiple
                </span>
                <AccordionGroup showMode="multiple" className="gap-1">
                    {sections.map((section, index) => (
                        <Accordion
                            key={section.title}
                            preset="ghost"
                            defaultOpen={index === 0}
                        >
                            <Accordion.Summary className="text-main-100">
                                <span className="text-sm font-semibold">
                                    {section.title}
                                </span>
                            </Accordion.Summary>
                            <Accordion.Content>{section.content}</Accordion.Content>
                        </Accordion>
                    ))}
                </AccordionGroup>
            </div>
        </div>
    );
}
```
