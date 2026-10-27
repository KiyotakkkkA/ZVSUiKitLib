```tsx
"use client";
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAccordionGhost() {
    return (
        <div className="flex w-full max-w-md flex-col gap-1">
            <Accordion preset="ghost" defaultOpen>
                <Accordion.Summary className="text-main-100">
                    <span className="text-sm font-semibold">General</span>
                </Accordion.Summary>
                <Accordion.Content>
                    Workspace name, language and default landing page.
                </Accordion.Content>
            </Accordion>
            <Accordion preset="ghost">
                <Accordion.Summary className="text-main-100">
                    <span className="text-sm font-semibold">Notifications</span>
                </Accordion.Summary>
                <Accordion.Content>
                    Choose which events send an email or an in-app alert.
                </Accordion.Content>
            </Accordion>
            <Accordion preset="ghost">
                <Accordion.Summary className="text-main-100">
                    <span className="text-sm font-semibold">Security</span>
                </Accordion.Summary>
                <Accordion.Content>
                    Two-factor authentication and active sessions.
                </Accordion.Content>
            </Accordion>
        </div>
    );
}
```
