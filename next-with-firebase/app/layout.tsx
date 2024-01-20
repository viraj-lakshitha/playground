import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Wrapper from "@/wrapper";

const font = Noto_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Next with Firebase",
  description: "Exploring firebase capabilities with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
