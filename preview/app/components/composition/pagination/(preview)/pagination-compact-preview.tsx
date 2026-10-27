"use client";
import { Card, Pagination } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const posts = Array.from({ length: 23 }, (_, index) => ({
    id: index + 1,
    title: `Release notes #${23 - index}`,
    excerpt: "Bug fixes, new components and smaller bundle size.",
}));

const PER_PAGE = 3;

export function DemoPaginationCompact() {
    const [page, setPage] = useState(1);
    const lastPage = Math.ceil(posts.length / PER_PAGE);
    const from = (page - 1) * PER_PAGE;
    const visible = posts.slice(from, from + PER_PAGE);

    return (
        <div className="w-full max-w-xl space-y-3">
            <div className="grid gap-2">
                {visible.map((post) => (
                    <Card key={post.id} rounded="rounded-xl">
                        <Card.Content>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle>{post.excerpt}</Card.Subtitle>
                        </Card.Content>
                    </Card>
                ))}
            </div>
            <Pagination
                page={page}
                perPage={PER_PAGE}
                total={posts.length}
                lastPage={lastPage}
                from={from + 1}
                to={from + visible.length}
                onPageChange={setPage}
            />
        </div>
    );
}
