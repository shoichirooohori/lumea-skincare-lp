import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMÉA | 止まった一滴が、うるおいの時間を動かす。",
  description:
    "30代の乾燥によるくすみとハリ不足に向き合う、LUMÉAの美容液・クリーム。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
