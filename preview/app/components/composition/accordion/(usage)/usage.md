```tsx
"use client";
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAccordion() {
    return (
        <div className="w-full max-w-md divide-y divide-main-700/70">
            <Accordion defaultOpen className="py-3">
                <Accordion.Summary className="text-main-100">
                    <span className="text-sm font-semibold">
                        What is ZVS UI Kit?
                    </span>
                </Accordion.Summary>
                <Accordion.Content>
                    A precise React component library for teams who care
                    about craft, speed, and a design system that stays out
                    of the way.
                </Accordion.Content>
            </Accordion>
            <Accordion className="py-3">
                <Accordion.Summary className="text-main-100">
                    <span className="text-sm font-semibold">
                        Is it tree-shakeable?
                    </span>
                </Accordion.Summary>
                <Accordion.Content>
                    Yes, every component is a separate ESM export so unused
                    code never reaches your bundle.
                </Accordion.Content>
            </Accordion>
            <Accordion className="py-3">
                <Accordion.Summary className="text-main-100">
                    <span className="text-sm font-semibold">
                        Does it support theming?
                    </span>
                </Accordion.Summary>
                <Accordion.Content>
                    Yes, colors and radii are driven by CSS variables you can
                    override at runtime with useStyle.
                </Accordion.Content>
            </Accordion>
        </div>
    );
}
```
