```tsx
"use client";
import {
    Badge,
    Button,
    Icon,
    InputCheckBox,
    InputCheckSlided,
    InputSmall,
    SlidedPanel,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const brands = ["Aurora", "Nimbus", "Orbit", "Kitsune"];

export function DemoSlidedPanelFilters() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>(["Aurora"]);
    const [inStock, setInStock] = useState(true);
    const [maxPrice, setMaxPrice] = useState("300");

    const toggleBrand = (brand: string, checked: boolean) =>
        setSelected((current) =>
            checked
                ? [...current, brand]
                : current.filter((item) => item !== brand),
        );

    const reset = () => {
        setSelected([]);
        setInStock(false);
        setMaxPrice("");
    };

    const activeCount = selected.length + (inStock ? 1 : 0) + (maxPrice ? 1 : 0);

    return (
        <>
            <Button variant="secondary" onClick={() => setOpen(true)}>
                <Icon icon="tune-variant" />
                Filters
                {activeCount > 0 && <Badge size="sm">{activeCount}</Badge>}
            </Button>
            <SlidedPanel
                open={open}
                onClose={() => setOpen(false)}
                panelPlacement="right"
            >
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Filters</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>
                        {activeCount} active
                    </SlidedPanel.Subtitle>
                </SlidedPanel.Header>
                <SlidedPanel.Content className="space-y-6">
                    <section className="flex flex-col gap-2.5">
                        <h4 className="text-xs font-medium uppercase tracking-wide text-main-500">
                            Brand
                        </h4>
                        {brands.map((brand) => (
                            <InputCheckBox
                                key={brand}
                                checked={selected.includes(brand)}
                                onChange={(checked) =>
                                    toggleBrand(brand, checked)
                                }
                            >
                                <span className="text-sm text-main-200">
                                    {brand}
                                </span>
                            </InputCheckBox>
                        ))}
                    </section>
                    <section className="space-y-2">
                        <h4 className="text-xs font-medium uppercase tracking-wide text-main-500">
                            Max price, $
                        </h4>
                        <InputSmall
                            inputMode="numeric"
                            value={maxPrice}
                            onChange={(event) =>
                                setMaxPrice(
                                    event.target.value.replace(/\D/g, ""),
                                )
                            }
                            placeholder="Any"
                        />
                    </section>
                    <InputCheckSlided checked={inStock} onChange={setInStock}>
                        <span className="text-sm text-main-200">
                            In stock only
                        </span>
                    </InputCheckSlided>
                </SlidedPanel.Content>
                <SlidedPanel.Footer className="flex justify-between gap-2">
                    <Button variant="ghost" onClick={reset}>
                        Reset
                    </Button>
                    <Button onClick={() => setOpen(false)}>Show results</Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </>
    );
}
```
