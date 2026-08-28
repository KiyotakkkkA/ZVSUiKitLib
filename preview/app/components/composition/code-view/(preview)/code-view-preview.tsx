"use client";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/code-view";

const code = `function sum(a, b) {\n  return a + b;\n}`;

export function DemoCodeView() {
    return (
        <CodeView
            code={code}
            language="javascript"
            fileName="sum.js"
            maxContentHeight={260}
            downloadable
            onCopy={() => console.log("Code copied!")}
        />
    );
}
