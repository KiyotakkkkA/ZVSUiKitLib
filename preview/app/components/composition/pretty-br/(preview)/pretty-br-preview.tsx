"use client";
import { Icon, PrettyBR } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoPrettyBR() {
    return (
        <div className="w-full max-w-md space-y-6">
            <PrettyBR
                label="Main block"
                icon={<Icon icon="sparkles-outline" />}
            />
            <PrettyBR label="Default icon" />
            <PrettyBR />
        </div>
    );
}
