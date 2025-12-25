import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const billabong = localFont({
  src: "../fonts/Billabong.ttf",
  variable: "--font-billabong",
  display: "swap",
});

const ndot = localFont({
  src: "../fonts/Ndot-57.otf",
  variable: "--font-ndot",
  display: "swap",
});

const ntype = localFont({
  src: "../fonts/NType82-Regular.otf",
  variable: "--font-ntype",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instagram - Made by Nothing",
  description: "Instagram redesigned with Nothing's design philosophy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${billabong.variable} ${ndot.variable} ${ntype.variable} antialiased bg-nothing-bg text-nothing-text transition-colors duration-300 font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
