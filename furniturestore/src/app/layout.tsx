import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ShopProvider } from "./context/ShopContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aluma Furniture",
  description: "Beautifully crafted furniture for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <ShopProvider>
          <Navbar />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ShopProvider>
      </body>
    </html>
  );
}
