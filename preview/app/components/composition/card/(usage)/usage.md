```tsx
"use client";
import { Card, Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoCard() {
    return (
        <Card className="max-w-sm">
            <Card.Header>
                <Card.Title>Profile</Card.Title>
                <Card.Subtitle>Basic information</Card.Subtitle>
            </Card.Header>

            <Card.Content>Card body content</Card.Content>

            <Card.Footer className="flex justify-end">
                <Button>Save</Button>
            </Card.Footer>
        </Card>
    );
}
```

