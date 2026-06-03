import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { programs } from "@/data/site";

const program = programs.find((item) => item.slug === "specializations");

export const metadata: Metadata = {
  title: "Специализированные направления | FIA",
  description:
    program?.summary ??
    "Специализированные направления FIA для углубления коучинговой практики."
};

export default function SpecializationsPage() {
  if (!program) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-20 text-white md:py-28">
          <div className="container max-w-5xl">
            <p className="eyebrow text-gold">{program.label}</p>
            <h1 className="display mt-5 text-5xl font-bold leading-tight md:text-7xl">
              {program.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-white/75">
              {program.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#apply" variant="light">
                Оставить заявку
              </ButtonLink>
              <ButtonLink href="/programs" variant="light">
                Все программы
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Направления</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Углубление практики под разные клиентские задачи
              </h2>
            </div>
            <div className="grid gap-5">
              {program.bullets.map((item) => (
                <article className="border-t border-line pt-5" key={item}>
                  <h3 className="text-xl font-extrabold text-forest">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-mint/50">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Формат и результат</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Практическая специализация для расширения профессионального предложения
              </h2>
            </div>
            <div className="grid gap-6">
              <article className="rounded-lg border border-line bg-white p-6">
                <h3 className="text-xl font-extrabold">Как проходит</h3>
                <p className="mt-3 text-lg leading-8 text-ink/70">
                  {program.format}
                </p>
              </article>
              <article className="rounded-lg border border-line bg-white p-6">
                <h3 className="text-xl font-extrabold">Что получает студент</h3>
                <p className="mt-3 text-lg leading-8 text-ink/70">
                  {program.result}
                </p>
              </article>
            </div>
          </div>
        </section>

        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
