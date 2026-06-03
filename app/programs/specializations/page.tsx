import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { specializations } from "@/data/site";

export default function SpecializationsPage() {
  return (
    <>
      <Hero eyebrow="Специализированные направления" title="Коучинг для конкретных запросов клиентов, групп и команд" text="Специализированные программы FIA помогают углубить практику в направлениях, где коучинговые инструменты работают с определёнными типами целей, препятствий и решений." image="/images/fia-programs-workshop.png" badges={["Стрессоустойчивость", "Карьера", "Группы и команды"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Направления" title="Что вы сможете применять после обучения" text="Каждое направление даёт конкретную пользу для работы с клиентами, руководителями, группами и командами." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {specializations.map((item) => (
            <article key={item.title} className="rounded-lg border border-graphite/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite">{item.result}</p>
              <p className="mt-4 text-sm leading-7 text-slate">{item.benefit}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
