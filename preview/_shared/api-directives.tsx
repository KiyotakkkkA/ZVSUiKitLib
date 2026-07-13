"use client";

import { Floating } from "@kiyotakkkka/zvs-uikit-lib";
import type { ReactNode } from "react";
import type { EnumValuesDirectivePayload } from "./directives";
import type { APIDirective } from "./types";

type DirectiveRenderer = (directive: APIDirective) => ReactNode;

function EnumValuesInfo({
    title,
    description,
    values,
}: EnumValuesDirectivePayload) {
    return (
        <div className="api-directive-content">
            <strong>{title}</strong>
            {description && <p>{description}</p>}
            <div className="api-directive-values">
                {values.map((value) => (
                    <code key={value}>{value}</code>
                ))}
            </div>
        </div>
    );
}

const directiveRenderers: Record<string, DirectiveRenderer> = {
    "enum-values": (directive) => (
        <EnumValuesInfo
            {...(directive.payload as EnumValuesDirectivePayload)}
        />
    ),
};

function InfoIcon() {
    return (
        <span className="api-directive-icon" aria-hidden="true">
            i
        </span>
    );
}

export function APIDirectives({ directives }: { directives?: APIDirective[] }) {
    if (!directives?.length) return null;

    return directives.map((directive, index) => {
        const render = directiveRenderers[directive.kind];

        if (!render) return null;

        return (
            <Floating
                key={`${directive.kind}-${index}`}
                anchor="bottom-center"
                className="api-directive"
            >
                <Floating.Trigger>
                    <button
                        type="button"
                        className="api-directive-trigger"
                        aria-label="Show type details"
                    >
                        <InfoIcon />
                    </button>
                </Floating.Trigger>
                <Floating.Content className="api-directive-panel">
                    {render(directive)}
                </Floating.Content>
            </Floating>
        );
    });
}
