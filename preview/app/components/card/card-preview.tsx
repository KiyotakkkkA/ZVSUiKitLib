"use client";
import { Card, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function CardPreview() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Project</Card.Title>
                <Card.Subtitle>Updated today</Card.Subtitle>
            </Card.Header>
            <Card.Content>
                Card content is composed from semantic slots.
            </Card.Content>
            <Card.Footer>
                <Button>Open</Button>
            </Card.Footer>
        </Card>
    );
}
