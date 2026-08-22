# InputRange

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputRangeValue](#inputrangevalue)
  - [InputRange](#inputrange)
    - [InputRangeClassNames](#inputrangeclassnames)
- [Example](#example)

## Import

```tsx
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputRangeValue

```ts
type InputRangeValue = [number, number];
```

### InputRange

Extends: `BaseInputRangeProps`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLDivElement>` | - | No | Receives the range root element. |
| `value` | `InputRangeValue` | - | Yes | Controls the lower and upper selected boundaries. |
| `onChange` | `(value: InputRangeValue) => void` | - | Yes | Runs with the updated lower and upper boundaries. |
| `min` | `number` | `0` | No | Sets the minimum selectable boundary. |
| `max` | `number` | `100` | No | Sets the maximum selectable boundary. |
| `step` | `number` | `1` | No | Sets the increment between selectable boundary values. |
| `disabled` | `boolean` | `false` | No | Prevents interaction with both range thumbs. |
| `className` | `DivClassName` | - | No | Applies CSS classes to the range root element. |
| `classNames` | `InputRangeClassNames` | - | No | Applies CSS classes to the range slots. |
| `showThumbLabels` | `boolean` | `true` | No | Displays a visible label for each range thumb. |
| `thumbLabels` | `[string, string]` | - | No | Provides accessible labels for the lower and upper thumbs. |
| `valueFormatter` | `(value: number) => string` | - | No | Formats each boundary value for display. |


### InputRangeClassNames

| Property | Description |
| --- | --- |
| `track` | Applies CSS classes to the full range track. |
| `fill` | Applies CSS classes to the segment between both thumbs. |
| `thumb` | Applies CSS classes to both draggable thumbs. |
| `input` | Applies CSS classes to both native range inputs. |
| `value` | Applies CSS classes to the visible boundary values. |
| `thumbLabel` | Applies CSS classes to the accessible thumb labels. |


Controlled range input for selecting a pair of numeric boundaries.

```tsx
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";

const [value, setValue] = useState<[number, number]>([20, 80]);

<InputRange value={value} onChange={setValue} />;
```

`valueFormatter` formats each visible boundary. The component also supports
`min`, `max`, `step`, `disabled`, `className`, and the `track`, `fill`, `thumb`,
`input`, and `value` slots in `classNames`.
