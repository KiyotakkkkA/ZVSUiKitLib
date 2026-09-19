import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@kiyotakkkka/zvs-uikit-lib";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "ZVS UI — React components for focused products",
        template: "%s — ZVS UI",
    },
    description:
        "A precise React UI kit with accessible components, hooks, and design foundations.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            data-scroll-behavior="smooth"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body>
                <ToastProvider>{children}</ToastProvider>
            </body>
        </html>
    );
}
