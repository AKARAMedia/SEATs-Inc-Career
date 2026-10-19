import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://seatsinc-career.com"),
  title: { default: "S.E.A.T.S Career", template: "%s - S.E.A.T.S Career" },
  description: "S.E.A.T.S Inc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}
