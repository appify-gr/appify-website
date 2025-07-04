import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "APPIFY",
  //description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-md border-b border-gray-700/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <span className="text-white text-2xl font-bold">APPify</span>
              </Link>
              <div className="flex space-x-6">
                <Link
                  prefetch={true}
                  href="/#services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  prefetch={true}
                  href="/#about"
                  className="text-gray-300 hover:text-white"
                >
                  About
                </Link>
                <Link
                  prefetch={true}
                  href="/#contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="bg-blue-500 p-1 rounded">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="text-gray-300 font-semibold">Appify</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Enterprise Software Solutions
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <Link
                prefetch={true}
                href="https://app-ify.com/apps/getaways-management/privacy-policy"
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                Privacy Policy
              </Link>

              <Link
                href="https://app-ify.com/apps/getaways-management/terms-of-service"
                prefetch={true}
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Appify. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
