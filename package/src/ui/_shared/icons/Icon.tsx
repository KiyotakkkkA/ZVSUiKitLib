import type { SVGProps } from "react";

export type IconName = keyof typeof icons;

export type IconProps = SVGProps<SVGSVGElement> & {
    /** The name of one of the icons bundled with the library. */
    icon: IconName;
    /** The rendered icon width. */
    width?: number | string;
    /** The rendered icon height. */
    height?: number | string;
};

type IconDefinition = {
    paths: string[];
    fill?: boolean;
};

const icons = {
    account: {
        paths: ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0"],
    },
    "alert-outline": {
        paths: ["M12 3 2.8 20h18.4L12 3Z", "M12 9v4", "M12 17h.01"],
    },
    check: { paths: ["m5 12 4 4L19 6"] },
    "check-circle-outline": {
        paths: ["M21 11.1V12a9 9 0 1 1-5.3-8.2", "m8 12 3 3 9-9"],
    },
    "chevron-down": { paths: ["m6 9 6 6 6-6"] },
    "chevron-left": { paths: ["m15 18-6-6 6-6"] },
    "chevron-right": { paths: ["m9 18 6-6-6-6"] },
    close: { paths: ["M6 6l12 12M18 6 6 18"] },
    "close-circle-outline": {
        paths: ["M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "m9 9 6 6m0-6-6 6"],
    },
    "close-octagon": {
        paths: ["m8 2-6 6v8l6 6h8l6-6V8l-6-6H8Z", "m9 9 6 6m0-6-6 6"],
    },
    "content-copy": { paths: ["M8 8h11v12H8z", "M5 16H4V4h11v1"] },
    download: { paths: ["M12 3v12m-5-5 5 5 5-5", "M5 20h14"] },
    "email-outline": {
        paths: [
            "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z",
        ],
        fill: true,
    },
    "eye-outline": {
        paths: [
            "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z",
            "M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
        ],
    },
    "eye-off-outline": {
        paths: [
            "m3 3 18 18",
            "M10.6 6.2A11 11 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-2.1 2.8M6.2 6.2C3.5 8 2 12 2 12s3.5 6 10 6a11 11 0 0 0 3.8-.7",
        ],
    },
    "file-image-outline": {
        paths: ["M6 2h8l4 4v16H6z", "M14 2v5h4", "m8 18 3-4 2 2 2-3 3 5"],
    },
    "file-outline": { paths: ["M6 2h8l4 4v16H6z", "M14 2v5h4"] },
    "folder-outline": { paths: ["M3 6h7l2 2h9v11H3z"] },
    "folder-open-outline": { paths: ["M3 7h7l2 2h9l-2 10H3z", "M3 7v12"] },
    github: {
        paths: [
            "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.8 2.2 1.5.1-.7.4-1.2.7-1.5-2.3-.3-4.7-1.2-4.7-5A4 4 0 0 1 7 8.1c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.6 9.6 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7a4 4 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
        ],
        fill: true,
    },
    "image-check-outline": {
        paths: ["M4 4h16v16H4z", "m6 16 3-4 3 3 2-2", "m14 8 1.5 1.5L19 6"],
    },
    "image-plus-outline": {
        paths: ["M4 4h10v10H4z", "m6 14 3-4 3 3", "M18 11v8m-4-4h8"],
    },
    information: {
        paths: [
            "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
        ],
        fill: true,
    },
    "information-outline": {
        paths: [
            "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
            "M12 11v6",
            "M12 7h.01",
        ],
    },
    "link-variant": {
        paths: [
            "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",
        ],
        fill: true,
    },
    magnify: { paths: ["M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 5 5"] },
    opacity: { paths: ["M12 3s6 6.3 6 11a6 6 0 1 1-12 0c0-4.7 6-11 6-11Z"] },
    "package-variant-closed": {
        paths: ["m4 7 8-4 8 4-8 4-8-4Z", "M4 7v10l8 4 8-4V7", "M12 11v10"],
    },
    palette: {
        paths: [
            "M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0 0-12h-3Z",
            "M7.5 10h.01M9 6.5h.01M14 6.5h.01M17 10h.01",
        ],
    },
    "palette-outline": {
        paths: [
            "M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0-12h-3Z",
            "M7.5 10h.01M9 6.5h.01M14 6.5h.01M17 10h.01",
        ],
    },
    phone: {
        paths: [
            "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
        ],
        fill: true,
    },
    script: { paths: ["M6 3h12v18H6z", "M9 8h6M9 12h6M9 16h4"] },
    "shield-account": {
        paths: [
            "M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z",
            "M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3 8a3 3 0 0 1 6 0",
        ],
    },
    "sparkles-outline": {
        paths: [
            "m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z",
            "m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z",
        ],
    },
    "star-four-points": {
        paths: [
            "m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z",
        ],
    },
    "star-outline": {
        paths: [
            "m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z",
        ],
    },
    "tune-variant": {
        paths: ["M4 7h10m4 0h2M4 17h2m4 0h10", "M14 4v6M7 14v6"],
    },
} satisfies Record<string, IconDefinition>;

const fallbackIcon: IconDefinition = icons["information-outline"];

export function Icon({
    icon,
    width = "1em",
    height = "1em",
    ...props
}: IconProps) {
    const definition: IconDefinition = icons[icon] ?? fallbackIcon;

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
