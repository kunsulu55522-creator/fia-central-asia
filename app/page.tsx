import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { ProgramCard } from "@/components/ProgramCard";
import { audiences, contacts, programs, team, whyFia } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <div className="absolute right-[-12vw] top-1/2 h-[78vw] max-h-[850px] min-h-[460px] w-[78vw] min-w-[460px] -translate-y-1/2 rounded-full bg-white/5" />
            <Image
              alt="Печать FIA"
              className="absolute right-[-8vw] top-1/2 h-[70vw] max-h-[760px] min-h-[420px] w-[70vw] min-w-[420px] -translate-y-1/2 rounded-full object-cover opacity-30 mix-blend-screen"
              height={1254}
              src="/fia-seal.jpeg"
              width={1254}
              priority
            />
          </div>
          <div className="container relative z-10 flex min-h-[calc(100svh-80px)] items-center py-16">
            <div className="max-w-3xl">
              <p className="reveal eyebrow text-gold">FIA · Русскоязычное отделение</p>
              <h1 className="reveal-delay display mt-5 text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
                Fowler International Academy of Professional Coaching
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                Официальное представительство американской академии коучинга для русскоязычной аудитории: ICF-стандарт, интенсивная практика и методология Берри Фаулера.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#apply" variant="light">
                  Оставить заявку
                </ButtonLink>
                <ButtonLink href={contacts.whatsappHref} variant="light">
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="section bg-white">
          <div className="container">
            <div className="max-w-3xl">
              <p className="eyebrow">Почему FIA?</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Коротко о том, на чем держится доверие
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyFia.map((item) => (
                <article
                  className="hover-lift rounded-lg border border-line bg-white p-5"
                  key={item.title}
                >
                  <h3 className="text-2xl font-extrabold text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-mint/50">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Для кого</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Три аудитории. Один практический инструмент.
              </h2>
            </div>
            <div className="grid gap-6">
              {audiences.map((item) => (
                <article className="border-l-2 border-gold pl-6" key={item.title}>
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-ink/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section bg-ink text-white">
          <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <figure className="relative">
              <span className="display absolute -top-12 left-0 text-8xl text-gold/35 md:text-9xl">
                “
              </span>
              <blockquote className="display relative max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Мы создали систему, в которой человек учится коучингу через практику, а не через ожидание идеального момента.
              </blockquote>
              <figcaption className="mt-8 text-sm font-extrabold uppercase text-gold">
                Берри Фаулер · основатель FIA
              </figcaption>
            </figure>
            <div className="rounded-lg border border-white/10 bg-white/5 p-7">
              <p className="eyebrow text-white/50">Как появилась система FIA</p>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Берри Фаулер — американский предприниматель и коуч с более чем 45-летним опытом. После Sylvan Learning Center он адаптировал подход ускоренного обучения для взрослых и создал систему FIA.
              </p>
              <div className="mt-7 grid gap-4 text-sm text-white/70">
                <p><strong className="text-white">1979</strong> — основан Sylvan Learning Center.</p>
                <p><strong className="text-white">FIA</strong> — практическая система подготовки профессиональных коучей.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="section bg-white">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow">Программы</p>
                <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                  От базового интенсива до специализаций
                </h2>
              </div>
              <ButtonLink href="#apply" variant="secondary">
                Выбрать программу
              </ButtonLink>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {programs.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section bg-mint/50">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Команда</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Русскоязычная экспертиза с международной опорой
              </h2>
            </div>
            <div className="grid gap-4">
              {team.map((member) => (
                <div className="rounded-lg border border-line bg-white p-5 text-base font-semibold leading-7" key={member}>
                  {member}
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
