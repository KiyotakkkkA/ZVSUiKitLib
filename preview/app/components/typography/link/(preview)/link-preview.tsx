import { Link, Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function LinkPreview() {
    return (
        <div className="w-full max-w-2xl space-y-5 p-3">
            <Text>
                Read the <Link href="#link-guidance">component guidelines</Link>{" "}
                before publishing.
            </Text>
            <Link id="link-guidance" href="/components">
                Browse all components →
            </Link>
        </div>
    );
}
