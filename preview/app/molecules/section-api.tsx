import type { ReactNode } from "react";
import { SectionHeader } from "./section-header";
import type { SectionProps, SlotProps } from "./types";
import { cx } from "./utils";

type GroupProps = SlotProps & {
    title: string;
    description?: string;
    badge?: string;
};

type PropProps = {
    name: string;
    type: string;
    defaultValue?: string;
    description: string;
    nameInfo?: ReactNode;
    typeInfo?: ReactNode;
    children?: ReactNode;
};

type ObjectProps = SlotProps & {
    title: string;
    description?: string;
};

function SectionAPIRoot({ className, children, nav }: SectionProps) {
    return (
        <section id={nav.id} className={cx("docs-section", className)}>
            <SectionHeader nav={nav} />
            <div className="api-groups">{children}</div>
        </section>
    );
}

function Group({ className, children, title, description, badge }: GroupProps) {
    return (
        <section className={cx("api-group", className)}>
            <div className="api-group-heading">
                <div>
                    <h3>{title}</h3>
                    {badge && <span>{badge}</span>}
                </div>
                {description && <p>{description}</p>}
            </div>
            {children}
        </section>
    );
}

function Table({ className, children }: SlotProps) {
    return (
        <div className={cx("props-table-wrap", className)}>
            <table className="props-table">
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}

function Prop({
    name,
    type,
    defaultValue,
    description,
    nameInfo,
    typeInfo,
    children,
}: PropProps) {
    return (
        <>
            <tr>
                <td className="api-prop-name">
                    <div className="api-prop-value">
                        <code>{name}</code>
                        {nameInfo}
                    </div>
                </td>
                <td className="api-prop-type">
                    <div className="api-prop-value">
                        <code>{type}</code>
                        {typeInfo}
                    </div>
                </td>
                <td>{defaultValue ?? "—"}</td>
                <td>{description}</td>
            </tr>
            {children && (
                <tr className="api-prop-details">
                    <td colSpan={4}>{children}</td>
                </tr>
            )}
        </>
    );
}

function ObjectDefinition({
    className,
    children,
    title,
    description,
}: ObjectProps) {
    return (
        <div className={cx("api-object", className)}>
            <div className="api-object-heading">
                <strong>{title}</strong>
                {description && <span>{description}</span>}
            </div>
            <Table>{children}</Table>
        </div>
    );
}

export const SectionAPI = Object.assign(SectionAPIRoot, {
    Group,
    Table,
    Prop,
    Object: ObjectDefinition,
});
