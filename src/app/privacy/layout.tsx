import type { Metadata, Viewport } from "next";
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
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
