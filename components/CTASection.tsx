import { ApplicationForm } from "./ApplicationForm";

export function CTASection() {
  return (
    <section className="container-px bg-porcelain py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Заявка</p>
          <h2 className="display-title text-4xl font-semibold leading-tight text-ink md:text-5xl">Подберите программу FIA под вашу цель</h2>
          <p className="mt-5 text-lg leading-8 text-slate">
            Вы получите консультацию на русском языке и сможете уточнить, какие результаты даёт обучение FIA для вашей задачи. Программы доступны для студентов из Казахстана, Центральной Азии и других русскоязычных стран.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-graphite">
            <span>Официальное представительство FIA в Казахстане и Центральной Азии</span>
            <span>Программы для студентов из Казахстана, Центральной Азии и других русскоязычных стран</span>
            <span>Программы аккредитованы Международной Федерацией Коучинга (ICF)</span>
          </div>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
}
