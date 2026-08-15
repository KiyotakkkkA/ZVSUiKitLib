```tsx
"use client";

import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";

const navigation = [
    ["⌂", "Overview"],
    ["◇", "Projects"],
    ["✓", "Tasks"],
    ["◎", "Team"],
] as const;

export function DemoResizablePanel() {
    return (
        <ResizablePanel
            className="h-[28rem] w-full max-w-3xl shadow-2xl shadow-black/30"
            defaultSize={224}
            minSize={176}
            maxSize={320}
        >
            <ResizablePanel.Sidebar className="flex flex-col bg-main-900/90">
                <div className="flex items-center gap-3 border-b border-main-700/70" style={{ padding: 16 }}>
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-main-100 font-bold text-main-900">N</span>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-main-100">Northstar</p>
                        <p className="truncate text-xs text-main-500">Product workspace</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-1" style={{ padding: 12 }} aria-label="Workspace navigation">
                    {navigation.map(([icon, label], index) => (
                        <button
                            key={label}
                            type="button"
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${index === 0 ? "bg-main-700/70 text-main-100" : "text-main-400 hover:bg-main-800 hover:text-main-200"}`}
                        >
                            <span className="w-4 text-center text-main-300" aria-hidden="true">{icon}</span>
                            <span className="truncate">{label}</span>
                            {label === "Tasks" && <span className="ml-auto rounded-full bg-main-700 px-2 py-0.5 text-[10px] text-main-300">8</span>}
                        </button>
                    ))}
                </nav>

                <div className="border-t border-main-700/70" style={{ padding: 12 }}>
                    <div className="flex items-center gap-3 rounded-xl bg-main-800/60" style={{ padding: 10 }}>
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#7D5CF6] text-xs font-semibold text-white">AK</span>
                        <div className="min-w-0">
                            <p className="truncate text-xs font-medium text-main-100">Alex Kim</p>
                            <p className="truncate text-[11px] text-main-500">Product designer</p>
                        </div>
                        <span className="ml-auto size-2 shrink-0 rounded-full bg-emerald-400" aria-label="Online" />
                    </div>
                </div>
            </ResizablePanel.Sidebar>

            <ResizablePanel.Handle aria-label="Resize workspace navigation" />

            <ResizablePanel.Content className="bg-black/10">
                <header className="flex items-center justify-between border-b border-main-700/70" style={{ padding: "16px 20px" }}>
                    <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-widest text-main-500">Dashboard</p>
                        <h3 className="truncate text-lg font-semibold text-main-100">Good morning, Alex</h3>
                    </div>
                    <button type="button" className="shrink-0 rounded-lg bg-main-100 px-3 py-2 text-xs font-semibold text-main-900">New project</button>
                </header>

                <div className="space-y-5" style={{ padding: 20 }}>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            ["12", "Active projects", "+2 this week"],
                            ["84%", "Tasks complete", "+6% this month"],
                            ["7", "Team members", "All available"],
                        ].map(([value, label, detail]) => (
                            <article key={label} className="min-w-0 rounded-xl border border-main-700/70 bg-main-900/60" style={{ padding: 12 }}>
                                <strong className="block text-xl text-main-100">{value}</strong>
                                <span className="block truncate text-xs text-main-400">{label}</span>
                                <span className="mt-2 block truncate text-[10px] text-emerald-400">{detail}</span>
                            </article>
                        ))}
                    </div>

                    <section>
                        <div className="mb-3 flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-main-100">Recent projects</h4>
                            <button type="button" className="text-xs text-main-400 hover:text-main-200">View all</button>
                        </div>
                        <div className="space-y-2">
                            {[
                                ["Mobile banking", "Design review", "72%", "bg-[#7D5CF6]"],
                                ["Analytics suite", "Development", "48%", "bg-cyan-500"],
                                ["Brand refresh", "Research", "91%", "bg-amber-400"],
                            ].map(([name, stage, progress, color]) => (
                                <div key={name} className="flex items-center gap-3 rounded-xl border border-main-700/60 bg-main-900/40" style={{ padding: "10px 12px" }}>
                                    <span className={`size-2.5 shrink-0 rounded-full ${color}`} />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-xs font-medium text-main-200">{name}</p>
                                        <p className="truncate text-[11px] text-main-500">{stage}</p>
                                    </div>
                                    <span className="text-xs font-medium text-main-300">{progress}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </ResizablePanel.Content>
        </ResizablePanel>
    );
}
```
