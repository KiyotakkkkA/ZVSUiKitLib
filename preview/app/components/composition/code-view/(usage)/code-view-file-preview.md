```tsx
"use client";
import { Badge, Button, Icon } from "@kiyotakkkka/zvs-uikit-lib";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/code-view";

const code = `import { Button, Card } from "@kiyotakkkka/zvs-uikit-lib";

type Plan = {
    name: string;
    price: number;
    features: string[];
};

export function PlanCard({ plan }: { plan: Plan }) {
    return (
        <Card rounded="rounded-xl">
            <Card.Header>
                <Card.Title>{plan.name}</Card.Title>
                <Card.Subtitle>\${plan.price} / month</Card.Subtitle>
            </Card.Header>
            <Card.Content>
                <ul>
                    {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </Card.Content>
            <Card.Footer>
                <Button className="w-full">Choose {plan.name}</Button>
            </Card.Footer>
        </Card>
    );
}
`;

export function DemoCodeViewFile() {
    return (
        <CodeView
            code={code}
            language="tsx"
            fileName="src/components/PlanCard.tsx"
            className="w-full max-w-2xl"
        >
            <CodeView.Header
                actions={
                    <div className="flex items-center gap-2">
                        <Badge size="sm" variant="success">
                            +34 lines
                        </Badge>
                        <Button size="sm" variant="ghost">
                            <Icon icon="github" />
                            View on GitHub
                        </Button>
                    </div>
                }
            />
            <CodeView.Content maxHeight={240} />
        </CodeView>
    );
}
```
