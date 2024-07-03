import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartContextProvider } from "./_contexts/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Desafio técnico para Sorte Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
