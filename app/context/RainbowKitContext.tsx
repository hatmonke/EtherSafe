"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

export default function RainbowKitContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RainbowKitProvider>{children}</RainbowKitProvider>;
}
