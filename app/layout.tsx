import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import clerkAppearance from "@/config/clerkAppearanceConfig";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Base Website Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en">
        <body
          className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16 border-2 border-green-600">
            <SignedOut>
              <SignInButton>
                <button>Login</button>
              </SignInButton>
              <SignUpButton>
                <button>Sign up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <section className="flex flex-1 justify-center items-center border-2 border-blue-600">
            {children}
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
