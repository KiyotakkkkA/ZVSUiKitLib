import { SectionAPI } from "../app/molecules";
import { APIDirectives } from "./api-directives";
import type { ComponentAPIProp } from "./types";

function APIProp({ name, prop }: { name: string; prop: ComponentAPIProp }) {
    const nameDirectives = prop.directives?.filter(
        (directive) => directive.placement === "name",
    );
    const typeDirectives = prop.directives?.filter(
        (directive) => directive.placement === "type",
    );

    return (
        <SectionAPI.Prop
            name={name}
            type={prop.type}
            description={prop.description}
            defaultValue={prop.defaultValue}
            nameInfo={<APIDirectives directives={nameDirectives} />}
            typeInfo={<APIDirectives directives={typeDirectives} />}
        >
            {prop.slots && (
                <SectionAPI.Object
                    title={prop.type}
                    description="Slot-level style overrides."
                >
                    {Object.entries(prop.slots).map(([slotName, slot]) => (
                        <APIProp key={slotName} name={slotName} prop={slot} />
                    ))}
                </SectionAPI.Object>
            )}
        </SectionAPI.Prop>
    );
}

export function APIProps({
    props,
}: {
    props: Record<string, ComponentAPIProp>;
}) {
    return Object.entries(props).map(([name, prop]) => (
        <APIProp key={name} name={name} prop={prop} />
    ));
}
