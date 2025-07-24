import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from '@radix-ui/themes';
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
  title: "Chương trình đào tạo chuyên sâu",
  description: "Khám phá các khóa học, giảng viên, cơ hội nghề nghiệp và cấu trúc chương trình đào tạo chuyên sâu của chúng tôi.",
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
         
        </Theme>
      </body>
    </html>
  );
}
