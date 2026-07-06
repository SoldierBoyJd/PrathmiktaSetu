import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prathmikta Setu – AI-Powered Constituency Priority Platform",
  description: "AI-powered platform empowering MPs and administrative teams to understand, prioritize, and solve public issues intelligently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#F5F7FA] text-[#1A2332] antialiased">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
