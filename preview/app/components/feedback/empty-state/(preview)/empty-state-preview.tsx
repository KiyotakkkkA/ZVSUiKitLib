import { Button, EmptyState } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoEmptyState() {
    return (
        <EmptyState
            icon="mdi:folder-open-outline"
            title="No projects"
            description="Create a project to start working with this workspace."
            action={<Button>Create project</Button>}
        />
    );
}
