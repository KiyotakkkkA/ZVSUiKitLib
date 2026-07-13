---
name: fill-component-doc-pages
description: Create, complete, or refactor component documentation pages in the zvs-uikit-lib-v2 preview application using the AutoFillSelector route as the house pattern. Use when adding a component route under preview/app/components, building Overview, one or more interactive Preview sections with colocated code, defining schema-driven API tables and directives, documenting compound parts or classNames slots, or wiring the page into preview navigation.
---

# Fill Component Documentation Pages

Build a complete preview page from the package implementation and markdown documentation. Keep the package API, examples, schema, route, and sidebar entry consistent.

Use `preview/app/components/inputs/auto-fill-selector` as the primary structural reference. Re-read its current files before editing because this pattern may evolve.

## Inspect before editing

1. Read the component implementation and public types:
    - `package/src/ui/<Component>/<Component>.tsx`
    - `package/src/ui/<Component>/types.ts`
    - related compound components and shared types
2. Read `package/src/ui/<Component>/<Component>.md` as the documentation source of truth.
3. Inspect exports in `package/src/ui/index.ts` when the component is new or import errors occur.
4. Inspect the target section in `preview/app/lib/components.ts` and `preview/app/components/layout.tsx`.
5. Re-read shared contracts before changing them:
    - `preview/app/molecules/*`
    - `preview/_shared/types.ts`
    - `preview/_shared/api-props.tsx`
    - `preview/_shared/directives.ts`
    - `preview/_shared/api-directives.tsx`
6. Search nearby pages for a specialized pattern before inventing one.

Do not infer the public API only from markdown. Resolve differences against implementation and types, then update stale markdown when documentation synchronization is in scope.

## Create the route structure

Use this layout:

```text
preview/app/components/<section>/<component-slug>/
├── page.tsx
├── props.ts
├── (preview)/
│   ├── <component>-preview.tsx
│   └── <additional-focused-preview>.tsx
└── (usage)/
    ├── usage.md
    └── <matching-focused-usage>.md
```

- Use lowercase kebab-case for the route slug.
- Keep rendered demos in `(preview)` and raw displayed examples in `(usage)`.
- Pair every displayed demo with code that reproduces it.
- Add `"use client"` to demos using hooks, browser APIs, event state, or client-only components.
- Import UI components from `@kiyotakkkka/zvs-uikit-lib`, not package source paths.
- Keep examples focused on the behavior being demonstrated.
- Do not resurrect deleted preview helpers. Stay self-contained unless a current shared abstraction already fits.

`SectionPreview.Code` accepts a raw string. Usage markdown may contain one fenced code block because `normalizeCode` strips the outer fence.

## Assemble `page.tsx`

Wrap top-level sections in `DocumentationPage`. Prefer this order:

1. `SectionOverview`
2. one or more `SectionPreview`
3. `SectionAPI`

Every navigable section receives:

```tsx
nav={{
    id: "stable-kebab-case-id",
    headerTitle: "Visible section heading",
    navTitle: "Short table-of-contents label",
}}
```

Keep every `id` non-empty, whitespace-free, and unique. `DocumentationPage` validates these rules and builds “On this page”.

### Overview

```tsx
<SectionOverview nav={...}>
    <SectionOverview.MetaTitle>Inputs</SectionOverview.MetaTitle>
    <SectionOverview.Title>AutoFillSelector</SectionOverview.Title>
    <SectionOverview.Description>
        Concise purpose and primary behavior.
    </SectionOverview.Description>
</SectionOverview>
```

Set `MetaTitle` to the sidebar category. Describe the outcome rather than repeating the component name.

### Preview sections

There may be any number of `SectionPreview` sections. Never force all behavior into one demo and never impose a fixed preview count.

Choose previews by user-visible behavior. Add enough focused previews to clearly demonstrate key props and meaningful states, for example:

- controlled and uncontrolled behavior;
- variants, sizes, rounding, placement, or orientation;
- disabled, loading, error, empty, or selected states;
- optional descriptions, icons, labels, or actions;
- compound arrangements;
- responsive or overflow behavior;
- callbacks whose result can be shown visibly.

Group closely related props in one demo. Split demos when combining them makes comparison harder. Avoid demos for trivial native props unless they expose component-specific behavior.

Build each preview as one connected visual block:

```tsx
<SectionPreview nav={...}>
    <SectionPreview.Component>
        <FocusedPreview />
    </SectionPreview.Component>
    <SectionPreview.Code label="FocusedExample.tsx">
        {focusedUsage}
    </SectionPreview.Code>
</SectionPreview>
```

- Always place the demo inside `SectionPreview.Component`.
- Use `SectionPreview.Code` only with `SectionPreview.Component`.
- Keep code immediately attached; the compound component owns joined borders and radii.
- Give every preview a unique `nav.id` and useful `navTitle`.
- Make the demo interactive when interaction is central to understanding the component.
- Ensure each usage file exactly matches its rendered preview, initial state, and data.

## Define `props.ts`

Export a `ComponentAPIDoc` with a root and explicit compound entities:

```ts
export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Component",
        description: "What the root owns.",
        props: {/* public root props */},
    },
    compound: [
        {
            name: "Item",
            description: "What Component.Item owns.",
            props: {/* public item props */},
        },
    ],
};
```

For every prop provide:

- `type`: readable public TypeScript type;
- `description`: behavior, not a repetition of the name;
- `defaultValue`: only when a real default exists, formatted for display;
- `directives`: optional reusable information for the prop or type;
- `slots`: optional nested styling targets.

Document the effective public contract:

- Include root props, real compound members, meaningful inherited behavior, defaults, callbacks, and constraints.
- Keep compound groups separate and display them as `Root.Member`.
- Exclude removed, internal, and destructured-only implementation details.
- Do not combine unrelated props into one fake row.
- Prefer aliases such as `RoundVariants` over a large inline union.

### Document `classNames`

Represent multiple internal styling targets as one `classNames` prop with `slots`. `APIProps` renders `SectionAPI.Object` automatically:

```ts
classNames: {
    type: "ComponentClassNames",
    description: "Classes for internal slots.",
    slots: {
        label: {
            type: "string",
            description: "Label classes.",
        },
        icon: {
            type: "string",
            description: "Icon classes.",
        },
    },
},
```

Place compound-specific slot maps in that compound entity, not on the root. Follow actual public names even when legacy docs use flattened `*ClassName` wording.

### Attach API directives

Use directives for information that would overload the table, especially enum values:

```ts
rounded: {
    type: "RoundVariants",
    description: "Border radius classes.",
    directives: [roundVariantsDirective],
},
```

`APIProps` automatically adds the icon and Floating content. Reuse shared directives from `preview/_shared/directives.ts`.

For another enum, call `enumValuesDirective({ title, description, values })`. For a new directive kind:

1. Create its typed factory with `defineAPIDirective` in `directives.ts`.
2. Add its renderer to `directiveRenderers` in `api-directives.tsx`.
3. Keep descriptors serializable across the server/client boundary.
4. Use `placement: "name"` only for name-specific information; default placement is `"type"`.

Do not add one-off tooltip JSX to a component page.

## Render the API schema

Use `APIProps`; do not repeat row mapping manually:

```tsx
<SectionAPI nav={apiNav}>
    <SectionAPI.Group
        title={componentProps.root.name}
        description={componentProps.root.description}
    >
        <SectionAPI.Table>
            <APIProps props={componentProps.root.props} />
        </SectionAPI.Table>
    </SectionAPI.Group>

    {componentProps.compound.map((compound) => (
        <SectionAPI.Group
            key={compound.name}
            title={`${componentProps.root.name}.${compound.name}`}
            description={compound.description}
        >
            <SectionAPI.Table>
                <APIProps props={compound.props} />
            </SectionAPI.Table>
        </SectionAPI.Group>
    ))}
</SectionAPI>
```

Use no compound groups for a non-compound component. Never invent empty members to satisfy the template.

## Register the page

Add the component to the correct section in `preview/app/lib/components.ts`:

```ts
{
    slug: "component-slug",
    name: "ComponentName",
    summary: "Short user-facing summary.",
}
```

Confirm that `preview/app/components/layout.tsx` renders the section through `SidebarNavigationSection`. Add a layout section only when the category itself is new. Keep its `prefix` aligned with the route folder.

Update `preview/app/components/page.tsx` only when the default redirect must change.

## Keep all artifacts synchronized

Treat these as one feature:

- package implementation and types;
- package markdown API and examples;
- preview demos;
- usage markdown;
- `props.ts` schema;
- route metadata and navigation registry.

When a prop or variant changes, update every affected artifact. Do not preserve stale defaults, removed props, or old imports.

## Validate

Run checks in this order:

1. Search for stale names, imports, removed props, and missing exports with `rg`.
2. If package code changed: `npx tsc -p package/tsconfig.json --noEmit`.
3. After route changes: `npx next typegen preview`.
4. Run `npm run typecheck:preview`.
5. Run `npm run lint:preview`.
6. For route restructuring or broad work, run `npm run build:preview` when feasible.

If preview imports cannot find a new package export, rebuild package artifacts before blaming preview code. If unrelated existing errors block validation, report exact failing files and separately list scoped checks that passed.

## Completion checklist

- Page is reachable from the correct sidebar section.
- Overview category, title, and description are accurate.
- Preview count is driven by key behaviors, not a fixed template.
- Every preview visibly demonstrates intended props and has matching code.
- API schema covers the root and real compound members with correct defaults.
- Nested `classNames` use `slots`; shared enum information uses directives.
- Navigation IDs are unique and TOC labels are useful.
- Package markdown, preview examples, and implementation do not contradict each other.
- Relevant typecheck, lint, typegen, and build results are reported precisely.
