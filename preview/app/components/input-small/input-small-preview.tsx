"use client";

import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function InputSmallPreview() {
  const [email, setEmail] = useState("");

  return (
    <div className="preview-field">
      <label htmlFor="input-small-preview">Work email</label>
      <InputSmall
        id="input-small-preview"
        className="docs-input"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
      />
      <p>{email ? `Current value: ${email}` : "Enter an email to test the controlled state."}</p>
    </div>
  );
}
