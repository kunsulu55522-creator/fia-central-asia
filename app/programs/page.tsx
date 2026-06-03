import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Программы FIA | Русскоязычное отделение",
  description:
    "Программы Fowler International Academy of Professional Coaching: базовый интенсив, Executive Coaching и специализированные направления."
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-20 text-white md:py-28">
          <div className="container max-w-5xl">
            <p className="eyebrow text-gold">Программы FIA</p>
            <h1 className="display mt-5 text-5xl font-bold leading-tight md:text-7xl">
              Практическое обучение коучингу на русском языке
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-white/75">
              Выберите формат: интенсивный вход в профессию, развитие executive-практики или углубление в специализированные направления.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              {programs.map((program) => (
                <ProgramCard key={program.slug} program={program} />
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
