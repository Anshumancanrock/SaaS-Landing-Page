import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Header";

export const metadata: Metadata = {
  title: "ClickSpark",
  description: "AI‑Powered Pricing Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-zinc-950 dark:text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
