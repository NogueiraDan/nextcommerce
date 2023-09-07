import "./globals.css";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import Header from "@/components/Header";
import { CartProvider } from "@/context/cartContext";

const saira = Saira({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Caputeeno Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <main>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
