import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FIA — Казахстан и Центральная Азия",
  description: "Официальное представительство Fowler International Academy of Professional Coaching в Казахстане и Центральной Азии.",
  metadataBase: new URL("https://fia-russian.example"),
  openGraph: {
    title: "FIA — Казахстан и Центральная Азия",
    description: "Официальное представительство Fowler International Academy of Professional Coaching в Казахстане и Центральной Азии.",
    images: ["/images/fia-hero-training.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
