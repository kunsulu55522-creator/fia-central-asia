import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { programs } from "@/data/site";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs
    .filter((program) => program.slug !== "specializations")
    .map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} | FIA`,
    description: program.summary
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

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
              <ButtonLink href="/#programs" variant="light">
                Все программы
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Формат</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Практический результат без растянутого обучения
              </h2>
            </div>
            <div className="grid gap-6">
              <article className="border-t border-line pt-6">
                <h3 className="text-xl font-extrabold">Как проходит</h3>
                <p className="mt-3 text-lg leading-8 text-ink/70">{program.format}</p>
              </article>
              <article className="border-t border-line pt-6">
                <h3 className="text-xl font-extrabold">Что получает студент</h3>
                <p className="mt-3 text-lg leading-8 text-ink/70">{program.result}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-mint/50">
          <div className="container">
            <p className="eyebrow">Ключевые акценты</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {program.bullets.map((bullet) => (
                <div className="rounded-lg border border-line bg-white p-6 text-lg font-bold leading-7" key={bullet}>
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="section bg-forest text-white">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-white/50">Заявка</p>
              <h2 className="display mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Узнайте ближайший формат обучения
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Выберите программу в форме, и команда FIA свяжется с вами для консультации.
              </p>
            </div>
            <LeadForm compact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
