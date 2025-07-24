import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/root.css";
import MobileNav from "@/components/bank1/mobilenav";

import Navbar from "@/components/bank1/navbar";
import Footer from "@/components/bank1/footer";

import LeftContent from "@/components/bank1/leftcontent";
import RightContent from "../components/bank1/rightcontent";
import { Do_Hyeon } from "next/font/google";
const doHyeon = Do_Hyeon({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royale",
  description: "Casino Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${doHyeon.className} antialiased`}>
        <MobileNav />
        <Navbar />
        {/* <MobileNav />
                <Navbar />{" "} */}

        <main className="grid sm:grid-cols-5 grid-cols-1  mx-auto">
          <div className="hidden lg:block sidebar-bg">
            <div className="col-span-1 sidebar-bg h-full">
              <LeftContent />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 p-3">{children}</div>
          <div className="hidden lg:block">
            <div className="col-span-1 p-3">
              <RightContent />
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
