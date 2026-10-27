export const pad = (value: number) => String(value).padStart(2, "0");

export function formatTime(hours: number, minutes: number) {
    return `${pad(hours)}:${pad(minutes)}`;
}

export function parseTime(value: string | null | undefined) {
    const match = value ? /^(\d{1,2}):(\d{2})$/.exec(value) : null;

    if (!match) return null;

    const hours = Number(match[1]);
    const minutes = Number(match[2]);

    if (hours > 23 || minutes > 59) return null;

    return { hours, minutes };
}
