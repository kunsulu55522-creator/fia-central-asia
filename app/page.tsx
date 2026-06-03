import Image from "next/image";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";
import { RegionalBlock } from "@/components/RegionalBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustStats } from "@/components/TrustStats";
import { programs, specializations, team } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Официальное представительство Fowler International Academy of Professional Coaching в Казахстане и Центральной Азии"
        title="Освойте международные стандарты коучинга и применяйте их на практике"
        text="Вы получаете доступ к программам FIA для студентов из Казахстана, Центральной Азии и других русскоязычных стран: практическое обучение, методологию Берри Фаулера и инструменты, которые помогают достигать устойчивых результатов в бизнесе, карьере и жизни."
        image="/images/fia-hero-training.png"
        badges={["Казахстан и Центральная Азия", "80% практики / 20% теории", "Методология Берри Фаулера"]}
      />

      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader eyebrow="Почему коучинг?" title="Мир знает достаточно. Теперь важно действовать." />
          <div className="max-w-4xl text-lg leading-8 text-slate">
            <p>
              Сегодня проблема большинства людей не в нехватке знаний. У нас есть книги, курсы, эксперты и огромное количество информации. Но знания не всегда превращаются в действия и результаты.
            </p>
            <p className="mt-5">
              Люди ставят цели, но не достигают их. Руководители знают, что нужно делать, но команды не внедряют изменения. Эксперты обладают ценными знаниями, но клиенты не применяют рекомендации на практике.
            </p>
            <p className="mt-5 font-semibold text-graphite">
              Коучинг помогает преодолеть разрыв между знанием и действием: увидеть препятствия, принять решения, взять ответственность за результат и двигаться к цели осознанно и последовательно. В FIA мы обучаем коучингу как практической системе, которая помогает превращать намерения в реальные результаты.
            </p>
          </div>
        </div>
      </section>

      <TrustStats />
      <RegionalBlock />

      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Для кого" title="Коучинг для бизнеса, практики и новой профессии" text="Вы получаете инструменты, которые можно применять в управлении, консультировании, развитии клиентов, команд и собственной профессиональной траектории." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ["Предприниматели и топ-менеджеры", "Коучинг помогает управлять через вопросы, развивать самостоятельность команды и снижать зависимость бизнеса от постоянного ручного контроля."],
            ["Эксперты, психологи и консультанты", "Коучинг усиливает практику: клиент не только понимает проблему, но и берёт следующий шаг, который можно проверить в реальности."],
            ["Новая профессия", "Мы даём структурированный вход в профессию коуча и основу для дальнейшего развития частной практики или международной траектории."]
          ].map(([title, text]) => (
            <div key={title} className="hover-lift rounded-lg border border-graphite/10 bg-white p-6">
              <h3 className="text-2xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px section-divider bg-mist py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="Программы" title="Результаты, которые вы получаете после обучения FIA" text="В процессе обучения вы осваиваете не только теорию коучинга, но и практические навыки для сессий, управленческих разговоров, работы с клиентами и командами." />
          <Button href="/programs" variant="ghost">Все программы</Button>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {programs.map((program, index) => <ProgramCard key={program.title} {...program} featured={index === 0} />)}
        </div>
      </section>

      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Специализации" title="Отдельные направления для конкретных профессиональных задач" text="Специализированные программы помогают углубить практику и работать с запросами, которые часто встречаются у клиентов, руководителей и команд." />
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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg bg-ink">
            <Image src="/images/fia-programs-workshop.png" alt="Практическое обучение коучингу" width={1200} height={675} className="aspect-[16/11] w-full object-cover opacity-90" />
          </div>
          <div>
            <SectionHeader eyebrow="Почему FIA" title="Методология, созданная практиком" text="Наша академия опирается на опыт Берри Фаулера — американского предпринимателя и коуча с более чем 45-летней практикой. Вы осваиваете подход, в котором важны вопросы, структура сессии, ответственность и действие." />
            <div className="mt-8 grid gap-3 text-sm text-graphite sm:grid-cols-2">
              <span className="rounded-md bg-mist p-4">Интенсивный формат обучения</span>
              <span className="rounded-md bg-mist p-4">80% практики / 20% теории</span>
              <span className="rounded-md bg-mist p-4">Американская методология FIA</span>
              <span className="rounded-md bg-mist p-4">Русскоязычное сопровождение</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px bg-mist py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="ICF" title="Сертификация и международные стандарты" text="Наши программы аккредитованы Международной Федерацией Коучинга (ICF), что подтверждает их соответствие мировым стандартам качества." />
          <div className="rounded-lg border border-graphite/10 bg-white p-6">
            <p className="text-lg leading-8 text-slate">
              Вы получаете обучение в логике международных стандартов, профессиональное признание и возможность применять полученные знания и навыки в разных странах мира.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/certification" variant="ghost">Подробнее о сертификации</Button>
              <Button href="/contacts">Задать вопрос</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Наша команда" title="Эксперты и тренеры Fowler International Academy of Professional Coaching" text="Эксперты и тренеры Fowler International Academy of Professional Coaching, которые помогают студентам осваивать международные стандарты коучинга и применять их на практике." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-lg border border-graphite/10 bg-white p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mist text-lg font-bold text-navy">{member.name.split(" ").map((part) => part[0]).join("")}</div>
              <h3 className="text-xl font-semibold text-ink">{member.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
