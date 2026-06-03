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
        title="Мы представляем русскоязычное отделение FIA"
        text="Наша академия помогает студентам из Казахстана, Центральной Азии и других русскоязычных стран осваивать профессиональный коучинг по методологии Fowler International Academy of Professional Coaching и применять его в бизнесе, консультировании и новой профессии."
        image="/images/fia-hero-training.png"
        primaryLabel="Смотреть программы"
        primaryHref="/programs"
        secondaryLabel="Связаться с представительством"
        secondaryHref="/contacts"
        badges={["FIA на русском языке", "США и международный контекст", "Казахстан и Центральная Азия"]}
      />

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Наша миссия" title="Мы делаем профессиональный коучинг понятным, практичным и применимым" />
          <div className="text-lg leading-8 text-slate">
            <p>
              Мы не строим отдельную локальную академию. Мы остаёмся частью общего позиционирования FIA и развиваем русскоязычный вход в международную систему обучения.
            </p>
            <p className="mt-5">
              Наша задача — передать студентам из Казахстана, Центральной Азии и других русскоязычных стран методологию FIA на живом и понятном русском языке: без лишней академической тяжести, с уважением к стандартам профессии и с фокусом на то, как навыки работают в реальных сессиях, командах и решениях.
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
                ["Больше практики", "Мы обучаем через структуру сессии, вопросы, обратную связь и работу с реальными запросами."],
                ["Русскоязычное сопровождение", "Мы помогаем студентам из региона разобраться в программе, формате и дальнейших шагах."],
                ["Международные стандарты", "Наш курс аккредитован Международной Федерацией Коучинга (ICF), что подтверждает его соответствие мировым стандартам качества."]
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
