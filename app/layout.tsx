import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";


const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: "--Montserrat"
})

export const metadata: Metadata = {
  title: {
    default: "Виртуальный музей студенческого спорта СФУ",
    template: `%s | Виртуальный музей студенческого спорта СФУ`,
  },
  description: "Виртуальный музей студенческого спорта СФУ",
  openGraph: {
    title: "Виртуальный музей студенческого спорта СФУ",
    description: "Виртуальный музей студенческого спорта СФУ",
    siteName: "Виртуальный музей студенческого спорта СФУ",
    // images: ["/image-placeholder.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <main className="py-14 flex-1">{children}</main>
          <Toaster />
          <Footer/>
        </div>
      </body>
    </html>
  );
}
