import About from "@/components/about";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
