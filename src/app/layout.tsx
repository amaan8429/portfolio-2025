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
  title: "Amaan — Developer, Creator & Founder",
  description:
    "Amaan from Lucknow — full-stack developer (cur8t, rotreels), content creator (120K+ Instagram), and founder of the content agency AurbitLabs.",
  openGraph: {
    title: "Amaan — Developer, Creator & Founder",
    description:
      "Full-stack developer, 120K+ Instagram creator, and content-agency founder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMono.variable} bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <Analytics />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
