import type { ComponentAPIDoc } from "../../../../_shared/types";

export const componentProps: ComponentAPIDoc = {
    root: {
        name: "Carousel",
        description:
            "Owns active slide, navigation, looping, and optional auto-scroll.",
        props: {
            children: {
                type: "ReactNode",
                description: "Slides.",
            },
            className: {
                type: "string",
                description: "Additional classes.",
            },
            classNames: {
                type: "CarouselClassNames",
                description: "Navigation slot classes.",
                slots: {
                    nav: {
                        type: "string",
                        description: "Dot navigation wrapper classes.",
                    },
                    links: {
                        type: "string",
                        description: "Arrow control inner classes.",
                    },
                },
            },
            loop: {
                type: "boolean",
                description: "Wraps between the first and last slide.",
                defaultValue: "false",
            },
            autoScroll: {
                type: "boolean",
                description: "Advances slides automatically.",
                defaultValue: "false",
            },
            autoScrollTimeout: {
                type: "number",
                description: "Delay between automatic advances.",
                defaultValue: "5000",
            },
        },
    },
    compound: [
        {
            name: "Image",
            description: "Individual slide wrapper.",
            props: {
                className: {
                    type: "string",
                    description: "Additional classes.",
                },
                children: {
                    type: "ReactNode",
                    description: "Rendered content.",
                },
            },
        },
    ],
};
