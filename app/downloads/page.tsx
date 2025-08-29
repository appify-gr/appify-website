import { DownloadsClient } from "./Downloads.client";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignOutButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const Page = async () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-white mb-2">Downloads</h1>
          <p className="text-gray-400">
            Download files, documents, and resources
          </p>
        </div>
        <SignedOut>
          <SignIn
            routing="hash"
            fallbackRedirectUrl="/downloads"
            appearance={{
              baseTheme: dark,
              variables: {
                colorBackground: "#101727",
              },
            }}
          />
        </SignedOut>
        <SignedIn>
          <DownloadsClient />
        </SignedIn>
      </div>
    </div>
  );
};
export default Page;
