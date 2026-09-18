import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retno Anggraini | Administration & Information Technology",
  description:
    "Portfolio Retno Anggraini — D3 Teknik Informatika dengan pengalaman di administrasi, pengolahan data, sistem informasi, dan UI design.",
  keywords: [
    "Retno Anggraini",
    "Portfolio",
    "Administrasi",
    "Teknik Informatika",
    "UI Design",
    "Figma",
    "Laravel",
    "MySQL",
  ],
  authors: [{ name: "Retno Anggraini" }],
  openGraph: {
    title: "Retno Anggraini | Portfolio",
    description:
      "Administration, Information Technology, Data Processing, and UI Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
