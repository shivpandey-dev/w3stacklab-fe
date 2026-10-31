import type { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Required: icon-only buttons need an accessible name. */
  label: string;
};

/** Round 44px icon-only button with a border, used for carousel controls. */
export function IconButton({
  label,
  className = "",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-white text-ink transition-[background-color,border-color,color,transform] duration-150 ease-out hover:border-brand hover:text-brand active:scale-95 disabled:pointer-events-none disabled:opacity-40 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
