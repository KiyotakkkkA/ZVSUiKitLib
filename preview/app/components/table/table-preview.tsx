import { Table } from "@kiyotakkkka/zvs-uikit-lib";
export function TablePreview() {
    return (
        <div className="w-full p-6">
            <Table
                data={[
                    { id: "1", name: "Aurora", amount: 1240 },
                    { id: "2", name: "Atlas", amount: 860 },
                ]}
                columns={[
                    { key: "name", title: "Project", accessor: "name" },
                    { key: "amount", title: "Amount", accessor: "amount" },
                ]}
                rowKey="id"
            />
        </div>
    );
}
