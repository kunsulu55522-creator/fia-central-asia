import { programs } from "@/data/site";

export function ApplicationForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-graphite/10 bg-white p-6 shadow-soft" action="#" aria-label="Форма заявки">
      <div>
        <label className="mb-2 block text-sm font-semibold text-graphite" htmlFor="name">Имя</label>
        <input className="field" id="name" name="name" placeholder="Как к вам обращаться" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-graphite" htmlFor="phone">Телефон / WhatsApp</label>
        <input className="field" id="phone" name="phone" placeholder="+7" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-graphite" htmlFor="email">Email</label>
        <input className="field" id="email" name="email" type="email" placeholder="name@example.com" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-graphite" htmlFor="program">Интересующая программа</label>
        <select className="field" id="program" name="program" defaultValue="">
          <option value="" disabled>Выберите программу</option>
          {programs.map((program) => <option key={program.title}>{program.title}</option>)}
        </select>
      </div>
      <button className="focus-ring mt-2 min-h-12 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink" type="button">
        Отправить заявку
      </button>
      <p className="text-xs leading-5 text-slate">После отправки представитель FIA свяжется с вами и поможет уточнить программу, формат и следующий шаг.</p>
    </form>
  );
}
