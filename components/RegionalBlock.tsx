import Image from "next/image";
import { Button } from "./Button";

export function RegionalBlock() {
  return (
    <section className="container-px bg-mist py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Казахстан и Центральная Азия</p>
          <h2 className="display-title text-4xl font-semibold leading-tight text-ink md:text-5xl">Официальное представительство FIA в Казахстане и Центральной Азии</h2>
          <p className="mt-6 text-lg leading-8 text-slate">
            Мы представляем Fowler International Academy of Professional Coaching в Казахстане и Центральной Азии и развиваем доступ к программам FIA для студентов из региона и других русскоязычных стран.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate">
            Вы получаете понятную точку входа в программы FIA, консультацию на русском языке и связь с международной академией профессионального коучинга.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contacts">Получить консультацию</Button>
            <Button href="https://wa.me/" variant="whatsapp">Написать в WhatsApp</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image src="/images/fia-central-asia-representation.png" alt="Современная деловая среда Астаны и Центральной Азии" width={1200} height={675} className="aspect-[16/10] w-full object-cover" />
          <div className="absolute bottom-4 left-4 rounded-md bg-white/92 px-4 py-3 text-sm font-semibold text-ink shadow-soft backdrop-blur">
            Представительство: Астана, Казахстан
          </div>
        </div>
      </div>
    </section>
  );
}
