import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib";
export function ProgressBarPreview() {
    return (
        <div className="w-full p-6">
            <ProgressBar label="Upload" value={64} showValue />
        </div>
    );
}
