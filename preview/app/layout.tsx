import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { StyleProvider, ToastProvider } from "@kiyotakkkka/zvs-uikit-lib";
import {
    defaultThemePalette,
    getThemeVariables,
    parseThemePalette,
    STYLE_THEME_COOKIE,
} from "@kiyotakkkka/zvs-uikit-lib/server";
import "@kiyotakkkka/zvs-uikit-lib/styles.css";
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
    const cookieStore = await cookies();
    const initialPalette =
        parseThemePalette(cookieStore.get(STYLE_THEME_COOKIE)?.value) ??
        defaultThemePalette;

    return (
        <html
            lang="ru"
            data-scroll-behavior="smooth"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            style={getThemeVariables(initialPalette) as CSSProperties}
        >
            <body>
                <StyleProvider initialPalette={initialPalette} cookies>
                    <ToastProvider>{children}</ToastProvider>
                </StyleProvider>
            </body>
        </html>
    );
}
