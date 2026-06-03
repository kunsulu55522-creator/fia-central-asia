import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function FounderPage() {
  return (
    <>
      <Hero eyebrow="Основатель" title="Берри Фаулер и методология FIA" text="Берри Фаулер — американский предприниматель и коуч с более чем 45-летним опытом. Его подход вырос из практики построения образовательных систем и был адаптирован для обучения взрослых профессиональному коучингу." image="/images/fia-programs-workshop.png" primaryLabel="Смотреть программы" primaryHref="/programs" secondaryLabel="О FIA" secondaryHref="/about" badges={["45+ лет опыта", "Sylvan Learning Center", "Практическая система"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="История" title="Факты об основателе" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {["В 1979 году основал Sylvan Learning Center.", "Создал методику ускоренного обучения.", "Позже адаптировал подход для обучения взрослых и создал систему FIA.", "О нём писали The Wall Street Journal, Forbes, The New York Times, Newsweek и USA Today."].map((text) => <div key={text} className="rounded-lg border border-graphite/10 bg-white p-6 text-lg leading-8 text-slate">{text}</div>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
