import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { TestiMonials } from "./_components/testimoniasl";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TestiMonials />
      <Footer />
    </main>
  );
}
