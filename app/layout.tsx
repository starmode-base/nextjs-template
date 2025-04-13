import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STΛRMODΞ Next.js template",
  description: "STΛRMODΞ Next.js website template",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="antialiased">{props.children}</body>
    </html>
  );
}
