import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const zentry = localFont({
  src: "../public/fonts/zentry-regular.woff2",
  variable: "--font-zentry",
});

const general = localFont({
  src: "../public/fonts/general.woff2",
  variable: "--font-general",
});

const circularWeb = localFont({
  src: "../public/fonts/circularweb-book.woff2",
  variable: "--font-circular-web",
});

const robertMedium = localFont({
  src: "../public/fonts/robert-medium.woff2",
  variable: "--font-robert-medium",
});

const robertRegular = localFont({
  src: "../public/fonts/robert-regular.woff2",
  variable: "--font-robert-regular",
});

export const metadata: Metadata = {
  title: "Award Winning Website",
  description:
    "Award-winning online platform offering the latest computer games, detailed reviews, trailers, gameplay guides, and trusted recommendations to help players choose their next favorite title.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${zentry.className} ${general.className} ${circularWeb.className} ${robertMedium.className} ${robertRegular.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
