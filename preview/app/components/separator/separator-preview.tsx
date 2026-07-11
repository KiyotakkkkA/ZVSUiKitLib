import { Separator } from "@kiyotakkkka/zvs-uikit-lib";
export function SeparatorPreview() {
    return (
        <div className="w-full p-6">
            <div className="w-96">
                <p>Above</p>
                <Separator className="my-4" />
                <p>Below</p>
            </div>
        </div>
    );
}
