```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/code-view";
import { useState } from "react";

const commands: Record<string, string> = {
    npm: "npm install @kiyotakkkka/zvs-uikit-lib",
    pnpm: "pnpm add @kiyotakkkka/zvs-uikit-lib",
    yarn: "yarn add @kiyotakkkka/zvs-uikit-lib",
    bun: "bun add @kiyotakkkka/zvs-uikit-lib",
};

export function DemoCodeViewInstall() {
    const [manager, setManager] = useState("npm");

    return (
        <div className="w-full max-w-xl space-y-3">
            <Switcher.Root
                model={manager}
                onModelChange={setManager}
                label="Package manager"
            >
                {Object.keys(commands).map((key) => (
                    <Switcher.Option key={key} value={key}>
                        {key}
                    </Switcher.Option>
                ))}
            </Switcher.Root>
            <CodeView
                code={commands[manager]}
                language="bash"
                downloadable={false}
            >
                <CodeView.Header showLanguage={false}>
                    <span className="text-xs text-main-400">Terminal</span>
                </CodeView.Header>
                <CodeView.Content />
            </CodeView>
        </div>
    );
}
```
