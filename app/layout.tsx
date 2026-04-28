import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Roboto } from "next/font/google";
import { ParticlesProvider } from "@/context/particles";
import { BackgroundPattern } from "@/components/background-pattern";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilo Chat",
  description: "Secure communications, better communications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesProvider>
            <Navbar></Navbar>
            <BackgroundPattern></BackgroundPattern>
            {children}
          </ParticlesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
