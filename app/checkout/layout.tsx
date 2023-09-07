import { CartProvider } from "@/context/cartContext";
import type { Metadata } from "next";
import { Saira } from "next/font/google";

const saira = Saira({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout page",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html>
    //   <body className={saira.className}>{children}</body>
    // </html>
    <main>
      {children}
    </main>
  );
}
