import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoModal } from "./(preview)/modal-preview";
import usage from "./(usage)/usage.md";
import { modalProps } from "./props";
export const metadata: Metadata = {
    title: "Modal",
    description: "Modal dialog window.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Modal overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Overlays</SectionOverview.MetaTitle>
                <SectionOverview.Title>Modal</SectionOverview.Title>
                <SectionOverview.Description>
                    Present a portal-based dialog with composable header,
                    scrollable content, and footer actions.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "confirmation-dialog",
                    headerTitle: "Confirmation dialog",
                    navTitle: "Dialog",
                }}
            >
                <SectionPreview.Component>
                    <DemoModal />
                </SectionPreview.Component>
                <SectionPreview.Code label="ModalExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", headerTitle: "Modal API", navTitle: "API" }}
            >
                <SectionAPI.Group
                    title={modalProps.root.name}
                    description={modalProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={modalProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {modalProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`${modalProps.root.name}.${part.name}`}
                        description={part.description}
                    >
                        <SectionAPI.Table>
                            <APIProps props={part.props} />
                        </SectionAPI.Table>
                    </SectionAPI.Group>
                ))}
            </SectionAPI>
        </DocumentationPage>
    );
}
