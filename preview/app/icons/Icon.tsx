import type { SVGProps } from "react";

type IconDefinition = {
    paths: string[];
    fill?: boolean;
};

const icons = {
    search: {
        paths: ["M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 5 5"],
    },
    menu: { paths: ["M4 6h16M4 12h16M4 18h16"] },
    close: { paths: ["M6 6l12 12M18 6 6 18"] },
    check: { paths: ["m5 12 4 4L19 6"] },
    copy: { paths: ["M8 8h11v12H8z", "M5 16H4V4h11v1"] },
    "arrow-right": { paths: ["M4 12h16m-6-6 6 6-6 6"] },
    "arrow-left": { paths: ["M20 12H4m6-6-6 6 6 6"] },
    "arrow-outward": { paths: ["M7 17 17 7", "M10 7h7v7"] },
    layers: { paths: ["m12 4 8 5-8 5-8-5 8-5Z", "m4 14 8 5 8-5"] },
    widgets: {
        paths: ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 13h7v7h-7z"],
    },
    bell: {
        paths: ["M6 10a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z", "M10 20a2 2 0 0 0 4 0"],
    },
    "text-lines": { paths: ["M4 6h16M4 12h10M4 18h13"] },
    "input-field": { paths: ["M4 7h16v4H4z", "M4 15h10v4H4z"] },
    github: {
        paths: [
            "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.8 2.2 1.5.1-.7.4-1.2.7-1.5-2.3-.3-4.7-1.2-4.7-5A4 4 0 0 1 7 8.1c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.6 9.6 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7a4 4 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
        ],
        fill: true,
    },
    npm: {
        paths: [
            "m4 7 8-4 8 4-8 4-8-4Z",
            "M4 7v10l8 4 8-4V7",
            "M12 11v10",
        ],
    },
} satisfies Record<string, IconDefinition>;

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
    const definition: IconDefinition = icons[icon];

    return (
        <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={definition.fill ? "currentColor" : "none"}
            stroke={definition.fill ? "none" : "currentColor"}
            strokeWidth={definition.fill ? undefined : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {definition.paths.map((path) => (
                <path key={path} d={path} />
            ))}
        </svg>
    );
}
