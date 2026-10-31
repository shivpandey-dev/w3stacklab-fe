import Link from "next/link";
import { footerColumns } from "@/lib/content";
import { Container } from "@/components/ui/section";
import { Logo } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="flex flex-col gap-12 pb-8 pt-[72px]">
        <div className="flex flex-wrap justify-between gap-x-14 gap-y-10">
          <div className="flex max-w-[340px] flex-[1_1_260px] flex-col gap-4">
            <span className="flex items-center gap-2.5 font-display text-[21px] font-bold">
              <Logo className="h-8 w-8" />
              W3 Stack Lab
            </span>
            <p className="m-0 text-[15px] text-night-muted">
              AI agents and automation for businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-1 text-[15px]">
                <span className="mb-2 font-semibold">{col.title}</span>
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      {...(external ? { rel: "noopener" } : {})}
                      className="inline-flex min-h-8 items-center text-night-muted transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-panel-line pt-6 text-sm text-night-muted">
          © 2026 W3 Stack Lab. Formerly W3 Stack Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
