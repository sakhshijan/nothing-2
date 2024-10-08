import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import KalamehFont from "@/font/kalameh";
import Lenis from "@/app/lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body
        className={`${KalamehFont.className}  flex min-h-screen flex-col bg-neutral-950`}
      >
        <Lenis>
          {children}
        </Lenis>
      </body>
    </html>
  );
}
