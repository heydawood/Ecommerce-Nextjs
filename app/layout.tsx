//'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { PageProvider } from "./Providers/PageProvider";
import ReactQueryProvider from "./Providers/ReactQueryProvider";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// i added this - font optimization
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Furnish",
  description: "Furnish - Your trusted online furniture retailer",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html
      lang="en"
      className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

         <PageProvider>

          <Toaster position="top-center" />
     
          <ReactQueryProvider>
          {children}
          </ReactQueryProvider>

         </PageProvider>

      </body>
    </html>
  );
}

