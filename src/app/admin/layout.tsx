import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s · S.E.A.T.S Career Admin" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: LayoutProps<"/admin">) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="min-h-screen bg-surface text-sm text-text antialiased">{children}</body>
    </html>
  );
}
