import { Tooltip, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function TooltipPreview() {
    return (
        <div className="w-full p-6">
            <Tooltip label="Helpful hint">
                <Button>Hover or focus</Button>
            </Tooltip>
        </div>
    );
}
