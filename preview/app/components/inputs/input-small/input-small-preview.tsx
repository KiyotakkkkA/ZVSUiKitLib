"use client";

import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputSmall() {
    const [search, setSearch] = useState("");

    return (
        <div className="grid w-full max-w-sm gap-3">
            <InputSmall placeholder="Name" />
            <InputSmall preset="email" placeholder="Email" />
            <InputSmall preset="password" placeholder="Password" />
            <InputSmall
                preset="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
            />
            <InputSmall preset="phone" placeholder="Phone" />
            <InputSmall preset="url" placeholder="Website" />
        </div>
    );
}
