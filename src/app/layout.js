import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/favicon.ico?alt=media&token=1fc94470-d881-4c7c-91df-ea41352be7b3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
