"use client";
import {
    Button,
    Icon,
    InputCheckSlided,
    InputSmall,
    PrettyBR,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoPrettyBRForm() {
    const [mentions, setMentions] = useState(true);
    const [releases, setReleases] = useState(false);

    return (
        <form
            className="w-full max-w-md space-y-3 rounded-xl border border-main-700/70 bg-main-900/50 p-5"
            onSubmit={(event) => event.preventDefault()}
        >
            <PrettyBR
                label="Account"
                icon={<Icon icon="account" />}
                className="mt-0"
            />
            <InputSmall placeholder="Display name" defaultValue="Alisa Kim" />
            <InputSmall preset="email" defaultValue="alisa@acme.dev" />

            <PrettyBR
                label="Security"
                icon={<Icon icon="shield-account" />}
            />
            <InputSmall preset="password" placeholder="New password" />

            <PrettyBR
                label="Notifications"
                icon={<Icon icon="email-outline" />}
            />
            <div className="flex flex-col gap-2.5">
                <InputCheckSlided checked={mentions} onChange={setMentions}>
                    <span className="text-sm text-main-200">
                        Mentions and replies
                    </span>
                </InputCheckSlided>
                <InputCheckSlided checked={releases} onChange={setReleases}>
                    <span className="text-sm text-main-200">
                        Product updates
                    </span>
                </InputCheckSlided>
            </div>

            <Button type="submit" className="mt-2 w-full">
                Save settings
            </Button>
        </form>
    );
}
