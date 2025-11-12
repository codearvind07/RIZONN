import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Inter font as a bold alternative
const interBold = Inter({
  variable: "--font-inter-bold",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Rizonn",
  description: "Rizonn - Where Inspiration Moves Ahead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}