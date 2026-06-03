import Link from "next/link";
import type { programs } from "@/data/site";

type Program = (typeof programs)[number];

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="hover-lift group border-t border-line pt-6">
      <p className="text-sm font-extrabold uppercase text-gold">{program.label}</p>
      <h3 className="mt-4 text-2xl font-extrabold leading-tight text-ink">
        {program.title}
      </h3>
      <p className="mt-4 min-h-16 text-base leading-7 text-ink/70">{program.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <Link
          className="text-sm font-extrabold text-forest underline-offset-4 group-hover:underline"
          href={`/programs/${program.slug}`}
        >
          Подробнее
        </Link>
        <span aria-hidden className="text-2xl text-gold">→</span>
      </div>
    </article>
  );
}
