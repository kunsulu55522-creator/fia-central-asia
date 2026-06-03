import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function CertificationPage() {
  return (
    <>
      <Hero eyebrow="Сертификация и стандарты" title="Наши программы аккредитованы Международной Федерацией Коучинга (ICF)" text="Это подтверждает их соответствие мировым стандартам качества. Вы получаете обучение в международной профессиональной логике и навыки, которые можно применять в разных странах мира." image="/images/fia-hero-training.png" primaryLabel="Оставить заявку" primaryHref="/contacts" secondaryLabel="Смотреть программы" secondaryHref="/programs" badges={["ICF", "Профессиональное признание", "Международные стандарты"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Польза для выпускника" title="Что даёт обучение по международным стандартам" text="Сертификация усиливает доверие к программе и помогает выпускнику использовать полученные знания и навыки в профессиональной практике." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Международные стандарты", "Вы обучаетесь в системе, ориентированной на мировые стандарты качества профессионального коучинга."],
            ["Профессиональное признание", "Сертификат FIA поддерживает вашу профессиональную позицию как коуча, руководителя, эксперта или консультанта."],
            ["Применимость в разных странах", "Полученные знания и навыки можно использовать в работе с клиентами, командами и бизнес-задачами в международном контексте."]
          ].map(([title, text]) => <div key={title} className="rounded-lg border border-graphite/10 bg-white p-6"><h3 className="text-2xl font-semibold text-ink">{title}</h3><p className="mt-4 text-sm leading-7 text-slate">{text}</p></div>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
