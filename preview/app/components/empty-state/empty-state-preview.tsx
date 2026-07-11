"use client";
import { Button, EmptyState } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function EmptyStatePreview() {
    return (
        <EmptyState
            title="No projects"
            description="Create a project to get started."
            action={<Button variant="primary">Create project</Button>}
        />
    );
}
