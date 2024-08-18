import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { NavigationDesktop } from "@/components/Navigation/NavigationDesktop";
import { Navigation } from "@/components/Navigation/Navigation";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stachy Codes",
  description: "Stachy Codes portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NavigationDesktop />

        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
