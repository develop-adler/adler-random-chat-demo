import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";


import OnlyMobileAvailableAnimation from "../components/globals/OnlyMobileAvailableAnimation";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adler Random Chat Demo",
  description: "A demo of Adler Random Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit bg-[#EEEEFA] text-[#555] ${inter.variable} font-inter`}>
        <div className="min-h-screen">
          <div className="block md:hidden">
            {children}
          </div>
          <div className="hidden md:flex items-center justify-center h-screen">
            <OnlyMobileAvailableAnimation />
          </div>
        </div>
      </body>
    </html>
  );
}
