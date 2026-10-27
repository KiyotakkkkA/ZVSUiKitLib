```tsx
"use client";
import {
    Button,
    Card,
    InputCheckSlided,
    InputSmall,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoCardForm() {
    const [name, setName] = useState("Alisa Kim");
    const [email, setEmail] = useState("alisa@acme.dev");
    const [digest, setDigest] = useState(true);

    return (
        <Card rounded="rounded-xl" className="w-full max-w-md">
            <Card.Header>
                <Card.Title>Profile</Card.Title>
                <Card.Subtitle>
                    This information is visible to your teammates.
                </Card.Subtitle>
            </Card.Header>
            <Card.Content className="space-y-4 py-4">
                <label className="block space-y-1.5">
                    <span className="text-xs text-main-400">Full name</span>
                    <InputSmall
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label className="block space-y-1.5">
                    <span className="text-xs text-main-400">Email</span>
                    <InputSmall
                        preset="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <InputCheckSlided checked={digest} onChange={setDigest}>
                    <span className="text-sm text-main-200">
                        Send me a weekly digest
                    </span>
                </InputCheckSlided>
            </Card.Content>
            <Card.Footer className="flex justify-end gap-2">
                <Button variant="ghost">Cancel</Button>
                <Button>Save profile</Button>
            </Card.Footer>
        </Card>
    );
}
```
