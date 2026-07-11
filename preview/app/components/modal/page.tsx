import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionAPI,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { ModalPreview } from "./modal-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "Modal" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Modal</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound portal dialog with Header, Content, and Footer.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <ModalPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="ModalExample.tsx"
            >
                {usage}
            </SectionCode>
            <SectionAPI nav={{ id: "api", title: "API reference" }}>
                <SectionAPI.Group title="Modal">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="open"
                            type="boolean"
                            description="Visible state."
                        />
                        <SectionAPI.Prop
                            name="onClose"
                            type="() => void"
                            description="Close callback."
                        />
                        <SectionAPI.Prop
                            name="closeOnOverlayClick"
                            type="boolean"
                            defaultValue="true"
                            description="Overlay behavior."
                        />
                        <SectionAPI.Prop
                            name="overlayClassName"
                            type="string"
                            description="Overlay classes."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                <SectionAPI.Group title="Compound parts">
                    <SectionAPI.Table>
                        <SectionAPI.Prop
                            name="Modal.Header"
                            type="ModalHeaderProps"
                            description="Header and close action."
                        />
                        <SectionAPI.Prop
                            name="Modal.Content / Footer"
                            type="ModalSectionProps"
                            description="Body and footer sections."
                        />
                    </SectionAPI.Table>
                </SectionAPI.Group>
            </SectionAPI>
        </DocumentationPage>
    );
}
