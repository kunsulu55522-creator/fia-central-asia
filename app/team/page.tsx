import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { team } from "@/data/site";

export default function TeamPage() {
  return (
    <>
      <Hero eyebrow="Наша команда" title="Люди, которые помогают пройти путь в FIA" text="Мы сопровождаем студентов из Казахстана, Центральной Азии и других русскоязычных стран: помогаем познакомиться с академией, выбрать программу и пройти обучение в международном контексте FIA." image="/images/fia-hero-training.png" primaryLabel="Оставить заявку" primaryHref="/contacts" secondaryLabel="Смотреть программы" secondaryHref="/programs" />
      <section className="container-px bg-porcelain py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="rounded-lg border border-graphite/10 bg-white p-6">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-mist text-xl font-bold text-navy">{member.name.split(" ").map((part) => part[0]).join("")}</div>
              <h2 className="text-2xl font-semibold text-ink">{member.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
