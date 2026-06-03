import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  className?: string;
};

const styles = {
  primary: "bg-navy text-white hover:bg-ink",
  secondary: "bg-white text-ink hover:bg-mist border border-white/70",
  ghost: "border border-graphite/20 text-ink hover:border-steel hover:text-steel",
  whatsapp: "bg-moss text-white hover:bg-[#255c56]"
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
