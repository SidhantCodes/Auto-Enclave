import type { Metadata } from "next";
import "./globals.css";
import { Footer, Nav } from "@/components";

export const metadata: Metadata = {
  title: "Auto Enclave",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
