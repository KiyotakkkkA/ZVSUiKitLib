# Type dictionary

Shared and reusable property types referenced by component documentation.

## RoundVariants

```ts
type RoundVariants =
    | "rounded-none"
    | "rounded-sm"
    | "rounded"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | "rounded-3xl"
    | "rounded-4xl"
    | "rounded-full";
```

## Orientation

```ts
type Orientation = "horizontal" | "vertical";
```

## ScrollAreaOrientation

```ts
type ScrollAreaOrientation = Orientation | "both";
```

## PositionAnchor

```ts
type PositionAnchor =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
```

## ColorVariantsBase

```ts
type ColorVariantsBase =
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "info";
```

## ButtonVariants

```ts
type ButtonVariants =
    | ColorVariantsBase
    | "ghost"
    | "primary-outline"
    | "tertiary-outline"
    | "success-outline"
    | "warning-outline"
    | "danger-outline"
    | "info-outline";
```

## ChartType

```ts
type ChartType = "line" | "area" | "bar";
```

## InputColorSize

```ts
type InputColorSize = "sm" | "md" | "lg";
```

## InputPreset

```ts
type InputPreset = "password" | "search" | "email" | "phone" | "url";
```

## SkeletonRadius

```ts
type SkeletonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
```

## SkeletonTone

```ts
type SkeletonTone = "default" | "subtle" | "strong";
```

## SlidedPanelPlacement

```ts
type SlidedPanelPlacement = "top" | "right" | "bottom" | "left";
```
