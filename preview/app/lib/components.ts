export type ComponentDoc = {
  slug: string;
  name: string;
  summary: string;
  status?: "new";
};

export const inputComponents: ComponentDoc[] = [
  {
    slug: "input-small",
    name: "InputSmall",
    summary: "Compact single-line input with password visibility support.",
  },
  {
    slug: "input-date",
    name: "InputDate",
    summary: "Date input paired with a calendar popup.",
  },
];
