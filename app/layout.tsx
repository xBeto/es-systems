import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Switching to Manrope for that tech/architectural feel
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"], // We'll rely mostly on weight for hierarchy
});

export const metadata: Metadata = {
  title: "ES Systems | Buitenleven Gedefinieerd",
  description: "Wij ontwerpen architecturale aluminium constructies die de grens tussen binnen en buiten doen vervagen.",
  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${manrope.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
