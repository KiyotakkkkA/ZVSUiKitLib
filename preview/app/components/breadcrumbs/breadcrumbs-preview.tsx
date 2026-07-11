"use client";
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib";
export function BreadcrumbsPreview() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Nav label="Home" onClick={() => {}} />
            <Breadcrumbs.Nav label="Components" onClick={() => {}} />
            <Breadcrumbs.Nav label="Breadcrumbs" active />
        </Breadcrumbs>
    );
}
