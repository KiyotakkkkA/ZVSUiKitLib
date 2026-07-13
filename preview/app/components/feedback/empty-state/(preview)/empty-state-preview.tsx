"use client";
import { Button, EmptyState } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoEmptyState() {
    return (
        <EmptyState
            title="No projects"
            description="Create a project to start working with this workspace."
            action={<Button>Create project</Button>}
        />
    );
}

