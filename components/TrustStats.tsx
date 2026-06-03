import { trustStats } from "@/data/site";

export function TrustStats() {
  return (
    <section className="container-px bg-porcelain py-10">
      <div className="grid gap-px overflow-hidden rounded-lg border border-graphite/10 bg-graphite/10 md:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.value} className="bg-white p-6">
            <p className="display-title text-4xl font-semibold text-navy">{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
