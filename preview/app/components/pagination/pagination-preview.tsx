"use client";
import { Pagination } from "@kiyotakkkka/zvs-uikit-lib";
export function PaginationPreview() {
    return (
        <div className="w-full p-6">
            <Pagination
                page={2}
                perPage={10}
                total={137}
                lastPage={14}
                from={11}
                to={20}
                onPageChange={() => {}}
            />
        </div>
    );
}
