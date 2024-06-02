import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
const popins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Muhammad Ramadhoni Porotofolio",
  icons: {
    icon: "/public/assets/images/Logo-1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scroll-smooth">
      <body className={`${popins.variable} bg-primary text-white`}>
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
