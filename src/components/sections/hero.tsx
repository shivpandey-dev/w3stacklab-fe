import { HeroSlide } from "@/components/hero/hero-slide";
import { Carousel } from "@/components/ui/carousel";
import { Container } from "@/components/ui/section";
import { heroSlides } from "@/lib/hero-slides";
import { TechMarquee } from "./tech-marquee";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div
        aria-hidden
        className="absolute -right-[120px] -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(217,31,41,0.16),rgba(217,31,41,0)_65%)]"
      />

      <Container className="relative pb-12 pt-14 sm:pt-[88px]">
        <Carousel
          label="Highlights"
          slides={heroSlides.map((slide, i) => (
            <HeroSlide key={slide.id} slide={slide} first={i === 0} />
          ))}
          controlsClassName="mt-10"
        />
      </Container>

      <TechMarquee />
    </section>
  );
}
