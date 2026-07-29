import type { Metadata } from "next";

import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";

import "./globals.css";

import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Short Link Manager",
  description: "مدیریت لینک‌های کوتاه به صورت ساده و حرفه‌ای",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${vazirmatn.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full
          flex
          flex-col
          font-sans
        "
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
