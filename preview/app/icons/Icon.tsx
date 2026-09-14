import {
    mdiArrowLeft,
    mdiArrowRight,
    mdiArrowTopRight,
    mdiBellOutline,
    mdiCheck,
    mdiClose,
    mdiContentCopy,
    mdiFormTextbox,
    mdiGithub,
    mdiLayersOutline,
    mdiMagnify,
    mdiMenu,
    mdiNpm,
    mdiText,
    mdiWidgetsOutline,
} from "@mdi/js";
import type { SVGProps } from "react";

const icons = {
    search: mdiMagnify,
    menu: mdiMenu,
    close: mdiClose,
    check: mdiCheck,
    copy: mdiContentCopy,
    "arrow-right": mdiArrowRight,
    "arrow-left": mdiArrowLeft,
    "arrow-outward": mdiArrowTopRight,
    layers: mdiLayersOutline,
    widgets: mdiWidgetsOutline,
    bell: mdiBellOutline,
    "text-lines": mdiText,
    "input-field": mdiFormTextbox,
    github: mdiGithub,
    npm: mdiNpm,
} satisfies Record<string, string>;

export type IconName = keyof typeof icons;

export type IconProps = SVGProps<SVGSVGElement> & {
    /** The name of one of the icons bundled with the docs site. */
    icon: IconName;
    /** The rendered icon width. */
    width?: number | string;
    /** The rendered icon height. */
    height?: number | string;
};

export function Icon({
    icon,
    width = "1em",
    height = "1em",
    ...props
}: IconProps) {
    const path = icons[icon];

    return (
        <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill="currentColor"
            stroke="none"
            {...props}
        >
            <path d={path} />
        </svg>
    );
}
