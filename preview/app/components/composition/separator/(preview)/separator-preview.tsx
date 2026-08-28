"use client";
import { Separator } from "@kiyotakkkka/zvs-uikit-lib";
import { Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoSeparator() {
    return (
        <div className="w-full max-w-sm">
            <Text size="sm">Profile</Text>
            <Separator className="my-4" />
            <Text size="sm">Preferences</Text>
            <div className="mt-4 flex h-10 items-center gap-4">
                <span className="text-sm text-main-300">Email</span>
                <Separator orientation="vertical" />
                <span className="text-sm text-main-300">SMS</span>
                <Separator orientation="vertical" />
                <span className="text-sm text-main-300">Push</span>
            </div>
        </div>
    );
}
