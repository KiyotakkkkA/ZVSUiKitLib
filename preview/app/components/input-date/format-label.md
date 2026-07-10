```tsx
<InputDate
  value={date}
  onChange={setDate}
  locale="en-US"
  formatLabel={(value) =>
    value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }
/>
```
