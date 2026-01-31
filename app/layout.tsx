import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Will Liang - Portfolio",
  description: "Co-CEO at Amplify AI Group. Data, AI & Technology Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
