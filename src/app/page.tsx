import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Leadership } from "@/components/sections/leadership";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        {/* The proof bar overlaps into the grey services section */}
        <div className="bg-surface">
          <Stats />
          <Services />
        </div>
        <Solutions />
        <Work />
        <Process />
        <Leadership />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
