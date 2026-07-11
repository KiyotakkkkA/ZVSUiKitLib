import { Button } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoButton() {
    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-fit">
            <Button variant="primary">Primary</Button>
            <Button variant="primary" shape="rounded-full">
                Primary Rounded
            </Button>
            <Button variant="primary-outline">Primary Outline</Button>

            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" shape="rounded-full">
                Secondary Rounded
            </Button>
            <Button variant="ghost">Ghost</Button>

            <Button variant="tertiary">Tertiary</Button>
            <Button variant="tertiary" shape="rounded-full">
                Tertiary Rounded
            </Button>
            <Button variant="tertiary-outline">Tertiary Outline</Button>

            <Button variant="success">Success</Button>
            <Button variant="success" shape="rounded-full">
                Success Rounded
            </Button>
            <Button variant="success-outline">Success Outline</Button>

            <Button variant="warning">Warning</Button>
            <Button variant="warning" shape="rounded-full">
                Warning Rounded
            </Button>
            <Button variant="warning-outline">Warning Outline</Button>

            <Button variant="danger">Danger</Button>
            <Button variant="danger" shape="rounded-full">
                Danger Rounded
            </Button>
            <Button variant="danger-outline">Danger Outline</Button>
        </div>
    );
}
