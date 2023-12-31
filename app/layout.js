import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto md:w-[70%] w-[85%] bg-white text-black p-5">
        <Header />
        {children}
      </body>
    </html>
  );
}
