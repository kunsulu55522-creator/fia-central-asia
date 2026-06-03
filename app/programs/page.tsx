import Image from "next/image";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeader } from "@/components/SectionHeader";
import { programs } from "@/data/site";

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="Программы FIA"
        title="Мы помогаем выбрать программу под вашу профессиональную цель"
        text="Вы можете прийти в FIA за новой профессией, управленческим инструментом или углублением практики. Программы доступны для студентов из Казахстана, Центральной Азии и других русскоязычных стран, а мы поможем выбрать понятный следующий шаг."
        image="/images/fia-programs-workshop.png"
        primaryLabel="Подобрать программу"
        primaryHref="/contacts"
        secondaryLabel="О сертификации"
        secondaryHref="/certification"
        badges={["Базовый курс", "Executive Coaching", "Специализированные направления"]}
      />

      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Быстрый выбор" title="С какой задачей вы приходите?" text="Мы сделали страницу программ как навигатор: сначала цель, затем подходящее направление." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ["Хочу освоить профессию коуча", "Базовый курс профессионального коучинга", "/programs/basic"],
            ["Хочу применять коучинг в управлении", "Executive Coaching", "/programs/executive"],
            ["Хочу развить специализацию", "Специализированные направления", "/programs/specializations"]
          ].map(([goal, recommendation, href]) => (
            <div key={goal} className="hover-lift rounded-lg border border-graphite/10 bg-white p-6">
              <p className="text-sm font-semibold text-brass">{goal}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{recommendation}</h3>
              <Button href={href} variant="ghost" className="mt-6">Смотреть программу</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px bg-mist py-20">
        <SectionHeader eyebrow="Направления" title="Основные программы FIA" text="Мы обучаем через практику, структуру и работу с реальными задачами, а не через набор разрозненных советов." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {programs.map((program, index) => <ProgramCard key={program.title} {...program} featured={index === 0} />)}
        </div>
      </section>

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Image src="/images/fia-central-asia-representation.png" alt="Консультация FIA для Казахстана и Центральной Азии" width={1200} height={675} className="rounded-lg object-cover" />
          <div>
            <SectionHeader eyebrow="Консультация" title="Мы сопровождаем выбор программы в Казахстане и Центральной Азии" text="Если вы выбираете программу из Казахстана, Центральной Азии или другой русскоязычной страны, представитель FIA поможет разобраться в направлениях, формате обучения и следующих шагах." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contacts">Получить консультацию</Button>
              <Button href="https://wa.me/" variant="whatsapp">Написать в WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px bg-mist py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Сравнение" title="Как понять, что выбрать" />
          <div className="overflow-hidden rounded-lg border border-graphite/10 bg-white">
            {programs.map((program) => (
              <div key={program.title} className="grid gap-4 border-b border-graphite/10 p-6 last:border-b-0 md:grid-cols-[0.7fr_1.3fr]">
                <h3 className="text-xl font-semibold text-ink">{program.title}</h3>
                <div className="grid gap-3 text-sm leading-6 text-slate">
                  <p><strong className="text-graphite">Формат:</strong> {program.format}</p>
                  <p><strong className="text-graphite">Результат:</strong> {program.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["1", "Вы оставляете заявку"],
            ["2", "Мы уточняем вашу цель"],
            ["3", "Вы выбираете программу"],
            ["4", "Получаете инструкции по старту"]
          ].map(([number, text]) => (
            <div key={number} className="rounded-lg border border-graphite/10 bg-white p-6">
              <p className="display-title text-4xl font-semibold text-brass">{number}</p>
              <p className="mt-4 font-semibold text-ink">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
