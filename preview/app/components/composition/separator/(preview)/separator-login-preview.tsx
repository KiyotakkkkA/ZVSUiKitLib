"use client";
import {
    Button,
    Icon,
    InputSmall,
    Link,
    Separator,
} from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSeparatorLogin() {
    return (
        <div className="w-full max-w-sm space-y-4 rounded-xl border border-main-700/70 bg-main-900/50 p-6">
            <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold text-main-50">
                    Welcome back
                </h3>
                <p className="text-sm text-main-400">
                    Sign in to continue to your workspace
                </p>
            </div>
            <Button variant="secondary" className="w-full">
                <Icon icon="github" />
                Continue with GitHub
            </Button>
            <div className="flex items-center gap-3">
                <Separator className="flex-1" />
                <span className="text-xs uppercase tracking-wide text-main-500">
                    or
                </span>
                <Separator className="flex-1" />
            </div>
            <InputSmall preset="email" placeholder="you@company.com" />
            <InputSmall preset="password" placeholder="Password" />
            <Button className="w-full">Sign in</Button>
            <Separator />
            <p className="text-center text-xs text-main-400">
                No account yet? <Link href="#">Create one</Link>
            </p>
        </div>
    );
}
