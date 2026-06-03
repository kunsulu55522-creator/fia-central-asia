import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <Image
            alt="FIA"
            className="h-11 w-11 rounded-full object-cover"
            height={88}
            src="/fia-seal.jpeg"
            width={88}
            priority
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-ink">FIA</span>
            <span className="hidden text-xs font-semibold uppercase text-ink/60 sm:block">
              Русскоязычное отделение
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/70 lg:flex">
          <a href="/#why">Почему FIA</a>
          <a href="/#story">Система</a>
          <a href="/#programs">Программы</a>
          <a href="/#team">Команда</a>
        </nav>
        <div className="hidden md:block">
          <ButtonLink href={contacts.whatsappHref} variant="secondary">
            WhatsApp
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
