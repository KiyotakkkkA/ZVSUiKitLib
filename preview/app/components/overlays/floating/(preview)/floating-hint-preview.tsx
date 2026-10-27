"use client";
import { Floating, Icon, InputSmall } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoFloatingHint() {
    return (
        <div className="w-full max-w-sm space-y-4">
            <label className="block space-y-1.5">
                <span className="flex items-center gap-1.5 text-xs text-main-400">
                    API key
                    <Floating anchor="top-center" fixOnClick={false}>
                        <Floating.Trigger
                            tabIndex={0}
                            aria-label="About API keys"
                            className="flex cursor-help text-main-500 hover:text-main-200"
                        >
                            <Icon icon="information-outline" />
                        </Floating.Trigger>
                        <Floating.Content className="w-60 text-xs leading-5">
                            Keys are shown only once. Store it in a secret
                            manager and rotate it every 90 days.
                        </Floating.Content>
                    </Floating>
                </span>
                <InputSmall preset="password" defaultValue="sk_live_51Hx…" />
            </label>
            <label className="block space-y-1.5">
                <span className="flex items-center gap-1.5 text-xs text-main-400">
                    Webhook URL
                    <Floating anchor="top-center" fixOnClick={false}>
                        <Floating.Trigger
                            tabIndex={0}
                            aria-label="About webhooks"
                            className="flex cursor-help text-main-500 hover:text-main-200"
                        >
                            <Icon icon="information-outline" />
                        </Floating.Trigger>
                        <Floating.Content className="w-60 text-xs leading-5">
                            We send a POST request with a signed JSON payload
                            for every event in this project.
                        </Floating.Content>
                    </Floating>
                </span>
                <InputSmall preset="url" placeholder="https://example.com/hooks" />
            </label>
        </div>
    );
}
