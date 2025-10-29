import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Alfonso Marquez",
  description: "Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
