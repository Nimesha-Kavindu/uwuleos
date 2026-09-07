import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClubProvider } from "@/context/ClubContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Leo Club of Uva Wellassa University • District 306 D10",
  description:
    "Official website of the Leo Club of Uva Wellassa University, Leo District 306 D10, Sri Lanka. Empowering youth through leadership, fellowship, and service.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
