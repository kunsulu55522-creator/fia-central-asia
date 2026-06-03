import Link from "next/link";
import { contacts, navigation } from "@/data/site";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-porcelain/92 backdrop-blur">
      <div className="container-px flex min-h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex flex-col rounded-sm leading-tight">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-ink">FIA</span>
          <span className="hidden text-xs text-slate sm:block">Русскоязычное отделение</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-graphite lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-sm transition hover:text-steel">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href={contacts.whatsappHref} variant="whatsapp" className="hidden sm:inline-flex">WhatsApp</Button>
          <Button href="/contacts">Оставить заявку</Button>
          <details className="relative lg:hidden">
            <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center rounded-md border border-graphite/15 px-3 text-sm font-semibold text-ink marker:hidden">
              Меню
            </summary>
            <div className="absolute right-0 top-12 z-50 grid w-72 gap-1 rounded-lg border border-graphite/10 bg-white p-3 text-sm font-medium text-graphite shadow-soft">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 transition hover:bg-mist hover:text-steel">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
