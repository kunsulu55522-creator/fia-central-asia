import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function CertificationPage() {
  return (
    <>
      <Hero eyebrow="Сертификация и стандарты" title="Наш курс аккредитован Международной Федерацией Коучинга (ICF)" text="Это подтверждает его соответствие мировым стандартам качества. Мы помогаем студентам заранее разобраться в формате курса, сертификате FIA и дальнейших шагах профессионального развития." image="/images/fia-hero-training.png" primaryLabel="Задать вопрос" primaryHref="/contacts" secondaryLabel="Смотреть программы" secondaryHref="/programs" badges={["ICF", "Сертификат FIA", "Международные стандарты"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Прозрачность" title="Что важно уточнить перед обучением" text="Мы объясняем студентам не только содержание программы, но и то, как устроены требования, сертификат и дальнейшая траектория после курса." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Статус курса", "Наш курс аккредитован Международной Федерацией Коучинга (ICF), что подтверждает его соответствие мировым стандартам качества."],
            ["Сертификат FIA", "По итогам обучения студент получает сертификат FIA согласно условиям выбранной программы."],
            ["Следующие шаги", "Представитель академии поможет уточнить, как обучение связано с вашей профессиональной целью."]
          ].map(([title, text]) => <div key={title} className="rounded-lg border border-graphite/10 bg-white p-6"><h3 className="text-2xl font-semibold text-ink">{title}</h3><p className="mt-4 text-sm leading-7 text-slate">{text}</p></div>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
