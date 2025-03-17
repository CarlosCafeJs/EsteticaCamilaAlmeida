import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header/header"
import "./globals.css";
import { kameron } from './fonts'

export const metadata: Metadata = {
  title: "Dra. Camila Almeida",
  description: "Esteticista especializada em cuidado da pele.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kameron.className} ${kameron.className} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
