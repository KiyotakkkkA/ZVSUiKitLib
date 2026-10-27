"use client";
import { Button, InputSmall, ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";
import { useEffect, useRef, useState } from "react";

type Message = { id: number; author: "me" | "them"; text: string };

const initial: Message[] = [
    { id: 1, author: "them", text: "Hi! Did the 8.6 build pass?" },
    { id: 2, author: "me", text: "Yes, type checks and tests are green." },
    { id: 3, author: "them", text: "Great. Can you share the preview link?" },
    { id: 4, author: "me", text: "Sure, deploying it now." },
    { id: 5, author: "them", text: "Also check the new Switcher examples." },
    { id: 6, author: "me", text: "Already did, the pricing toggle looks nice." },
    { id: 7, author: "them", text: "Perfect, let's ship it on Friday." },
];

export function DemoScrollAreaChat() {
    const [messages, setMessages] = useState(initial);
    const [draft, setDraft] = useState("");
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const list = listRef.current;
        if (list) list.scrollTop = list.scrollHeight;
    }, [messages]);

    const send = () => {
        if (!draft.trim()) return;
        setMessages((current) => [
            ...current,
            { id: current.length + 1, author: "me", text: draft.trim() },
        ]);
        setDraft("");
    };

    return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-main-700/70 bg-main-900/50">
            <div className="border-b border-main-700/70 px-4 py-3 text-sm font-semibold text-main-50">
                #release-8-6
            </div>
            <ScrollArea ref={listRef} className="flex h-64 flex-col gap-2 p-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={
                            message.author === "me"
                                ? "max-w-[80%] self-end rounded-xl rounded-br-sm bg-main-100 px-3 py-2 text-sm text-main-900"
                                : "max-w-[80%] self-start rounded-xl rounded-bl-sm bg-main-800 px-3 py-2 text-sm text-main-100"
                        }
                    >
                        {message.text}
                    </div>
                ))}
            </ScrollArea>
            <form
                className="flex gap-2 border-t border-main-700/70 p-3"
                onSubmit={(event) => {
                    event.preventDefault();
                    send();
                }}
            >
                <InputSmall
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Write a message"
                />
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
}
