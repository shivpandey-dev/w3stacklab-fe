import Link from "next/link";
import type { ComponentProps } from "react";

// Hover colours live in globals.css (.btn-red / .btn-ghost).
const variants = {
  primary: "btn-red bg-brand text-white",
  ghost: "btn-ghost border-[1.5px] border-ink",
} as const;

const sizes = {
  hero: "min-h-[50px] px-7 py-[15px]",
  md: "min-h-12 px-[26px] py-3.5",
  nav: "min-h-11 px-[22px] py-[11px]",
  sm: "min-h-[46px] px-6 py-3",
} as const;

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  variant = "primary",
  size = "hero",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ${variants[variant]} ${sizes[size]} ${
        variant === "ghost" && size === "hero" ? "py-3.5" : ""
      } ${className}`}
      {...props}
    />
  );
}
