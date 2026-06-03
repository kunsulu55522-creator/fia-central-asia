import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function FounderPage() {
  return (
    <>
      <Hero eyebrow="Основатель" title="Берри Фаулер и методология ускоренного обучения FIA" text="Берри Фаулер — американский предприниматель и коуч с более чем 45-летним опытом. Его подход ценен не только историей, но и практичностью: он помогает взрослым специалистам быстро осваивать навыки, применять их в реальных ситуациях и видеть измеримый прогресс." image="/images/fia-programs-workshop.png" primaryLabel="Смотреть программы" primaryHref="/programs" secondaryLabel="О FIA" secondaryHref="/about" badges={["45+ лет опыта", "Sylvan Learning Center", "Система ускоренного обучения"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="История" title="Факты об основателе" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {["В 1979 году основал Sylvan Learning Center.", "Создал методику ускоренного обучения.", "Позже адаптировал подход для обучения взрослых и создал систему FIA.", "О нём писали The Wall Street Journal, Forbes, The New York Times, Newsweek и USA Today."].map((text) => <div key={text} className="rounded-lg border border-graphite/10 bg-white p-6 text-lg leading-8 text-slate">{text}</div>)}
        </div>
      </section>
      <section className="container-px bg-mist py-20">
        <SectionHeader eyebrow="Ценность методологии" title="Почему подход FIA эффективен сегодня" text="Современному человеку часто не хватает не информации, а системы, которая переводит знания в действие. Методология FIA отвечает именно на эту задачу." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ["Опыт Sylvan Learning Center", "Подход Берри Фаулера вырос из образовательной практики, где важны скорость освоения, ясная структура и измеримый прогресс."],
            ["Система ускоренного обучения", "Вы осваиваете не разрозненные идеи, а последовательный процесс: понять запрос, увидеть препятствия, выбрать действие и удержать ответственность."],
            ["Международный опыт", "Методология FIA применима для студентов из разных стран, потому что работает с универсальными задачами: цели, решения, мотивация, действия и результат."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-graphite/10 bg-white p-6">
              <h2 className="text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
