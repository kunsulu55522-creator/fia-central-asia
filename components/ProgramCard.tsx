import { Button } from "./Button";

type ProgramCardProps = {
  title: string;
  label: string;
  summary: string;
  audience: string;
  href: string;
  result?: string;
  benefits?: string[];
  featured?: boolean;
};

export function ProgramCard({ title, label, summary, audience, href, result, benefits = [], featured = false }: ProgramCardProps) {
  return (
    <article className={`hover-lift rounded-lg border p-6 ${featured ? "border-brass/50 bg-[#FFFCF7]" : "border-graphite/10 bg-white"}`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brass">{label}</p>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate">{summary}</p>
      <div className="mt-5 border-t border-graphite/10 pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">Кому подходит</p>
        <p className="mt-2 text-sm leading-6 text-slate">{audience}</p>
      </div>
      {result ? (
        <div className="mt-5 border-t border-graphite/10 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">Результат</p>
          <p className="mt-2 text-sm leading-6 text-slate">{result}</p>
        </div>
      ) : null}
      {benefits.length ? (
        <ul className="mt-5 grid gap-2 text-sm leading-6 text-graphite">
          {benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}
        </ul>
      ) : null}
      <Button href={href} variant="ghost" className="mt-6">Подробнее</Button>
    </article>
  );
}
