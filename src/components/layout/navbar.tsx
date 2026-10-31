"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Close, Logo, Menu } from "@/components/ui/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-[18px] sm:px-10">
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-[21px] font-bold tracking-[-0.02em]"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-8 w-8" />
          <span>
            W3 Stack <span className="text-brand">Lab</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-x-[30px] text-[15px] font-medium min-[1120px]:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav inline-flex min-h-11 items-center"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" size="nav">
            Book a free call
          </Button>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md min-[1120px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <Close width={24} height={24} />
          ) : (
            <Menu width={24} height={24} />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-white px-5 pb-5 pt-1 sm:px-10 min-[1120px]:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-line text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="#contact"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Book a free call
          </Button>
        </nav>
      )}
    </header>
  );
}
