import { trustStats } from "@/data/site";

export function TrustStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustStats.map((stat) => (
        <article className="rounded-lg border border-line bg-white p-5" key={stat.title}>
          <p className="text-2xl font-extrabold text-forest">{stat.title}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-ink/70">
            {stat.text}
          </p>
        </article>
      ))}
    </div>
  );
}

export default TrustStats;
