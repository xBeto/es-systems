import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Switching to Manrope for that tech/architectural feel
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"], // We'll rely mostly on weight for hierarchy
});

export const metadata: Metadata = {
  title: "ES Systems | Architectural Outdoor Living",
  description: "Bespoke aluminium outdoor constructions. Engineering perfection for modern living.",
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
      </body>
    </html>
  );
}
