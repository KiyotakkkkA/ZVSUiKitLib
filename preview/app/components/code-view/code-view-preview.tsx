"use client";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib";
export function CodeViewPreview() {
    return (
        <CodeView
            language="tsx"
            fileName="Greeting.tsx"
            code={"export function Greeting() {\n  return <h1>Hello</h1>;\n}"}
        />
    );
}
