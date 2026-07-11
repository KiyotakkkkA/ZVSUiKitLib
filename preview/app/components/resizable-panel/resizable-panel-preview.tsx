import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function ResizablePanelPreview() {
    return (
        <div className="w-full p-6">
            <ResizablePanel defaultSize={220} className="h-64 w-full border">
                <ResizablePanel.Sidebar className="p-4">
                    Sidebar
                </ResizablePanel.Sidebar>
                <ResizablePanel.Handle />
                <ResizablePanel.Content className="p-4">
                    Content
                </ResizablePanel.Content>
            </ResizablePanel>
        </div>
    );
}
