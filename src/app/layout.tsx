import type { Metadata } from "next";
import "./globals.css";
import { ClubProvider } from "@/context/ClubContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Leos of Sri Lanka & Maldives • Inspiring Lives",
  description:
    "Official website of Leo Multiple District 306. Empowering youth across Sri Lanka and the Maldives through Leadership, Experience, and Opportunity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-leo-charcoal antialiased">
        <ClubProvider>
          {/* Main Top Navigation */}
          <Navbar />
          
          {/* Page Content */}
          <main className="flex-grow">{children}</main>
          
          {/* Global Footer */}
          <Footer />
        </ClubProvider>
      </body>
    </html>
  );
}
