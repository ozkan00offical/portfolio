import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Ramazan Özkan",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-[#05060a] via-[#0a1a37] via-[#0e2d55]/90 to-[#071726]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
