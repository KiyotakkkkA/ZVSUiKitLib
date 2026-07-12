import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ThemePreview } from "./theme-preview";
import usage from "./usage.md";

export const metadata: Metadata = { title: "useStyle" };

export default function UseStylePage() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.MetaTitle>
                    Theme hook
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>useStyle</SectionOverview.Title>
                <SectionOverview.Description>
                    Replace the main and semantic color palettes across the
                    entire application at runtime.
                </SectionOverview.Description>
                <SectionOverview.Tags>
                    <span>Provider required</span>
                    <span>Full application theme</span>
                    <span>CSS variables</span>
                </SectionOverview.Tags>
            </SectionOverview>
            <SectionPreview nav={{ id: "palettes", title: "11 palettes" }}>
                <ThemePreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ThemeExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API" }}>
                <SectionAPI.Group
                    title="useStyle"
                    description="Must be used inside StyleProvider."
                >
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="palette"
                            type="StyleThemePalette"
                            description="Current controlled palette."
                        />
                        <SectionAPI.Prop
                            name="changeTheme"
                            type="(palette: StyleThemePalette) => void"
                            description="Applies all main and semantic color tokens to the document root."
                        />
                        <SectionAPI.Prop
                            name="resetTheme"
                            type="() => void"
                            description="Restores the provider initialPalette."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group
                    title="StyleProvider"
                    description="Place once near the application root."
                >
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="initialPalette"
                            type="StyleThemePalette"
                            defaultValue="defaultThemePalette"
                            description="Server and client initial theme."
                        />
                        <SectionAPI.Prop
                            name="cookies"
                            type="boolean | StyleCookieOptions"
                            defaultValue="false"
                            description="Opt-in cookie persistence configuration."
                        />
                        <SectionAPI.Prop
                            name="children"
                            type="ReactNode"
                            description="Application content."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group
                    title="StyleThemePalette"
                    description="Complete required application theme."
                >
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="main"
                            type="MainColorPalette"
                            description="Ten CSS-compatible values from 50 to 900."
                        />
                        <SectionAPI.Prop
                            name="accent"
                            type="SemanticColorPalette"
                            description="Accent light, medium, and dark values."
                        />
                        <SectionAPI.Prop
                            name="danger / warning / success / info"
                            type="SemanticColorPalette"
                            description="Status light, medium, and dark values."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
