import Link from "next/link";
import { contacts, navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-px grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em]">Fowler International Academy</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Русскоязычное отделение FIA и генеральное представительство FIA в Казахстане и Центральной Азии. Мы обучаем студентов из Казахстана, Центральной Азии и других русскоязычных стран коучингу как практической системе работы с целями, решениями и ответственностью.
          </p>
        </div>
        <div>
          <p className="font-semibold">Навигация</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-semibold">Контакты</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <span>{contacts.email}</span>
            <span>{contacts.support}</span>
            <span>{contacts.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
