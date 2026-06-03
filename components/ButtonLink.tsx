import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-forest text-white hover:bg-ink focus-visible:outline-forest",
    secondary:
      "border border-forest/25 text-forest hover:border-forest hover:bg-white focus-visible:outline-forest",
    light:
      "bg-white text-forest hover:bg-mint focus-visible:outline-white"
  };

  const className = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition ${styles[variant]}`;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        className={className}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
