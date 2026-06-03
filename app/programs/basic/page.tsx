import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function BasicProgramPage() {
  return (
    <>
      <Hero eyebrow="Базовый курс" title="Мы обучаем профессиональному коучингу в интенсивном формате" text="Базовый курс FIA — это практический вход в систему коучинга: 20 часов обучения, работа со структурой сессии, вопросами, ответственностью и движением клиента к действию." image="/images/fia-programs-workshop.png" badges={["20 часов", "4-дневный онлайн-тренинг", "Сертификат FIA"]} />
      <section className="container-px bg-porcelain py-20">
        <SectionHeader eyebrow="Формат" title="Что входит в курс" text="Мы держим фокус на навыках, которые студент сможет применять после обучения: постановка запроса, сильные вопросы, удержание цели, работа с препятствиями и следующий шаг клиента." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Интенсив", "4-дневный онлайн-тренинг нон-стоп или самостоятельное изучение."],
            ["Практика", "80% практики и 20% теории: больше тренировки, меньше абстрактных лекций."],
            ["Результат", "Сертификат FIA и базовая готовность применять коучинговые инструменты."]
          ].map(([title, text]) => <div key={title} className="rounded-lg border border-graphite/10 bg-white p-6"><h3 className="text-2xl font-semibold text-ink">{title}</h3><p className="mt-4 text-sm leading-7 text-slate">{text}</p></div>)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
