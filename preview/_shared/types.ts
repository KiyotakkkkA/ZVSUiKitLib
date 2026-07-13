export type APIDirective<Kind extends string = string, Payload = unknown> = {
    kind: Kind;
    placement: "name" | "type";
    payload: Payload;
};

export type ComponentAPIProp = {
    type: string;
    description: string;
    defaultValue?: string;
    directives?: APIDirective[];
    slots?: Record<string, Omit<ComponentAPIProp, "slots">>;
};

type ComponentAPIEntityStruct = {
    name: string;
    description: string;
    props: Record<string, ComponentAPIProp>;
};

export type ComponentAPIDoc = {
    root: ComponentAPIEntityStruct;
    compound: ComponentAPIEntityStruct[];
};
