```tsx
"use client";
import { Breadcrumbs, Icon } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBreadcrumbsLinks() {
    return (
        <div className="w-full max-w-xl space-y-5">
            <Breadcrumbs separator={<Icon icon="chevron-right" />}>
                <Breadcrumbs.Nav href="#" label="Home" />
                <Breadcrumbs.Nav href="#" label="Docs" />
                <Breadcrumbs.Nav href="#" label="Components" />
                <Breadcrumbs.Nav label="Breadcrumbs" active />
            </Breadcrumbs>

            <Breadcrumbs separator="›">
                <Breadcrumbs.Nav
                    href="#"
                    label={
                        <span className="inline-flex items-center gap-1.5">
                            <Icon icon="folder-outline" />
                            workspace
                        </span>
                    }
                />
                <Breadcrumbs.Nav href="#" label="clients" />
                <Breadcrumbs.Nav
                    href="#"
                    label="northwind-enterprise-onboarding-2026"
                />
                <Breadcrumbs.Nav label="contract-final-v3.pdf" active />
            </Breadcrumbs>

            <Breadcrumbs>
                <Breadcrumbs.Nav href="#" label="Store" />
                <Breadcrumbs.Nav label="Archive" disabled href="#" />
                <Breadcrumbs.Nav
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    label="Opens in a new tab"
                />
            </Breadcrumbs>
        </div>
    );
}
```
