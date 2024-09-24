import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fede Moguel",
  description: "Personal Trainer Fede Moguel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
