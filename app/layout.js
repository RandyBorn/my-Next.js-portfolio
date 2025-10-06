// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Randy Born - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Body nutzt deine CSS-Variablen und die vorhandene .animate-gradient Animation */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} animate-gradient`}
      >
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
