import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/profile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.designation}, ${site.department}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    site.designation,
    site.department,
    site.organisation,
    "IT professional",
    "portfolio",
  ],
  openGraph: {
    title: `${site.name} — ${site.designation}, ${site.department}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.designation}`,
    description: site.tagline,
  },
};

/** Applies the saved theme before first paint so the page never flashes. */
const themeScript = `(function(){try{
document.documentElement.classList.add("js");
var s=localStorage.getItem("portfolio-theme");
var d=s?s==="dark":(${JSON.stringify(site.defaultTheme)}==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches:${JSON.stringify(site.defaultTheme)}==="dark");
document.documentElement.classList.toggle("dark",d);
}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
