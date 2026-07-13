import { Kbd, Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function KbdPreview() {
    return (
        <div className="w-full max-w-2xl space-y-5 p-3">
            <Text>
                Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open search.
            </Text>
            <Text tone="muted">
                Use <Kbd>Esc</Kbd> to close the current overlay.
            </Text>
        </div>
    );
}
