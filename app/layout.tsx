import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FIA — Русскоязычное отделение",
  description: "Fowler International Academy of Professional Coaching — Русскоязычное отделение и генеральное представительство FIA в Казахстане и Центральной Азии.",
  metadataBase: new URL("https://fia-russian.example"),
  openGraph: {
    title: "FIA — Русскоязычное отделение",
    description: "Профессиональный коучинг по методологии FIA на русском языке.",
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
