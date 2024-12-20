import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import QueryProvider from "./QueryProvider";
import { Navbar } from '../index'
import { Toaster } from "@/components/ui/toaster";
import TypicalContextProviderWrapper from "@/context/TypicalContextProvider";
import OverlayLoader from "@/components/OverlayLoader/OverlayLoader";
import InitializationWrapper from "./InitializationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Documentarium",
  description: "An Easy Documentation Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <html lang="en">
        <StoreProvider>
          <TypicalContextProviderWrapper>
            <QueryProvider>
              <InitializationWrapper>
                <body
                  suppressHydrationWarning={true}
                  className={inter.className}>
                  <Navbar />
                  {children}
                  <Toaster />
                  <OverlayLoader />
                </body>
              </InitializationWrapper>
            </QueryProvider>
          </TypicalContextProviderWrapper>
        </StoreProvider>
      </html>
    </>
  );
}
