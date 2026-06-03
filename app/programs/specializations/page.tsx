import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function SpecializationsPage() {
  return (
    <>
      <Hero eyebrow="Специализированные направления" title="Мы развиваем коучинг для конкретных запросов клиентов и команд" text="Специализированные программы FIA помогают углубить практику и выбрать направление, где коучинговые инструменты работают с определёнными типами целей, препятствий и решений." image="/images/fia-programs-workshop.png" badges={["Стрессоустойчивость", "Карьера", "Группы и команды"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Направления" title="Выберите специализацию" text="Мы поможем понять, какое направление соответствует вашей практике, аудитории и профессиональной цели." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Стрессоустойчивость и саморегуляция", "Карьерный коучинг и монетизация талантов", "Групповой коучинг", "Командное развитие"].map((title) => <div key={title} className="rounded-lg border border-graphite/10 bg-white p-6"><h3 className="text-xl font-semibold text-ink">{title}</h3></div>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
