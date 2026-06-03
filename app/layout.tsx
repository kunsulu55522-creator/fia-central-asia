import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIA | Русскоязычное отделение Академии профессионального коучинга",
  description:
    "Официальное русскоязычное отделение Fowler International Academy of Professional Coaching. Американская методология, ICF-аккредитация и практическое обучение коучингу.",
  metadataBase: new URL("https://fia-russian.vercel.app"),
  openGraph: {
    title: "FIA | Русскоязычное отделение",
    description:
      "Профессиональное обучение коучингу по американской системе FIA на русском языке.",
    images: ["/fia-seal.jpeg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
