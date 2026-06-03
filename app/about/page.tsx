import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { RegionalBlock } from "@/components/RegionalBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustStats } from "@/components/TrustStats";

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="О FIA"
        title="Официальное представительство FIA в Казахстане и Центральной Азии"
        text="Наша академия помогает студентам из Казахстана, Центральной Азии и других русскоязычных стран осваивать международные стандарты коучинга по методологии Fowler International Academy of Professional Coaching и применять их в бизнесе, консультировании и новой профессии."
        image="/images/fia-hero-training.png"
        primaryLabel="Смотреть программы"
        primaryHref="/programs"
        secondaryLabel="Связаться с представительством"
        secondaryHref="/contacts"
        badges={["Fowler International Academy", "Казахстан и Центральная Азия", "Русскоязычный контекст FIA"]}
      />

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Наша миссия" title="Международные стандарты коучинга для устойчивых результатов" />
          <div className="text-lg leading-8 text-slate">
            <p>
              Мы помогаем предпринимателям, руководителям, экспертам и будущим коучам осваивать международные стандарты коучинга и применять их для достижения устойчивых результатов в бизнесе, карьере и жизни.
            </p>
            <p className="mt-5">
              Представительство в Казахстане и Центральной Азии остаётся частью общего позиционирования Fowler International Academy of Professional Coaching. Формулировка “Русскоязычное отделение” используется как часть структуры академии, но сайт говорит прежде всего о доступе к FIA для студентов региона.
            </p>
          </div>
        </div>
      </section>

      <RegionalBlock />
      <TrustStats />

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <SectionHeader eyebrow="Подход" title="Что отличает обучение FIA" />
          <div className="rounded-lg border border-graphite/10 bg-white p-6 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ["Американская методология", "Мы передаём систему, связанную с опытом Берри Фаулера и практикой образовательных проектов в США."],
                ["Больше практики", "В процессе обучения вы осваиваете структуру сессии, вопросы, обратную связь и работу с реальными запросами."],
                ["Доступ для региона", "Студенты из Казахстана, Центральной Азии и других русскоязычных стран получают понятный вход в программы FIA."],
                ["Международные стандарты", "Наши программы аккредитованы Международной Федерацией Коучинга (ICF), что подтверждает их соответствие мировым стандартам качества."]
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px bg-mist py-20">
        <SectionHeader eyebrow="История" title="Методология, основанная на опыте Берри Фаулера" text="Берри Фаулер — американский предприниматель и коуч с более чем 45-летним опытом. В 1979 году он основал Sylvan Learning Center, а позже адаптировал подход ускоренного обучения для подготовки взрослых специалистов." />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            ["1979", "Sylvan Learning Center"],
            ["45+ лет", "предпринимательского и коучингового опыта"],
            ["FIA", "система подготовки профессиональных коучей"],
            ["Русский язык", "понятная адаптация для студентов региона"]
          ].map(([value, label]) => (
            <div key={value} className="rounded-lg bg-white p-6">
              <p className="display-title text-3xl font-semibold text-navy">{value}</p>
              <p className="mt-3 text-sm leading-6 text-slate">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
