import { ApplicationForm } from "./ApplicationForm";

export function CTASection() {
  return (
    <section className="container-px bg-porcelain py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Заявка</p>
          <h2 className="display-title text-4xl font-semibold leading-tight text-ink md:text-5xl">Подберите программу FIA под вашу цель</h2>
          <p className="mt-5 text-lg leading-8 text-slate">
            Мы свяжемся с вами на русском языке, уточним задачу и поможем понять, какой формат обучения будет уместен именно для вас. Программы доступны для студентов из Казахстана, Центральной Азии и других русскоязычных стран.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-graphite">
            <span>Русскоязычное отделение FIA</span>
            <span>Генеральное представительство в Казахстане и Центральной Азии</span>
            <span>Курс аккредитован Международной Федерацией Коучинга (ICF)</span>
          </div>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
}
