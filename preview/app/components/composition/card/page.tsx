import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoCard } from "./(preview)/card-preview";
import usage from "./(usage)/usage.md";
import { DemoCardPricing } from "./(preview)/card-pricing-preview";
import cardPricingPreviewUsage from "./(usage)/card-pricing-preview.md";
import { DemoCardStats } from "./(preview)/card-stats-preview";
import cardStatsPreviewUsage from "./(usage)/card-stats-preview.md";
import { DemoCardForm } from "./(preview)/card-form-preview";
import cardFormPreviewUsage from "./(usage)/card-form-preview.md";
import { componentProps } from "./props";

export const metadata: Metadata = {
    title: "Card",
    description: "Composable content container.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "Card overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>
                    Composition
                </SectionOverview.MetaTitle>
                <SectionOverview.Title>Card</SectionOverview.Title>
                <SectionOverview.Description>
                    Composable content container.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "basic-example",
                    headerTitle: "Card example",
                    navTitle: "Example",
                }}
            >
                <SectionPreview.Component>
                    <DemoCard />
                </SectionPreview.Component>
                <SectionPreview.Code label="CardExample.tsx">
                    {usage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "pricing",
                    headerTitle: "Pricing plans",
                    navTitle: "Pricing",
                }}
            >
                <SectionPreview.Component>
                    <DemoCardPricing />
                </SectionPreview.Component>
                <SectionPreview.Code label="CardPricing.tsx">
                    {cardPricingPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "stats",
                    headerTitle: "Stats cards",
                    navTitle: "Stats",
                }}
            >
                <SectionPreview.Component>
                    <DemoCardStats />
                </SectionPreview.Component>
                <SectionPreview.Code label="CardStats.tsx">
                    {cardStatsPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "form",
                    headerTitle: "Settings form card",
                    navTitle: "Form",
                }}
            >
                <SectionPreview.Component>
                    <DemoCardForm />
                </SectionPreview.Component>
                <SectionPreview.Code label="CardForm.tsx">
                    {cardFormPreviewUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{ id: "api", headerTitle: "Card API", navTitle: "API" }}
            >
                <SectionAPI.Group
                    title={componentProps.root.name}
                    description={componentProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={componentProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {componentProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`Card.${part.name}`}
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
