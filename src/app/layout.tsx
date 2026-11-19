import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/conditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Display face for headlines; only ships in weight 400
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Makes the auto-generated og:image URL absolute (required by Instagram, WhatsApp, etc.)
  metadataBase: new URL("https://alfonso-marquez-portfolio.vercel.app"),
  title: "Alfonso Marquez",
  description: "Portfolio",
  // Link previews; the image comes from src/app/opengraph-image.jpg
  openGraph: {
    title: "Alfonso Marquez",
    description: "Full-stack developer, photographer and videographer.",
    url: "/",
    siteName: "Alfonso Marquez",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
