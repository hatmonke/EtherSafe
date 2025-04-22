import ToasterContext from "./context/ToasterContext";
import RainbowKitContext from "./context/RainbowKitContext";
import WagmiContext from "./context/WagmiContext";
import "./css/style.css";

import { Inter, Gruppo } from "next/font/google";
import localFont from "next/font/local";
import VideoBackground from "@/components/VideoBackground";
import Cursor from "@/components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gruppo = Gruppo({
  subsets: ["latin"],
  variable: "--font-gruppo",
  display: "swap",
  weight: "400",
});

const square = localFont({
  src: [
    {
      path: "../public/fonts/SFSquareHead.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/SFSquareHead-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-squarehead",
});

export const metadata = {
  title: "EtherSafe",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gruppo.variable} ${inter.variable} antialiased bg-basebg text-text tracking-tight`}
      >
        <WagmiContext>
          <RainbowKitContext>
            <ToasterContext />
            <div className="relative z-0 flex w-full h-screen overflow-y-hidden bg-center bg-no-repeat bg-cover backdrop-blur-sm bg-basebg/30 text-text">
              {children}
            </div>
          </RainbowKitContext>
        </WagmiContext>
      </body>
    </html>
  );
}
