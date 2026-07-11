import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arslan Ali – Senior Software Engineer",
  description:
    "Senior Software Engineer with 3+ years of experience building and owning production software end-to-end across backend and full-stack applications.",
  keywords: ["Arslan Ali", "Software Engineer", "NestJS", "Next.js", "TypeScript", "Backend", "Full-Stack"],
  authors: [{ name: "Arslan Ali" }],
  openGraph: {
    title: "Arslan Ali – Senior Software Engineer",
    description: "Backend & Full-Stack Engineering Lead based in Islamabad, Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#0a0e1a] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
