import {
    mdiAccount,
    mdiAlertOutline,
    mdiCheck,
    mdiCheckCircleOutline,
    mdiChevronDown,
    mdiChevronLeft,
    mdiChevronRight,
    mdiClose,
    mdiCloseCircleOutline,
    mdiCloseOctagon,
    mdiContentCopy,
    mdiCreationOutline,
    mdiDownload,
    mdiEmailOutline,
    mdiEyeOffOutline,
    mdiEyeOutline,
    mdiFileImageOutline,
    mdiFileOutline,
    mdiFolderOpenOutline,
    mdiFolderOutline,
    mdiGithub,
    mdiImageCheckOutline,
    mdiImagePlusOutline,
    mdiInformation,
    mdiInformationOutline,
    mdiLinkVariant,
    mdiMagnify,
    mdiOpacity,
    mdiPackageVariantClosed,
    mdiPalette,
    mdiPaletteOutline,
    mdiPencilOutline,
    mdiPhone,
    mdiScript,
    mdiShieldAccount,
    mdiStarFourPoints,
    mdiStarOutline,
    mdiTrashCanOutline,
    mdiTuneVariant,
} from "@mdi/js";
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

const icons = {
    account: mdiAccount,
    "alert-outline": mdiAlertOutline,
    check: mdiCheck,
    "check-circle-outline": mdiCheckCircleOutline,
    "chevron-down": mdiChevronDown,
    "chevron-left": mdiChevronLeft,
    "chevron-right": mdiChevronRight,
    close: mdiClose,
    "close-circle-outline": mdiCloseCircleOutline,
    "close-octagon": mdiCloseOctagon,
    "content-copy": mdiContentCopy,
    download: mdiDownload,
    "email-outline": mdiEmailOutline,
    "eye-outline": mdiEyeOutline,
    "eye-off-outline": mdiEyeOffOutline,
    "file-image-outline": mdiFileImageOutline,
    "file-outline": mdiFileOutline,
    "folder-outline": mdiFolderOutline,
    "folder-open-outline": mdiFolderOpenOutline,
    github: mdiGithub,
    "image-check-outline": mdiImageCheckOutline,
    "image-plus-outline": mdiImagePlusOutline,
    information: mdiInformation,
    "information-outline": mdiInformationOutline,
    "link-variant": mdiLinkVariant,
    magnify: mdiMagnify,
    opacity: mdiOpacity,
    "package-variant-closed": mdiPackageVariantClosed,
    palette: mdiPalette,
    "palette-outline": mdiPaletteOutline,
    "pencil-outline": mdiPencilOutline,
    phone: mdiPhone,
    script: mdiScript,
    "shield-account": mdiShieldAccount,
    "sparkles-outline": mdiCreationOutline,
    "star-four-points": mdiStarFourPoints,
    "star-outline": mdiStarOutline,
    "trash-can-outline": mdiTrashCanOutline,
    "tune-variant": mdiTuneVariant,
} satisfies Record<string, string>;

const fallbackIcon = icons["information-outline"];

export function Icon({
    icon,
    width = "1em",
    height = "1em",
    ...props
}: IconProps) {
    const path = icons[icon] ?? fallbackIcon;

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
