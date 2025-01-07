import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SiteFooter from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaan's Portfolio",
  description: "bruhhh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
          <SiteFooter />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
