"use client";
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib";

export function BreadcrumbsPreview() {
    return (
        <Breadcrumbs separator={<span>/</span>}>
            <Breadcrumbs.Nav label="Main" onClick={() => {}} />
            <Breadcrumbs.Nav label="Projects" onClick={() => {}} />
            <Breadcrumbs.Nav label="Current Project" active />
        </Breadcrumbs>
    );
}
