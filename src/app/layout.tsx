import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ContactTab from "@/components/ContactTab";
import { person } from "@/content/resume";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "K. Srinivas Karthik — Field Notes";
const description =
  "AI & ML engineering student and Head of Operations at Meta Developer Communities — builder and operator, read as one record.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s",
  },
  description,
  authors: [{ name: person.name, url: person.linkedin }],
  keywords: [
    "K. Srinivas Karthik",
    "AI ML engineer",
    "portfolio",
    "GITAM University",
    "Meta Developer Communities",
    "robotics",
    "computer vision",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: title,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f4",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`no-js ${archivoBlack.variable} ${grotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          // Removes the no-js gate before first paint so JS users get the
          // scroll-reveal starting state; no-JS users keep content visible.
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
        <ContactTab />
      </body>
    </html>
  );
}
