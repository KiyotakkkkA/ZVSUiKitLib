import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";
export function ScrollAreaPreview() {
    return (
        <div className="w-full p-6">
            <ScrollArea className="h-48 w-full border p-4">
                {Array.from({ length: 12 }, (_, i) => (
                    <p key={i}>Scrollable row {i + 1}</p>
                ))}
            </ScrollArea>
        </div>
    );
}
