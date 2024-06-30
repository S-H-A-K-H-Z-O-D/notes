import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import MassageWindow from "@/app/components/common/MassageWindow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/logo.svg",
  title: "Qaydnoma",
  description: "Kitob orqali baxtga erishing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          {children}
          <MassageWindow />
        </div>
      </body>
    </html>
  );
}
