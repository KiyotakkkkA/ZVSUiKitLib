"use client";
import {
    Badge,
    Breadcrumbs,
    Button,
    Heading,
    Icon,
} from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBreadcrumbsHeader() {
    return (
        <header className="w-full max-w-2xl space-y-3 rounded-xl border border-main-700/70 bg-main-900/50 p-5">
            <Breadcrumbs className="-ml-2">
                <Breadcrumbs.Nav href="#" label="Projects" />
                <Breadcrumbs.Nav href="#" label="Atlas CRM" />
                <Breadcrumbs.Nav label="Settings" active />
            </Breadcrumbs>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <Heading level={2} className="text-xl">
                        Project settings
                    </Heading>
                    <Badge variant="success" size="sm">
                        Live
                    </Badge>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary">
                        <Icon icon="content-copy" />
                        Duplicate
                    </Button>
                    <Button>Save changes</Button>
                </div>
            </div>
        </header>
    );
}
