import { contacts, programs } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-extrabold">Fowler International Academy of Professional Coaching</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
            Официальное русскоязычное отделение FIA. Американская методология профессионального коучинга на русском языке.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase text-white/50">Программы</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {programs.map((program) => (
              <a href={`/programs/${program.slug}`} key={program.slug}>
                {program.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase text-white/50">Контакты</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            <a href={`mailto:${contacts.support}`}>{contacts.support}</a>
            <span>{contacts.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
