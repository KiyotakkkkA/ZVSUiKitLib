"use client";
import { Chart } from "@kiyotakkkka/zvs-uikit-lib";

const weeklyActivityData = [
    { date: "Mon", users: 120, requests: 340 },
    { date: "Tue", users: 180, requests: 420 },
    { date: "Wed", users: 150, requests: 390 },
    { date: "Thu", users: 240, requests: 620 },
    { date: "Fri", users: 310, requests: 790 },
    { date: "Sat", users: 280, requests: 710 },
    { date: "Sun", users: 360, requests: 880 },
];

const tokenUsageData = [
    { date: "01.05", tokens: 1200 },
    { date: "02.05", tokens: 1800 },
    { date: "03.05", tokens: 1600 },
    { date: "04.05", tokens: 2600 },
    { date: "05.05", tokens: 3100 },
    { date: "06.05", tokens: 2800 },
    { date: "07.05", tokens: 3600 },
];

const modelRequestsData = [
    { model: "GPT", count: 42 },
    { model: "Ollama", count: 28 },
    { model: "Claude", count: 19 },
    { model: "Gemini", count: 14 },
];

export function ChartPreview() {
    return (
        <div className="grid gap-4 min-w-150 p-2">
            <Chart
                title="Line Chart"
                description="Users and requests by weekday"
                type="line"
                data={weeklyActivityData}
                xKey="date"
                tooltipCursorColor="rgba(250, 250, 250, 0.42)"
                activeDotRadius={5}
                series={[
                    {
                        key: "users",
                        label: "Users",
                        color: "rgb(250 250 250)",
                        activeColor: "rgb(34 197 94)",
                    },
                    {
                        key: "requests",
                        label: "Requests",
                        color: "rgb(163 163 163)",
                        activeColor: "rgb(125 211 252)",
                    },
                ]}
                height={400}
            />

            <Chart
                title="Area Chart"
                description="Token usage by day"
                type="area"
                data={tokenUsageData}
                xKey="date"
                series={[
                    {
                        key: "tokens",
                        label: "Tokens",
                        activeColor: "rgb(250 250 250)",
                    },
                ]}
                height={260}
                yTickFormatter={(value) => `${value}`}
            />

            <Chart
                title="Bar Chart"
                description="Request count by model"
                type="bar"
                data={modelRequestsData}
                xKey="model"
                series={[
                    {
                        key: "count",
                        label: "Requests",
                        className:
                            "hover:bg-gray-200 transition-colors duration-200",
                    },
                ]}
                height={240}
            />
        </div>
    );
}
