import type { Metadata } from "next";
import "./globals.css"; // Ensure this file contains any necessary global styles
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "BeeBiz",
  description: "BeeBiz is a company that provides digital solutions to businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        style={{ fontFamily: 'Helvetica, sans-serif' }} // Set Helvetica as the font
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}