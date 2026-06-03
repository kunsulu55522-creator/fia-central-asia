import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function ExecutiveProgramPage() {
  return (
    <>
      <Hero eyebrow="Executive Coaching" title="Коучинговый подход для руководителей и предпринимателей" text="Executive Coaching в FIA создан для предпринимателей и руководителей, которым важно развивать самостоятельность команды, проводить изменения и выходить из постоянного ручного управления." image="/images/fia-hero-training.png" badges={["Лидерство", "Команды", "Изменения"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Управленческий фокус" title="Когда знания уже есть, но изменения не внедряются" text="После обучения вы сможете использовать коучинговый подход не только для объяснения задач, но и для создания условий, где команда понимает цель, видит препятствия и берёт ответственность за следующий шаг." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Автономность команды", "Меньше ожидания указаний, больше самостоятельных решений."],
            ["Разговор о цели", "Команда яснее понимает, зачем нужны изменения и что именно должно произойти."],
            ["Ответственность", "Договорённости переводятся из обсуждений в действия, которые можно проверить."]
          ].map(([title, text]) => <div key={title} className="rounded-lg border border-graphite/10 bg-white p-6"><h3 className="text-2xl font-semibold text-ink">{title}</h3><p className="mt-4 text-sm leading-7 text-slate">{text}</p></div>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
