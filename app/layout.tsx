import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Container M&R Demo",
  description: "Demo hệ thống sửa chữa container"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
