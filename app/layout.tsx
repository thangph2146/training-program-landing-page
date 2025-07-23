import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from '@radix-ui/themes';
import "./globals.css";

import { StagewiseToolbar } from "@stagewise/toolbar-next";
import ReactPlugin from "@stagewise-plugins/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trang web đào tạo",
  description: "Trang web đào tạo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background transition-colors`}
      >
        <Theme>
          <main className="w-full flex flex-col">  
            {children}
          </main>
          {process.env.NODE_ENV === "development" && (
            <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
          )}
        </Theme>
      </body>
    </html>
  );
}
