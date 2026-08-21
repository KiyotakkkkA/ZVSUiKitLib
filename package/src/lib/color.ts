export const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

export const parseHexColor = (color?: string) => {
    if (!color) return null;

    const value = color.trim().replace(/^#/, "");
    const expandedValue =
        value.length === 3 || value.length === 4
            ? value
                  .split("")
                  .map((character) => character.repeat(2))
                  .join("")
            : value;

    if (!/^(?:[0-9a-f]{6}|[0-9a-f]{8})$/i.test(expandedValue)) return null;

    const normalizedValue = expandedValue.toUpperCase();

    if (normalizedValue.length === 8 && normalizedValue.endsWith("FF")) {
        return `#${normalizedValue.slice(0, 6)}`;
    }

    return `#${normalizedValue}`;
};

export const hexToRgb = (color: string) => ({
    red: Number.parseInt(color.slice(1, 3), 16),
    green: Number.parseInt(color.slice(3, 5), 16),
    blue: Number.parseInt(color.slice(5, 7), 16),
});

export const hexToAlpha = (color: string) =>
    color.length === 9 ? Number.parseInt(color.slice(7, 9), 16) / 255 : 1;

export const withAlpha = (color: string, alpha: number) => {
    const opaqueColor = color.slice(0, 7).toUpperCase();
    const clampedAlpha = clamp(alpha, 0, 1);

    if (clampedAlpha >= 1) return opaqueColor;

    const alphaHex = Math.round(clampedAlpha * 255)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

    return `${opaqueColor}${alphaHex}`;
};

export const rgbToHsv = (red: number, green: number, blue: number) => {
    const normalizedRed = red / 255;
    const normalizedGreen = green / 255;
    const normalizedBlue = blue / 255;
    const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
    const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue);
    const delta = max - min;
    let hue = 0;

    if (delta !== 0) {
        if (max === normalizedRed) {
            hue = 60 * (((normalizedGreen - normalizedBlue) / delta) % 6);
        } else if (max === normalizedGreen) {
            hue = 60 * ((normalizedBlue - normalizedRed) / delta + 2);
        } else {
            hue = 60 * ((normalizedRed - normalizedGreen) / delta + 4);
        }
    }

    if (hue < 0) hue += 360;

    return {
        hue,
        saturation: max === 0 ? 0 : (delta / max) * 100,
        brightness: max * 100,
    };
};

export const hsvToHex = (
    hue: number,
    saturation: number,
    brightness: number,
) => {
    const normalizedSaturation = saturation / 100;
    const normalizedBrightness = brightness / 100;
    const chroma = normalizedBrightness * normalizedSaturation;
    const secondary = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
    const match = normalizedBrightness - chroma;
    let red = 0;
    let green = 0;
    let blue = 0;

    if (hue < 60) {
        red = chroma;
        green = secondary;
    } else if (hue < 120) {
        red = secondary;
        green = chroma;
    } else if (hue < 180) {
        green = chroma;
        blue = secondary;
    } else if (hue < 240) {
        green = secondary;
        blue = chroma;
    } else if (hue < 300) {
        red = secondary;
        blue = chroma;
    } else {
        red = chroma;
        blue = secondary;
    }

    return `#${[red, green, blue]
        .map((channel) =>
            Math.round((channel + match) * 255)
                .toString(16)
                .padStart(2, "0"),
        )
        .join("")}`.toUpperCase();
};
