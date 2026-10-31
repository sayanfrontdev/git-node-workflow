import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Testing Playground",
  description: "A small Next.js app for testing basic interactions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
