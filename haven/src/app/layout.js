// import { Geist, Geist_Mono } from "next/font/google";  className={`${geistSans.variable} ${geistMono.variable}`}
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
