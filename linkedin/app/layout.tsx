import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ndot = localFont({
  src: "./fonts/Ndot-57.otf",
  variable: "--font-ndot",
  weight: "400",
});

const ntype = localFont({
  src: "./fonts/NType82-Regular.otf",
  variable: "--font-ntype",
  weight: "400",
});

export const metadata: Metadata = {
  title: "LinkedIn (Nothing Edition)",
  description: "Reimagined LinkedIn in Nothing's aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ndot.variable} ${ntype.variable} antialiased font-sans selection:bg-[#D71921] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
