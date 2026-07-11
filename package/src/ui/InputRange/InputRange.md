# InputRange

Controlled range input for selecting a pair of numeric boundaries.

```tsx
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";

const [value, setValue] = useState<[number, number]>([20, 80]);

<InputRange value={value} onChange={setValue} />;
```

`valueFormatter` formats each visible boundary. The component also supports
`min`, `max`, `step`, `disabled`, `className`, and the `track`, `fill`, `thumb`,
`input`, and `value` slots in `classNames`.
