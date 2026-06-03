import { contacts, programs } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <section id="apply" className={compact ? "" : "section bg-forest text-white"}>
      <div className={compact ? "" : "container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"}>
        {!compact && (
          <div>
            <p className="eyebrow text-white/50">Заявка</p>
            <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Обсудите подходящую программу с представителем FIA
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Оставьте контакты, и команда русскоязычного отделения поможет выбрать формат обучения.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contacts.whatsappHref} variant="light">
                Написать в WhatsApp
              </ButtonLink>
              <ButtonLink href={`mailto:${contacts.email}`} variant="light">
                Email
              </ButtonLink>
            </div>
          </div>
        )}
        <form className="grid gap-4 rounded-lg border border-white/20 bg-white p-5 text-ink shadow-soft md:p-7">
          <label className="grid gap-2 text-sm font-bold">
            Имя
            <input className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold" name="name" placeholder="Ваше имя" type="text" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Телефон / WhatsApp
            <input className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold" name="phone" placeholder="+7..." type="tel" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Email
            <input className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold" name="email" placeholder="name@example.com" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Интересующая программа
            <select className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold" name="program">
              {programs.map((program) => (
                <option key={program.slug}>{program.title}</option>
              ))}
            </select>
          </label>
          <button className="mt-2 min-h-12 rounded-full bg-forest px-6 text-sm font-extrabold text-white transition hover:bg-ink" type="button">
            Отправить заявку
          </button>
          <p className="text-xs leading-5 text-ink/50">
            Для подключения отправки формы потребуется добавить рабочий обработчик или CRM-интеграцию.
          </p>
        </form>
      </div>
    </section>
  );
}
