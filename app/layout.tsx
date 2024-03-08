import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASAP | Moving",
  description: "Alex Smagin fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative `}>
        <div className="bg-[#e0f2fe] absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 h-[50rem] w-[100%] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
