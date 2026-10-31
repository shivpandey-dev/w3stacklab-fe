import Link from "next/link";
import { posts } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";

export function Blog() {
  return (
    <section id="blog" className="bg-surface">
      <Container className="flex flex-col gap-12 py-28">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <SectionLabel>Blog</SectionLabel>
            <SectionHeading>Notes on building AI agents and software.</SectionHeading>
          </div>
          <Button href="#blog" variant="ghost" size="sm">
            All posts
          </Button>
        </div>

        <div className="rv grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {posts.map((post, i) => (
            <Link
              key={i}
              href="#blog"
              className="lift zoom flex flex-col rounded-2xl bg-white"
            >
              <div className="flex h-[190px] items-center justify-center bg-line text-sm text-muted">
                [Cover image]
              </div>
              <div className="flex flex-col gap-2.5 p-6">
                <span className="text-[13px] font-semibold text-brand">
                  {post.category}
                </span>
                <span className="font-display text-[21px] font-bold leading-[1.25] tracking-[-0.015em]">
                  {post.title}
                </span>
                <span className="text-sm text-muted">{post.meta}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
