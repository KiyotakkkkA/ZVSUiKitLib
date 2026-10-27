```tsx
"use client";
import {
    Badge,
    Button,
    EmptyState,
    Icon,
    SlidedPanel,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type CartItem = { id: number; name: string; price: number; qty: number };

const initialCart: CartItem[] = [
    { id: 1, name: "Aurora headphones", price: 249, qty: 1 },
    { id: 2, name: "Orbit speaker", price: 129, qty: 2 },
];

export function DemoSlidedPanelCart() {
    const [open, setOpen] = useState(false);
    const [cart, setCart] = useState(initialCart);

    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const changeQty = (id: number, delta: number) =>
        setCart((current) =>
            current
                .map((item) =>
                    item.id === id ? { ...item, qty: item.qty + delta } : item,
                )
                .filter((item) => item.qty > 0),
        );

    return (
        <>
            <Button variant="secondary" onClick={() => setOpen(true)}>
                <Icon icon="package-variant-closed" />
                Cart
                <Badge size="sm">{count}</Badge>
            </Button>
            <SlidedPanel
                open={open}
                onClose={() => setOpen(false)}
                panelPlacement="right"
            >
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Your cart</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>{count} items</SlidedPanel.Subtitle>
                </SlidedPanel.Header>
                <SlidedPanel.Content className="space-y-3">
                    {cart.length === 0 ? (
                        <EmptyState
                            icon={<Icon icon="package-variant-closed" />}
                            title="Your cart is empty"
                            description="Add something you like to see it here."
                        />
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 rounded-xl border border-main-700/70 p-3"
                            >
                                <div className="size-12 shrink-0 rounded-lg bg-linear-to-br from-violet-500/60 to-sky-500/40" />
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm text-main-100">
                                        {item.name}
                                    </p>
                                    <p className="text-xs tabular-nums text-main-400">
                                        ${item.price}
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        label="Decrease quantity"
                                        onClick={() => changeQty(item.id, -1)}
                                    >
                                        −
                                    </Button>
                                    <span className="w-6 text-center text-sm tabular-nums">
                                        {item.qty}
                                    </span>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        label="Increase quantity"
                                        onClick={() => changeQty(item.id, 1)}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </SlidedPanel.Content>
                <SlidedPanel.Footer className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-main-400">Subtotal</span>
                        <span className="font-semibold tabular-nums text-main-50">
                            ${total}
                        </span>
                    </div>
                    <Button className="w-full" disabled={cart.length === 0}>
                        Checkout
                    </Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </>
    );
}
```
