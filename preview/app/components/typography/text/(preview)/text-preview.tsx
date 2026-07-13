import { Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function TextPreview() {
    return (
        <div className="w-full max-w-3xl space-y-8 p-3">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">Large</span>
                <Text size="lg">
                    Clear body text introduces a section without competing with
                    its heading.
                </Text>
            </div>
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">Default</span>
                <Text>
                    Comfortable line height keeps product copy readable across
                    dense interfaces.
                </Text>
            </div>
            <div className="grid gap-3 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">Muted</span>
                <Text size="sm" tone="muted">
                    Supporting text clarifies context, constraints, or the
                    result of an action.
                </Text>
            </div>
        </div>
    );
}
