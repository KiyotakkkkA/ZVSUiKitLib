"use client";

import { useState, type ReactNode } from "react";
import { cx } from "./utils";

export function PreviewTabs({
    preview,
    code,
}: {
    preview: ReactNode;
    code?: ReactNode;
}) {
    const [tab, setTab] = useState<"preview" | "code">("preview");

    return (
        <div className="preview-frame">
            {code && (
                <div className="preview-frame-tabs" role="tablist">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === "preview"}
                        className={cx(tab === "preview" && "active")}
                        onClick={() => setTab("preview")}
                    >
                        Preview
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === "code"}
                        className={cx(tab === "code" && "active")}
                        onClick={() => setTab("code")}
                    >
                        Code
                    </button>
                </div>
            )}
            <div hidden={tab !== "preview" && !!code}>{preview}</div>
            {code && <div hidden={tab !== "code"}>{code}</div>}
        </div>
    );
}
