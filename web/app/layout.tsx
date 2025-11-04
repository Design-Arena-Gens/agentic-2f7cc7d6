import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pastel Forest Sunrise ? Roro & Dodo Tales",
  description: "A calm, inviting, wonder-filled pastel forest at sunrise with gentle animation.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
