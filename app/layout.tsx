import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FooterDropdown } from "./FooterDropdown.client";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "APPIFY",
};

//-----------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <body className={roboto.className}>
          {/* Navigation */}

          <nav className="sticky top-0 z-50 backdrop-blur-md animated-bottom-border">
            <div className="container mx-auto px-4 py-7">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/APPIFY_LOGO_VERTICAL_WHITE.png"
                    alt="APPIFY Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
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
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/APPIFY_LOGO__HORIZONTAL_WHITE.png"
                  alt="APPIFY Logo"
                  width={150}
                  height={50}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Enterprise Software Solutions
              </p>
              <div className="flex justify-center items-center space-x-6 mb-4">
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

                <FooterDropdown />
              </div>
              <p className="text-gray-500 text-sm">
                © 2025 APPIFY. All rights reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
