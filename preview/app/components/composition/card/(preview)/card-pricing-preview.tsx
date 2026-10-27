"use client";
import { Badge, Button, Card, Icon } from "@kiyotakkkka/zvs-uikit-lib";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "For side projects and prototypes.",
        features: ["3 projects", "Community support", "1 GB storage"],
        cta: "Start for free",
        popular: false,
    },
    {
        name: "Team",
        price: "$24",
        description: "For small teams shipping every week.",
        features: [
            "Unlimited projects",
            "Priority support",
            "100 GB storage",
            "Role-based access",
        ],
        cta: "Start 14-day trial",
        popular: true,
    },
];

export function DemoCardPricing() {
    return (
        <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
            {plans.map((plan) => (
                <Card
                    key={plan.name}
                    rounded="rounded-xl"
                    className={
                        plan.popular
                            ? "flex flex-col border-main-400/60"
                            : "flex flex-col"
                    }
                >
                    <Card.Header className="border-b-0 pb-0">
                        <div className="flex items-center justify-between">
                            <Card.Title>{plan.name}</Card.Title>
                            {plan.popular && (
                                <Badge size="sm" variant="tertiary">
                                    Most popular
                                </Badge>
                            )}
                        </div>
                        <Card.Subtitle>{plan.description}</Card.Subtitle>
                    </Card.Header>
                    <Card.Content className="flex-1 space-y-4">
                        <p>
                            <span className="text-3xl font-semibold text-main-50">
                                {plan.price}
                            </span>
                            <span className="text-sm text-main-400">
                                {" "}
                                / user / month
                            </span>
                        </p>
                        <ul className="space-y-2 text-sm text-main-300">
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <Icon
                                        icon="check"
                                        className="text-success-light"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </Card.Content>
                    <Card.Footer className="border-t-0 pt-0">
                        <Button
                            className="w-full"
                            variant={plan.popular ? "primary" : "secondary"}
                        >
                            {plan.cta}
                        </Button>
                    </Card.Footer>
                </Card>
            ))}
        </div>
    );
}
