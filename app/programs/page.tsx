import Image from "next/image";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeader } from "@/components/SectionHeader";
import { programs, specializations } from "@/data/site";

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="Программы FIA"
        title="Программы FIA дают практические результаты для бизнеса, карьеры и коучинговой практики"
        text="В процессе обучения вы осваиваете международные стандарты коучинга, структуру сессии, работу с целями, ответственностью и действиями. Программы доступны для студентов из Казахстана, Центральной Азии и других русскоязычных стран."
        image="/images/fia-programs-workshop.png"
        primaryLabel="Оставить заявку"
        primaryHref="/contacts"
        secondaryLabel="О сертификации"
        secondaryHref="/certification"
        badges={["Базовый курс", "Executive Coaching", "Специализированные направления"]}
      />

      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Результаты обучения" title="Что вы сможете применять после программ FIA" text="Акцент программ — не на самом выборе направления, а на том, какие навыки вы получаете и где сможете применять их после обучения." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ["Проводить коучинговые сессии", "Вы сможете выстраивать разговор вокруг цели, препятствий, решений и ответственности клиента.", "/programs/basic"],
            ["Использовать коучинг в управлении", "Вы сможете применять коучинговые вопросы в командных встречах, развитии людей и внедрении изменений.", "/programs/executive"],
            ["Развивать специализацию", "Вы сможете работать с конкретными запросами: стресс, карьера, группы, команды и развитие талантов.", "/programs/specializations"]
          ].map(([title, text, href]) => (
            <div key={title} className="hover-lift rounded-lg border border-graphite/10 bg-white p-6">
              <h3 className="text-2xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate">{text}</p>
              <Button href={href} variant="ghost" className="mt-6">Подробнее</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px bg-mist py-20">
        <SectionHeader eyebrow="Направления" title="Основные программы FIA" text="Каждая программа связана с конкретным применением: профессиональная практика, управление, специализация и работа с клиентами или командами." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {programs.map((program, index) => <ProgramCard key={program.title} {...program} featured={index === 0} />)}
        </div>
      </section>

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Image src="/images/fia-central-asia-representation.png" alt="Консультация FIA для Казахстана и Центральной Азии" width={1200} height={675} className="rounded-lg object-cover" />
          <div>
            <SectionHeader eyebrow="Доступность программ" title="Программы FIA доступны для студентов из Казахстана, Центральной Азии и других русскоязычных стран" text="Вы получаете русскоязычную точку контакта, международный контекст FIA и возможность применять освоенные знания и навыки в разных профессиональных средах." />
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
        <SectionHeader eyebrow="Специализированные программы" title="Три направления для углубления практики" text="Эти программы помогают работать с конкретными запросами клиентов, руководителей, групп и команд." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {specializations.map((item) => (
            <article key={item.title} className="rounded-lg border border-graphite/10 bg-white p-6">
              <h3 className="text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite">{item.result}</p>
              <p className="mt-4 text-sm leading-7 text-slate">{item.benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["1", "Вы оставляете заявку"],
            ["2", "Вы уточняете цель обучения"],
            ["3", "Получаете информацию о программе"],
            ["4", "Начинаете обучение и практику"]
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
