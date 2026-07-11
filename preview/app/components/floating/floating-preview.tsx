"use client";
import { Button, Floating } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function FloatingPreview() {
    return (
        <Floating anchor="bottom-center">
            <Floating.Trigger>
                <Button>Hover or focus</Button>
            </Floating.Trigger>
            <Floating.Content>Additional information</Floating.Content>
        </Floating>
    );
}
