import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Flashlight from './script';
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Chimera's Den - D&D Collective",
  description: "Experience unparalleled tabletop roleplaying with Chimera's Den",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="/tracking.js" strategy="afterInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <div className="header-container">
            <div className="logo-container">
              <Image src="/chimeralogo.png" alt="Chimera's Den Logo" width={600} height={200} className="logo" />
            </div>
            <nav className="navbar">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><a href="https://discord.gg/chimerasden" target="_blank" rel="noopener noreferrer">Discord</a></li>
                <li><a href="https://patreon.com/chimeras" target="_blank" rel="noopener noreferrer">Patreon</a></li>
                <li><a href="https://www.patreon.com/chimeras/shop" target="_blank" rel="noopener noreferrer">Store</a></li>
              </ul>
            </nav>
          </div>
          {children}
        </div>
        <Flashlight />
      </body>
    </html>
  );
}
