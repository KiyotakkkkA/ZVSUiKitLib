import type { APIDirective } from "./types";

type DirectiveOptions = {
    placement?: APIDirective["placement"];
};

export function defineAPIDirective<Kind extends string, Payload>(
    kind: Kind,
    defaults: DirectiveOptions = {},
) {
    return (
        payload: Payload,
        options: DirectiveOptions = {},
    ): APIDirective<Kind, Payload> => ({
        kind,
        placement: options.placement ?? defaults.placement ?? "type",
        payload,
    });
}

export type EnumValuesDirectivePayload = {
    title: string;
    description?: string;
    values: readonly string[];
};

export const enumValuesDirective = defineAPIDirective<
    "enum-values",
    EnumValuesDirectivePayload
>("enum-values");

export const roundVariantsDirective = enumValuesDirective({
    title: "RoundVariants",
    description: "Available border-radius variants.",
    values: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-4xl",
        "rounded-full",
    ],
});

export const positionAnchorDirective = enumValuesDirective({
    title: "PositionAnchor",
    description: "Available positions relative to the trigger.",
    values: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
    ],
});
