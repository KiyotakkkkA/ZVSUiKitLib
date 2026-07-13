"use client";
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputRadio() {
    const [value, setValue] = useState("email");

    return (
        <div>
            <InputRadio
                name="contact"
                checked={value === "email"}
                onChange={() => setValue("email")}
            />
            <InputRadio
                name="contact"
                checked={value === "phone"}
                onChange={() => setValue("phone")}
            />
        </div>
    );
}

