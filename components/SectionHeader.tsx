type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">{eyebrow}</p> : null}
      <h2 className="display-title text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate">{text}</p> : null}
    </div>
  );
}
