"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { bookCall, liveNavEntries, type NavEntry } from "@/lib/nav";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Close, Logo, Menu } from "@/components/ui/icons";

// Pointer-intent delay before a hover opens or closes a menu (guide: ~150 ms).
const INTENT_MS = 150;

type OpenedBy = "hover" | "click";

function BrandLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="#top"
      onClick={onClick}
      className="flex min-h-11 shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-[21px] font-bold tracking-[-0.02em]"
    >
      <Logo className="h-8 w-8" />
      <span>
        W3 Stack <span className="text-brand">Lab</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [openedBy, setOpenedBy] = useState<OpenedBy>("hover");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const burgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    clearTimeout(timer.current);
    setActive(null);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    burgerRef.current?.focus();
  }, []);

  // Esc closes an open menu and returns focus to its trigger.
  useEffect(() => {
    if (!active) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const focusInside = headerRef.current?.contains(document.activeElement);
      triggers.current[active]?.focus({ preventScroll: true });
      if (!focusInside) (document.activeElement as HTMLElement | null)?.blur();
      closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, closeMenu]);

  function scheduleClose() {
    clearTimeout(timer.current);
    if (active && openedBy === "hover") {
      timer.current = setTimeout(closeMenu, INTENT_MS);
    }
  }

  function hoverOpen(id: string, event: PointerEvent) {
    if (event.pointerType !== "mouse") return; // touch uses click
    clearTimeout(timer.current);
    if (active === id) return;
    if (active !== null) {
      // Moving between menus: switch at once, no second delay.
      setActive(id);
      setOpenedBy("hover");
      return;
    }
    timer.current = setTimeout(() => {
      setActive(id);
      setOpenedBy("hover");
    }, INTENT_MS);
  }

  function toggle(id: string, event: MouseEvent) {
    clearTimeout(timer.current);
    if (active === id) {
      // A mouse click on a menu that hover just opened pins it open.
      if (openedBy === "hover" && event.detail > 0) setOpenedBy("click");
      else closeMenu();
      return;
    }
    setActive(id);
    setOpenedBy("click");
  }

  function onHeaderPointerLeave(event: PointerEvent) {
    if (event.pointerType !== "mouse") return;
    scheduleClose();
  }

  function onHeaderBlur(event: FocusEvent) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      closeMenu();
    }
  }

  return (
    <>
      {/* Dims the page behind an open menu. */}
      <div
        aria-hidden
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          active ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        ref={headerRef}
        onPointerEnter={() => clearTimeout(timer.current)}
        onPointerLeave={onHeaderPointerLeave}
        onBlur={onHeaderBlur}
        className="relative z-50 border-b border-line bg-white"
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-[18px] sm:px-10">
          <BrandLink onClick={closeMenu} />

          <nav aria-label="Primary" className="hidden items-center gap-x-[30px] text-[15px] font-medium lg:flex">
            <ul className="m-0 flex list-none items-center gap-x-[30px] p-0">
              {liveNavEntries.map((entry) => (
                <li key={entry.id}>
                  {entry.menu ? (
                    <DesktopMenu
                      entry={entry}
                      open={active === entry.id}
                      registerTrigger={(el) => {
                        triggers.current[entry.id] = el;
                      }}
                      onHover={(e) => hoverOpen(entry.id, e)}
                      onToggle={(e) => toggle(entry.id, e)}
                      onNavigate={closeMenu}
                    />
                  ) : (
                    <Link
                      href={entry.href ?? "#"}
                      onPointerEnter={scheduleClose}
                      onClick={closeMenu}
                      className="nav inline-flex min-h-11 items-center"
                    >
                      {entry.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Button href={bookCall.href} size="nav" onPointerEnter={scheduleClose}>
              {bookCall.label}
            </Button>
          </nav>

          <button
            ref={burgerRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu width={24} height={24} />
          </button>
        </div>
      </header>

      {drawerOpen && <MobileDrawer onClose={closeDrawer} />}
    </>
  );
}

function DesktopMenu({
  entry,
  open,
  registerTrigger,
  onHover,
  onToggle,
  onNavigate,
}: {
  entry: NavEntry;
  open: boolean;
  registerTrigger: (el: HTMLButtonElement | null) => void;
  onHover: (event: PointerEvent) => void;
  onToggle: (event: MouseEvent) => void;
  onNavigate: () => void;
}) {
  const menu = entry.menu!;
  const panelId = `menu-${entry.id}`;

  return (
    <>
      <button
        ref={registerTrigger}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onPointerEnter={onHover}
        onClick={onToggle}
        className="nav inline-flex min-h-11 cursor-pointer items-center gap-1"
      >
        {entry.label}
        <ChevronDown
          width={16}
          height={16}
          className={`transition-transform duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Static markup, always in the DOM: opening never fetches or shifts layout. */}
      <div
        id={panelId}
        role="region"
        aria-label={`${entry.label} menu`}
        className={`absolute inset-x-0 top-full border-b border-line bg-white shadow-[0_24px_40px_-24px_rgba(20,22,26,0.25)] transition-[opacity,transform,visibility] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transform-none ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1.5 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-5 pb-5 pt-6 sm:px-10">
          <ul className="m-0 grid list-none grid-cols-3 gap-x-6 gap-y-1 p-0">
            {menu.items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-surface focus-visible:bg-surface"
                >
                  <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] font-semibold">
                    {item.name}
                    {item.tag && (
                      <span className="rounded bg-brand/10 px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-brand">
                        {item.tag}
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-sm font-normal leading-snug text-muted">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line px-4 pt-4 text-sm">
            {menu.viewAll ? (
              <Link
                href={menu.viewAll.href}
                onClick={onNavigate}
                className="inline-flex min-h-9 items-center gap-1.5 font-semibold text-brand"
              >
                {menu.viewAll.label}
                <ArrowRight width={15} height={15} />
              </Link>
            ) : (
              <span />
            )}
            <p className="m-0 text-muted">
              {menu.prompt.text}{" "}
              <Link
                href={menu.prompt.href}
                onClick={onNavigate}
                className="font-semibold text-brand underline-offset-2 hover:underline"
              >
                {menu.prompt.linkLabel}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll while the drawer is open, and move focus into it.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    // Keep Tab inside the dialog.
    const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!nodes || nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onKeyDown={onKeyDown}
      className="drawer-in fixed inset-0 z-[70] flex flex-col bg-white lg:hidden"
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-[18px] sm:px-10">
        <BrandLink onClick={onClose} />
        <button
          ref={closeRef}
          type="button"
          aria-label="Close menu"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md"
          onClick={onClose}
        >
          <Close width={24} height={24} />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-10">
        <ul className="m-0 list-none p-0">
          {liveNavEntries.map((entry) => {
            const menu = entry.menu;
            const isOpen = expanded === entry.id;
            return (
              <li key={entry.id} className="border-b border-line">
                {menu ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`drawer-${entry.id}`}
                      onClick={() => setExpanded(isOpen ? null : entry.id)}
                      className="flex min-h-14 w-full cursor-pointer items-center justify-between text-left text-lg font-semibold"
                    >
                      {entry.label}
                      <ChevronDown
                        width={20}
                        height={20}
                        className={`transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div id={`drawer-${entry.id}`} hidden={!isOpen} className="pb-3">
                      <ul className="m-0 list-none p-0">
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block min-h-11 rounded-lg px-3 py-2.5 active:bg-surface"
                            >
                              <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-semibold">
                                {item.name}
                                {item.tag && (
                                  <span className="rounded bg-brand/10 px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-brand">
                                    {item.tag}
                                  </span>
                                )}
                              </span>
                              <span className="mt-0.5 block text-sm leading-snug text-muted">
                                {item.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {menu.viewAll && (
                        <Link
                          href={menu.viewAll.href}
                          onClick={onClose}
                          className="mt-1 inline-flex min-h-11 items-center gap-1.5 px-3 text-sm font-semibold text-brand"
                        >
                          {menu.viewAll.label}
                          <ArrowRight width={15} height={15} />
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={entry.href ?? "#"}
                    onClick={onClose}
                    className="flex min-h-14 items-center text-lg font-semibold"
                  >
                    {entry.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Booking button stays pinned at the bottom. */}
      <div className="border-t border-line bg-white px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-10">
        <Button href={bookCall.href} onClick={onClose} className="w-full">
          {bookCall.label}
        </Button>
      </div>
    </div>
  );
}
