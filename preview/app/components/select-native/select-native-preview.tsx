import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function SelectNativePreview() {
    return (
        <div className="w-full p-6">
            <SelectNative
                defaultValue="blue"
                options={[
                    { value: "blue", label: "Blue" },
                    { value: "green", label: "Green" },
                ]}
            />
        </div>
    );
}
