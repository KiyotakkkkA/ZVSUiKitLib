"use client";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib";

const code = `function sum(a, b) {\n  return a + b;\n}`;

export function DemoCodeView() {
    return (
        <CodeView
            code={code}
            language="javascript"
            fileName="sum.js"
            maxContentHeight={260}
            onCopy={() => console.log("Code copied!")}
        />
    );
}

