import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = "W3 Stack Lab | AI agents and automation for businesses";

export const metadata: Metadata = {
  metadataBase: new URL("https://w3stacklab.com"),
  title,
  description:
    "W3 Stack Lab builds AI agents and automation for businesses. Claude API, LangChain.js, MCP, plus web and mobile apps. Led by Shiv Pandey, Gurugram, India.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "W3 Stack Lab",
    title,
    description:
      "We build AI agents and automation for businesses. Claude API, LangChain.js, MCP, web and mobile apps.",
    url: "https://w3stacklab.com/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@w3stacklab",
    title,
    description: "We build AI agents and automation for businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
