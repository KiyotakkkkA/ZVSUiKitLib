"use client";
import { Button, Floating, Link } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoFloatingProfile() {
    return (
        <div className="max-w-md text-sm leading-6 text-main-300">
            The compound Switcher API was proposed by{" "}
            <Floating anchor="bottom-left" className="inline-block">
                <Floating.Trigger className="inline">
                    <Link href="#">@alisa.kim</Link>
                </Floating.Trigger>
                <Floating.Content className="w-72 p-0" rounded="rounded-xl">
                    <div className="space-y-3 p-4">
                        <div className="flex items-center gap-3">
                            <span className="grid size-11 place-items-center rounded-full bg-violet-500 text-sm font-semibold text-white">
                                AK
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-main-50">
                                    Alisa Kim
                                </p>
                                <p className="text-xs text-main-400">
                                    Design lead · Northwind
                                </p>
                            </div>
                        </div>
                        <p className="text-xs leading-5 text-main-300">
                            Building design systems for data-heavy products.
                            Open source maintainer.
                        </p>
                        <div className="flex gap-4 text-xs text-main-400">
                            <span>
                                <b className="text-main-100">1.2k</b>{" "}
                                followers
                            </span>
                            <span>
                                <b className="text-main-100">48</b> repos
                            </span>
                        </div>
                    </div>
                    <div className="border-t border-main-700 p-3">
                        <Button size="sm" className="w-full">
                            Follow
                        </Button>
                    </div>
                </Floating.Content>
            </Floating>{" "}
            in October. Hover the name to see the profile card, click it to
            keep the card open.
        </div>
    );
}
