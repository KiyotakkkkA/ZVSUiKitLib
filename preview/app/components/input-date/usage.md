```tsx
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DeliveryDateField() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <InputDate
      value={date}
      onChange={setDate}
      clearable
      closeOnSelect
      minDate={new Date()}
      placeholder="Choose a delivery date"
    />
  );
}
```
