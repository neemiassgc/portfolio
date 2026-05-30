import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Neemiassgc Portfolio",
  description: "Portfolio of projects by Neemias Santos",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-core"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-hues-secondary bg-hues-primary ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
