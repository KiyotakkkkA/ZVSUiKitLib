import type { Metadata } from "next";
import {
  DocumentationPage,
  SectionAPI,
  SectionCode,
  SectionCommand,
  SectionOverview,
  SectionPreview,
} from "../../molecules";
import passwordCode from "./password.md";
import { InputSmallPreview } from "./input-small-preview";
import usageCode from "./usage.md";

export const metadata: Metadata = {
  title: "InputSmall",
  description: "Compact single-line input with password visibility support.",
};

export default function InputSmallPage() {
  return (
    <DocumentationPage>
      <SectionOverview nav={{ id: "overview", title: "Overview" }}>
        <SectionOverview.MetaTitle>Input &amp; form control</SectionOverview.MetaTitle>
        <SectionOverview.Title>InputSmall</SectionOverview.Title>
        <SectionOverview.Description>
          A compact single-line field with native input behavior and a built-in
          password visibility control.
        </SectionOverview.Description>
        <SectionOverview.Tags>
          <span>Stable</span>
          <span>React 19</span>
          <span>Native attributes</span>
        </SectionOverview.Tags>
      </SectionOverview>

      <SectionPreview nav={{ id: "preview", title: "Preview" }}>
        <InputSmallPreview />
      </SectionPreview>

      <SectionCommand nav={{ id: "installation", title: "Installation" }}>
        npm install @kiyotakkkka/zvs-uikit-lib
      </SectionCommand>

      <SectionCode nav={{ id: "usage", title: "Usage" }} label="EmailField.tsx">
        {usageCode}
      </SectionCode>

      <SectionCode nav={{ id: "password", title: "Password input" }} label="PasswordField.tsx">
        {passwordCode}
      </SectionCode>

      <SectionAPI nav={{ id: "api", title: "API reference" }}>
        <SectionAPI.Group
          title="InputSmall"
          description="Extends InputHTMLAttributes<HTMLInputElement>; every native input attribute is forwarded."
        >
          <SectionAPI.Table>
            <SectionAPI.Prop name="className" type="string" description="Classes applied to the native input." />
            <SectionAPI.Prop name="classNames" type="InputSmallClassNames" description="Classes for internal slots.">
              <SectionAPI.Object title="InputSmallClassNames" description="Slot-level style overrides.">
                <SectionAPI.Prop name="wrapper" type="string" description="Outer wrapper classes." />
                <SectionAPI.Prop name="icon" type="string" description="Password visibility icon classes." />
              </SectionAPI.Object>
            </SectionAPI.Prop>
            <SectionAPI.Prop name="type" type="HTMLInputTypeAttribute" defaultValue="text" description="Password enables the visibility toggle." />
            <SectionAPI.Prop name="value / defaultValue" type="string | number" description="Controlled or initial native value." />
            <SectionAPI.Prop name="onChange" type="ChangeEventHandler<HTMLInputElement>" description="Native change callback." />
            <SectionAPI.Prop name="placeholder" type="string" description="Hint shown while empty." />
            <SectionAPI.Prop name="disabled" type="boolean" defaultValue="false" description="Disables input and interaction." />
            <SectionAPI.Prop name="readOnly" type="boolean" defaultValue="false" description="Prevents value edits without disabling focus." />
            <SectionAPI.Prop name="name / id" type="string" description="Native form and label identifiers." />
            <SectionAPI.Prop name="autoComplete" type="HTMLInputAutoCompleteAttribute" description="Browser autocomplete hint." />
            <SectionAPI.Prop name="...inputProps" type="InputHTMLAttributes<HTMLInputElement>" description="All remaining native input attributes are forwarded." />
          </SectionAPI.Table>
        </SectionAPI.Group>
      </SectionAPI>
    </DocumentationPage>
  );
}
