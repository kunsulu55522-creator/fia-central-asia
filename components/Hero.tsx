import Image from "next/image";
import { Button } from "./Button";

type HeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badges?: string[];
};

export function Hero({ eyebrow, title, text, image, primaryLabel = "Оставить заявку", primaryHref = "/contacts", secondaryLabel = "Посмотреть программы", secondaryHref = "/programs", badges = [] }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-height))] overflow-hidden bg-ink text-white">
      <Image src={image} alt="Профессиональное обучение FIA" fill priority className="object-cover" />
      <div className="image-overlay absolute inset-0" />
      <div className="container-px relative z-10 flex min-h-[calc(100svh-var(--header-height))] items-center py-16">
        <div className="hero-in max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E6C990]">{eyebrow}</p>
          <h1 className="display-title text-5xl font-semibold leading-[1.04] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button>
            <Button href="https://wa.me/" variant="whatsapp">WhatsApp</Button>
          </div>
          {badges.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((badge) => <span key={badge} className="rounded-full border border-white/22 bg-white/10 px-4 py-2 text-xs font-semibold text-white/88 backdrop-blur">{badge}</span>)}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
