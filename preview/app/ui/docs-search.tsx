"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { componentDocSections } from "../lib/components";
import { Icon } from "@iconify/react";
import { Kbd, Modal, ScrollArea, InputSmall } from "@kiyotakkkka/zvs-uikit-lib";

const searchItems = componentDocSections.flatMap((section) =>
    section.components.map((component) => ({
        ...component,
        section: section.title,
        href: `/components/${section.prefix}/${component.slug}`,
        searchText:
            `${component.name} ${component.slug} ${component.summary} ${section.title}`.toLocaleLowerCase(),
    })),
);

export function DocsSearch() {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const resultRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const results = useMemo(() => {
        const terms = query
            .trim()
            .toLocaleLowerCase()
            .split(/\s+/)
            .filter(Boolean);
        if (!terms.length) return searchItems;
        return searchItems.filter((item) =>
            terms.every((term) => item.searchText.includes(term)),
        );
    }, [query]);

    function closeSearch() {
        setOpen(false);
        setQuery("");
        setActiveIndex(0);
    }

    function openSearch() {
        setOpen(true);
        requestAnimationFrame(() => inputRef.current?.focus());
    }

    function navigate(href: string) {
        closeSearch();
        router.push(href);
    }

    function selectResult(index: number) {
        setActiveIndex(index);
        requestAnimationFrame(() => {
            resultRefs.current[index]?.scrollIntoView({ block: "nearest" });
        });
    }

    useEffect(() => {
        function handleShortcut(event: KeyboardEvent) {
            if (
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault();
                openSearch();
            }
        }
        window.addEventListener("keydown", handleShortcut);
        return () => window.removeEventListener("keydown", handleShortcut);
    }, []);

    return (
        <>
            <button
                type="button"
                className="search-trigger cursor-pointer hover:border-(--line-bright) hover:text-(--muted) aria-expanded:border-(--line-bright) aria-expanded:text-(--muted)"
                onClick={openSearch}
                aria-haspopup="dialog"
                aria-expanded={open}
            >
                <Icon icon="material-symbols:search" />
                <span>Search docs</span>
                <Kbd>⌘ K</Kbd>
            </button>
            <Modal
                open={open}
                onClose={closeSearch}
                className="w-[min(620px,100%)] max-w-155! overflow-hidden rounded-xl border-(--line-bright) bg-main-900 shadow-[0_28px_90px_rgba(0,0,0,0.65)]"
                overlayClassName="items-start! pt-[min(18vh,150px)]!"
            >
                <div
                    aria-label="Search documentation"
                    onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                            event.preventDefault();
                            selectResult(
                                Math.min(
                                    activeIndex + 1,
                                    Math.max(results.length - 1, 0),
                                ),
                            );
                        }
                        if (event.key === "ArrowUp") {
                            event.preventDefault();
                            selectResult(Math.max(activeIndex - 1, 0));
                        }
                        if (event.key === "Enter" && results[activeIndex]) {
                            event.preventDefault();
                            navigate(results[activeIndex].href);
                        }
                    }}
                >
                    <Modal.Header>
                        <InputSmall
                            ref={inputRef}
                            rounded="rounded-xl"
                            className="flex-1 bg-main-800"
                            value={query}
                            onChange={(event) => {
                                setQuery(event.target.value);
                                setActiveIndex(0);
                            }}
                            preset="search"
                            placeholder="Search components"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                        />
                    </Modal.Header>
                    <ScrollArea
                        id="docs-search-results"
                        className="max-h-[min(52vh,430px)] p-1.75"
                        role="listbox"
                        showScrollbar={false}
                    >
                        {results.length ? (
                            results.map((item, index) => (
                                <button
                                    key={item.href}
                                    ref={(element) => {
                                        resultRefs.current[index] = element;
                                    }}
                                    id={`docs-search-result-${index}`}
                                    type="button"
                                    role="option"
                                    aria-selected={index === activeIndex}
                                    className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-[7px] border-0 bg-transparent px-3 py-2.75 text-left text-(--ink) aria-selected:bg-(--acid-soft)"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => navigate(item.href)}
                                >
                                    <span className="block">
                                        <strong className="text-sm font-semibold">
                                            {item.name}
                                        </strong>
                                        <small className="mt-0.75 block text-xs text-(--dim)">
                                            {item.summary}
                                        </small>
                                    </span>
                                    <em className="font-mono flex-none text-[10px] not-italic uppercase text-(--muted)">
                                        {item.section}
                                    </em>
                                </button>
                            ))
                        ) : (
                            <p className="m-0 px-5 py-11 text-center text-sm text-(--dim)">
                                No components found for “{query}”.
                            </p>
                        )}
                    </ScrollArea>
                    <Modal.Footer className="justify-between">
                        <span className="text-sm space-x-1 text-main-400">
                            <Kbd>↑</Kbd>
                            <Kbd>↓</Kbd> Navigate
                        </span>
                        <span className="text-sm text-main-400">
                            <Kbd>↵</Kbd> Open
                        </span>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
