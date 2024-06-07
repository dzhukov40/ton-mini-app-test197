import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Fragment} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/*<header>*/}
    {/*  <script src="chrome-extension://fgddmllnllkalaagkghckoinaemmogpe/scripts/content/gps.js"></script>*/}
    {/*  <script src="js/libs/jquery.min.js"></script>*/}
    {/*  <script src="js/libs/zip.min.js"></script>*/}

    {/*  <script src="js/libs/screenfull.min.js"></script>*/}
    {/*  <script src="js/epub.js"></script>*/}
    {/*  <script src="js/reader.js"></script>*/}
    {/*</header>*/}

    <body className={inter.className}>{children}</body>
    </html>
  );
}
